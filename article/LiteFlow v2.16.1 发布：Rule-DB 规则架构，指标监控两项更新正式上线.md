# LiteFlow v2.16.1 发布：Rule-DB 重构外置规则架构，指标监控正式上线

LiteFlow v2.16.1 正式发布。

在 2.16.0 中，我们让 AI Agent 成为了可以参与编排的 LiteFlow 组件。到了 2.16.1，我们把目光放回了 LiteFlow 已经使用多年的外置规则架构，并对它进行了一次彻底重做。

这次最直观的变化，是配置少了。

过去接入 SQL 规则配置源，需要配置连接信息、轮询参数，再逐个填写 chain 表、script 表以及每一个字段的映射，完整配下来有二十多项。换成 2.16.1 的 Rule-DB 后，单数据源的 Spring Boot 项目通常只需要增加一个依赖，Rule-DB 专属配置可以一行都不写。

但配置从二十多项缩到接近 0 项，只是最容易看见的部分。更重要的是运行时架构的变化：

- 存储成为规则的权威源；
- 规则按需加载，不再把全部正文常驻 JVM；
- 多节点拥有统一的变更感知和周期对账机制；
- 规则发布有了正式、统一的 API；
- 运行状态可以直接通过 Actuator 查看。

除此之外，这一版还新增了 `liteflow-metrics`。chain、node 和 slot 的运行数据现在可以直接接入 Micrometer、Prometheus 和 Grafana。

下面展开说说这两个核心变化。

## Rule-DB：让存储真正成为规则的权威源

### 二十多项配置，现在几乎是 0

先来看一份原 SQL 插件的典型配置。为了同时支持规则刷新和脚本，需要填写的内容大致如下：

```yaml
liteflow:
  rule-source-ext-data-map:
    url: jdbc:mysql://localhost:3306/liteflow
    driverClassName: com.mysql.cj.jdbc.Driver
    username: root
    password: 123456
    applicationName: order-service
    sqlLogEnabled: true
    pollingEnabled: true
    pollingIntervalSeconds: 60
    pollingStartSeconds: 60
    chainTableName: chain
    chainApplicationNameField: application_name
    chainNameField: chain_name
    elDataField: el_data
    routeField: route
    namespaceField: namespace
    chainEnableField: enable
    scriptTableName: script
    scriptApplicationNameField: application_name
    scriptIdField: script_id
    scriptNameField: script_name
    scriptDataField: script_data
    scriptTypeField: script_type
    scriptLanguageField: script_language
    scriptEnableField: enable
```

这些配置有它们存在的理由：旧插件需要适配各种已有表结构。但对大多数项目来说，需求其实很简单——把规则放进数据库，然后稳定地运行起来。

Rule-DB 直接提供固定的存储结构和写入协议。它会复用容器中已有的 `DataSource`，连接池、账号和超时配置全部沿用项目现有设置；规则隔离名默认复用 `spring.application.name`。

对于单数据源的 Spring Boot 项目，只需要增加下面这个依赖：

```xml
<dependency>
    <groupId>com.yomahub</groupId>
    <artifactId>liteflow-rule-db-sql</artifactId>
    <version>2.16.1</version>
</dependency>
```

然后，就没有 Rule-DB 专属配置了。

项目里原本的这一行会直接作为规则隔离名：

```properties
spring.application.name=order-service
```

如果项目本来就配置了 `spring.application.name`，新增的 Rule-DB 配置数量就是 0。

开发环境如果希望框架自动建表，可以再增加一个可选开关：

```properties
liteflow.rule-db.sql.auto-init-table=true
```

生产环境仍然建议由 DBA 按 DDL 建表，并让执行节点使用只读账号。无论采用哪种方式，都不再需要配置表名和二十多个字段映射。

配置少了，能力反而更多了。新旧两种模式的区别可以直接放在一起看：

| 维度 | 原规则配置源 | Rule-DB |
| --- | --- | --- |
| 规则以哪里为准 | 启动后主要依赖各节点 JVM 内的规则 | 存储始终是权威源，JVM 是运行缓存 |
| 接入配置 | 连接、轮询、表名和字段映射，SQL 插件完整配置二十多项 | 单数据源 Spring Boot 项目通常无需新增配置 |
| 规则加载 | 规则正文和脚本源码全量进入 JVM | 启动只建索引和影子对象，正文首次执行时加载 |
| 多节点同步 | 各插件分别实现轮询或通知 | 变更感知加周期对账，统一维护版本水位 |
| 规则发布 | 使用方直接改存储，自行处理刷新 | 统一 `RulePublisher`，负责版本、指纹和变更记录 |
| 运行状态 | 需要业务自己补监控 | `/actuator/liteflow/ruledb` 直接查看同步和加载状态 |

### 规则越多，Rule-DB 的优势越明显

在 Rule-DB 模式下，存储始终是规则的权威源。

JVM 启动时只读取规则清单，为 chain 和 node 建立轻量的影子对象。真正的 EL、脚本源码和编译产物，会等到第一次执行时再从存储加载。

加载后的内容进入 Caffeine 有界缓存，默认容量为 500 条 chain。缓存根据访问热度淘汰，某条规则被淘汰后会退回影子状态，下次执行时再重新加载。

原来的模式下，存储里有多少规则，每个执行节点就需要持有多少规则正文和脚本源码。Rule-DB 把常驻内存的重点从“全部规则”改成了“当前热点”。

当规则只有几百条时，这个差别可能并不明显；但当规则达到几千甚至几万条，同时又部署了大量执行节点，启动加载和内存占用的差距就会越来越明显。

当然，这并不意味着规则清单本身变成了零成本。影子对象、版本号和状态索引仍然会随着规则总量增长。大规模上线前，仍然需要按照真实规则数量测试启动耗时和堆内存。

### 多节点终于有了一套统一的收敛机制

Rule-DB 将规则变更同步分成了两层：

- SQL、PostgreSQL、MongoDB、Redis 通过 seq 序号轮询感知变更，默认每 3 秒一次；
- ZooKeeper、etcd 使用 watch，Nacos 使用 Listener，变更可以直接推送到执行节点。

无论使用哪一种后端，Rule-DB 默认都会每 60 秒执行一次全量清单对账。

如果发生通知遗漏、序号不连续或增量应用失败，只要存储仍然可用，对账机制就能够重新校准节点状态。这解决了多节点环境中一个很现实的问题：当一次通知丢失时，节点不能永远停留在旧版本。

需要说明的是，Rule-DB 提供的是最终一致性，而不是让全集群在同一时刻原子切换规则。规则发布后的收敛窗口内，不同节点可能短暂执行不同版本。

这套机制也带来了统一的观察入口。通过 `/actuator/liteflow/ruledb`，可以看到同步水位，以及 `shadow`、`ready`、`stale`、`failed` 等状态数量和加载失败明细。

发布一条规则以后，不再需要靠猜测判断某个节点有没有跟上。

### 发布规则不再手写 SQL

旧 SQL 插件允许适配已有表，但规则如何写入、版本如何管理、什么时候通知执行节点，都需要使用方自行处理。

Rule-DB 把写入也纳入了正式协议。

首批七个后端共用同一套 `RulePublisher` 发布接口。管理后台可以单独依赖对应的 Rule-DB 模块，不需要启动 `FlowExecutor`，也不依赖全局 `LiteflowConfig`。

```java
try (RulePublisher publisher = RulePublisherFactory.create(
        SqlPublisherConfig.builder()
                .applicationName("order-service")
                .dataSource(ruleDataSource)
                .build())) {
    PublishResult result = publisher.publishChain(PublishChainRequest.builder()
            .chainId("orderChain")
            .el("THEN(a, b)")
            .expectedVersion(0L)
            .build());
}
```

其中，`expectedVersion` 用于乐观锁：

- 传 `0`，表示只允许新建；
- 传正数，表示只有当前版本匹配时才允许更新；
- 不传，则执行 UPSERT。

版本自增、内容写入和变更记录，会由各后端在自己的原子操作中完成。

当前一次 API 调用只能发布一条 chain 或一条 script，暂时还没有把多条规则作为整体同时切换的事务接口。

### 首批支持七种存储后端

2.16.1 首批提供了七个 Rule-DB 后端：

| 模块 | 存储 | 变更感知方式 |
| --- | --- | --- |
| `liteflow-rule-db-sql` | MySQL / MariaDB | seq 轮询 + 周期对账 |
| `liteflow-rule-db-postgresql` | PostgreSQL | seq 轮询 + 周期对账 |
| `liteflow-rule-db-mongodb` | MongoDB | seq 轮询 + 周期对账 |
| `liteflow-rule-db-redis` | Redis | seq 轮询 + 周期对账 |
| `liteflow-rule-db-zk` | ZooKeeper | watch + 周期对账 |
| `liteflow-rule-db-etcd` | etcd | watch + 周期对账 |
| `liteflow-rule-db-nacos` | Nacos 2.x 及以上 | Listener + 周期对账 |

其中，PostgreSQL 和 MongoDB 是本次新增支持的存储，原有规则插件中没有对应实现。

无论选择哪个后端，执行侧的代码都不需要改变：

```java
LiteflowResponse response = flowExecutor.execute2Resp("orderChain", null);
```

规则第一次执行时会回源加载，之后命中本地缓存。变更到达节点后，旧缓存会被标记为失效，下一次执行时加载新版本；正常的缓存命中不会增加远程读取。

## 新项目推荐 Rule-DB，老项目要先评估迁移成本

对于新项目，我们的建议很明确：只要需要把规则放在数据库、Redis、ZooKeeper、etcd 或 Nacos 中，就优先使用 Rule-DB。

它的配置更少，发布方式统一，多节点同步和可观测性也完整得多。

旧插件仍然会继续维护，主要用于保障已有项目稳定运行。已经使用旧插件的项目，则需要把这次切换当成一次架构迁移，而不是简单地修改配置前缀。

原因包括：

- 旧插件适配业务已有的表、键和配置结构；Rule-DB 使用自己定义的表、版本号、变更日志和序号协议；
- 旧管理后台通常直接写数据库或配置中心；迁移后必须改为调用 `RulePublisher`；
- 旧模式在启动时全量加载；Rule-DB 在启动时建立清单，在执行时按需加载，压测和容量评估方式也会变化；
- 两套模式不能在同一个 `FlowExecutor` 中同时运行。切换时需要移除旧插件和 `liteflow.rule-source`，只保留一个 Rule-DB 后端。

对已经深度使用旧插件的项目来说，这次迁移成本不会低。旧表定制得越多，管理后台和原存储耦合得越深，改造量就越大。

2.16.1 暂时没有提供自动迁移器。规则数据需要通过受控程序读出，再由 `RulePublisher` 写入新存储。正式切换前，还需要核对规则数量、正文、脚本类型、namespace 和 route，并完成关键 chain 回归、灰度验证和回滚预案。

因此，实际采用时可以遵循下面的判断：

- 新项目需要外置规则存储，优先使用 Rule-DB；
- 老项目规则不多、单节点运行，并且现有插件一直稳定，可以继续使用旧插件；
- 已经遇到配置复杂、规则量大、JVM 内存高或多节点刷新难确认的问题，可以把 Rule-DB 迁移提上日程。

### 上生产前需要确认的边界

Rule-DB 带来了新的架构能力，但它也有清晰的使用边界。正式上线前，请重点确认以下几点：

1. Rule-DB 提供最终一致性，不提供多节点原子切换。规则发布后的收敛窗口内，不同节点可能短暂执行不同版本；已经开始的流程会继续使用原来的条件树。
2. 七个 Rule-DB 后端同一时刻只能选择一个，并且不能和 `liteflow.rule-source` 同时使用。配置冲突时，应用会直接启动失败。
3. MongoDB 必须使用副本集或分片集群，因为发布过程依赖多文档事务，Standalone 模式不支持。
4. Redis Cluster 必须配置 `key-hash-tag`，确保 Lua 操作涉及的键落在同一个 slot。Nacos 会把单个应用的规则保存在同一份 Catalog 中，需要关注服务端的单配置容量。
5. 2.16.1 暂时没有 Apollo 后端和管理界面。正在使用 Apollo 的项目请继续使用原插件。

## 指标监控：接入现有的可观测体系

除了 Rule-DB，2.16.1 还新增了 `liteflow-metrics` 模块，通过 Micrometer 记录 LiteFlow 的运行数据。

LiteFlow 原有的简单监控会定期在日志中输出组件平均耗时，适合快速排查，但不方便查看趋势或设置告警。

新的指标模块把测量值交给 Micrometer，再由 Prometheus、Grafana 或项目中已有的监控后端处理，不再单独维护一套历史统计。

目前提供三类指标：

- chain 和 node 的执行次数、成功与失败次数、总耗时和最大耗时；
- chain 和 node 的当前在途执行数、最长在途耗时，以及按异常类型统计的失败数；
- 已注册的 chain 数、node 数、slot 池容量和当前占用量。

这些数据足够计算 QPS、平均耗时和错误率。P95、P99 需要额外开启直方图或客户端分位统计，默认的 count、sum、max 不能直接计算分位数。

### Spring Boot 项目如何接入

`liteflow-metrics` 已经是 `liteflow-spring-boot-starter` 和 `liteflow-spring-boot4-starter` 的传递依赖，因此 Spring Boot 项目不需要单独引入。

要接入 Prometheus，只需要增加 Actuator 和 Prometheus Registry：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

然后开放对应端点：

```properties
management.endpoints.web.exposure.include=liteflow,prometheus
```

应用启动后，可以直接检查指标是否已经产生：

```shell
curl localhost:8080/actuator/prometheus | grep liteflow_
```

LiteFlow 源码仓库中还提供了一套 Prometheus + Grafana 示例配置。通过 `docker compose up -d` 即可启动，并自动导入一块包含六个面板的 LiteFlow 仪表盘。

需要注意，这套配置只用于本地演示，匿名访问和默认口令都不适合生产环境。

### `/actuator/liteflow`：直接查看规则结构

除了供 Prometheus 抓取的 `/actuator/prometheus`，2.16.1 还提供了 LiteFlow 自己的 `/actuator/liteflow` 端点。

它会直接读取 `FlowBus`，可以查看 chain 的 EL、node 的类型和实现类、node 被哪些 chain 引用，也能够看到从未执行过的 chain 和 node。

排查规则结构时，不需要再从启动日志中寻找完整定义。

启用 Rule-DB 后，`/actuator/liteflow/ruledb` 还会返回当前同步水位、各种状态的目标数量，以及加载失败明细。某个节点没有及时加载新版本时，可以先确认它当前处于 `shadow`、`ready`、`stale` 还是 `failed` 状态。

指标默认只使用 chain、node、状态和异常类名等低基数标签，不包含 requestId 或完整异常信息。不过，实际的时间序列数量仍然会随着 chain 和 node 的数量增长。规则规模很大的项目，应当在上线前评估监控后端的容量。

## 最后

LiteFlow v2.16.1 不会自动启用 Rule-DB，原有六个 `liteflow-rule-*` 插件仍然可以继续使用，也会继续维护。已有项目可以先完成常规版本升级，再单独安排 Rule-DB 的迁移评估。

如果把这一版的变化概括成一句话，那就是：

> Rule-DB 让外置规则从“各节点自行加载和刷新”，变成了一套以存储为权威源、按需加载、统一发布、可对账、可观测的完整协议。

对于新项目，这会是一条更简单、更稳妥的起点。对于已经运行多年的老项目，它也值得被认真评估，但请把迁移当成一次正式的架构变更，做好完整的验证、灰度和回滚准备。

LiteFlow v2.16.1，欢迎大家升级体验。
