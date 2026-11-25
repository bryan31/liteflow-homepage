# LiteFlow v2.16.3 发布：Jev 是非判断与本地 laya 决策引擎

LiteFlow 2.16.3 发布了。

这一版没有架构变化，围绕 2.16.2 引入的 Jev 决策组件补齐两块能力：

1.新增 Jev 布尔判断组件，让流程可以按一个是非问题分流，驱动 `IF`、`WHILE` 及布尔组合。

2.Jev 新增 `laya` 入口，决策模型可以完整跑在自己机器上：不需要 API Key，不产生调用费用，数据不出本机。

正在使用 2.16.2 的用户，把 LiteFlow 各模块版本统一改为 `2.16.3` 即可，没有配置迁移。

## 一个是非问题，决定走哪条分支

2.16.2 的 `JevSwitchComponent` 解决"从多个分支里选一个"。实际业务里还有一类更小的判断：要不要转人工、这条内容要不要复核、客户诉求是否已经解决——答案只有"是"或"否"。

这次新增的 `JevBooleanComponent` 就用于这类判断。它继承 `NodeBooleanComponent`，每次执行向模型提一个是非问题，模型返回"是"的概率，概率达到阈值就走 true 分支：

```java
import com.yomahub.liteflow.agent.jev.JevBooleanComponent;
import com.yomahub.liteflow.annotation.LiteflowComponent;

@LiteflowComponent("humanEscalation")
public class HumanEscalation extends JevBooleanComponent {
    @Override
    protected Object state() {
        return getRequestData(); // 本次用户输入
    }

    @Override
    protected String instructions() {
        return "客户明确要求人工客服介入";
    }
}
```

`state()` 提供要判断的内容，`instructions()` 给出判断标准，就这两个方法。规则文件里直接进 `IF`，和选择组件自由组合：

```xml
<flow>
    <chain name="support">
        IF(humanEscalation, manual, SWITCH(supportRouter).to(refund, exchange).DEFAULT(manual));
    </chain>
</flow>
```

先判断要不要人工，不需要人工再进入智能分流。几个使用要点：

- 阈值来自 `liteflow.agent.jev.noul-threshold`，默认 `0.5`，概率达到（含等于）即算"是"；单个组件可覆写 `probabilityThreshold()`。
- `onDecision(...)` 回调能拿到原始概率。想在中间地带自行分流——比如概率在 0.4 到 0.6 之间转人工复核——在这里读概率处理。
- 布尔组件可以进入 `AND`／`OR`／`NOT` 组合，也可以放在 `WHILE` 里。两个条件建议拆成两个组件再组合，每个组件只问一个是非问题。
- 鉴权失败、超时或非法响应会抛 `JevInvocationException`，不会伪装成 false；需要故障兜底时使用 `CATCH(...).DO(...)`。

注意每次求值都会发起一次判断请求，放在 `WHILE` 这类会反复执行的语法里时，要留意调用次数。

## laya：决策模型跑在自己机器上

2.16.2 的 Jev 有两个入口：TypeSafe 官方 API 和 OpenRouter，都是云端服务，需要 API Key，要求网络可达。2.16.3 增加第三个入口 `laya`，把决策搬到本地。

[laya](https://github.com/NandhaKishorM/laya) 是开源的本地决策引擎（Apache 2.0），用 3～4 亿参数的小模型，一次前向传播直接输出结构化决策，不逐字生成文本。关键在于它的 `laya-serve` 服务实现了与 Jev 相同的 `/v1/systemone` 协议——LiteFlow 不需要任何新客户端，两个 Jev 组件原样可用。

在本机或内网任意一台机器上安装并启动：

```bash
pip install "laya[serve]"
laya-serve    # 默认监听 0.0.0.0:8000
```

第一次启动会自动从 Hugging Face 下载模型到本地缓存，之后离线可用；服务默认在启动时预热模型，避免第一个请求承担加载耗时。

LiteFlow 侧只需要一行配置：

```properties
liteflow.agent.jev.provider=laya
```

地址默认 `http://127.0.0.1:8000/v1`，`api-key` 留空即可，客户端不会发送鉴权头。如果你给 laya-serve 设置了 `LAYA_API_KEY`，再在 `liteflow.agent.jev.api-key` 里填相同的值。

`model` 默认为 `auto`：laya 内置的路由器先判断文本语言，再分发给对应模型——英文进英文模型，中文等 100 多种语言进多语言模型。需要固定模型时，把 `liteflow.agent.jev.model` 设为 `english`、`multilingual` 或 `typed-decisions` 即可。

速度方面，laya 官方在 T4 GPU 上测得单个问题约 33～40 毫秒；CPU 预热后每次请求约 193～464 毫秒。模型在本地运行，没有网络往返，实际耗时取决于你的硬件。

需要提醒一句：本地小模型与云端 Jev 的能力边界不完全相同。切换到 laya 后，建议像对待置信度阈值一样，先用真实业务样本验证分流效果，再上线使用。

## 演示与测试

示例仓库的 Jev 演示模块更名为 [liteflow-agent-jev](https://github.com/bryan31/liteflow-agent-example/tree/main/liteflow-agent-jev)，并新增"是非判断"页面：输入判断标准和判断内容，可以看到"是"的概率、当前阈值与 `IF` 实际执行的分支。原有的六类客服分流演示保持不变。

```bash
git clone https://github.com/bryan31/liteflow-agent-example.git
cd liteflow-agent-example
export JEV_API_KEY='填写你的 API Key'
mvn -pl liteflow-agent-jev -am clean package -DskipTests
mvn -pl liteflow-agent-jev spring-boot:run
```

打开 [http://localhost:8906/](http://localhost:8906/) 即可体验。想试本地 laya 入口，先在本机启动 `laya-serve`，然后去掉 `JEV_API_KEY`，改用：

```bash
mvn -pl liteflow-agent-jev spring-boot:run -Dspring-boot.run.arguments=--liteflow.agent.jev.provider=laya
```

框架侧的离线测试同步扩充到 70 项，覆盖三种 provider 的协议解析、分支执行、异常、超时与并发复用，位于源码仓库的 `liteflow-testcase-el/liteflow-testcase-el-agent-jev`：

```bash
mvn -pl liteflow-testcase-el/liteflow-testcase-el-agent-jev -am test -DskipTests=false
```

## 升级方式

Agent 相关模块要求 JDK 17 及以上。从 2.16.2 升级，只需把版本号统一为 `2.16.3`：

```xml
<properties>
    <liteflow.version>2.16.3</liteflow.version>
</properties>
```

已有 TypeSafe／OpenRouter 接入不受影响，配置和校验行为保持不变。完整说明见官网 [Jev 依赖与配置](https://liteflow.cc/pages/agent-jev-config/) 与 [Jev 布尔判断组件](https://liteflow.cc/pages/agent-jev-boolean/)。
