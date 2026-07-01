---
title: How2useLiteFlow（AI Skill）
date: 2026-07-01 00:00:00
permalink: /pages/how2use-liteflow/
---

## 🧠 为什么需要这个 Skill？

现在大家越来越习惯让 AI（Claude Code、Cursor 等）帮你写代码。但当你让 AI 写一段 LiteFlow 的逻辑时，常常会遇到这样的尴尬：

* 把 `LiteflowResponse.getCause()` 写成了不存在的 `getException()`；
* 臆造出 `whenMaxWorkers`、`printExecutionResult`、`chainCache` 之类**根本不存在**的配置项；
* EL 算子张冠李戴，组件基类用错，执行 API 调用方式不对；
* 甚至一本正经地把网上搜来的旧版本写法，当成当前版本的「正确答案」。

根本原因是：**AI 对 LiteFlow 只是「一知半解」**。它的训练语料里 LiteFlow 的内容既不全也不新，遇到不确定的地方又倾向于「编一个看起来对的」，于是生成出跑不起来、甚至误导人的代码。

**How2useLiteFlow** 就是为了解决这个问题——它是一个让 **AI 正确使用 LiteFlow（v2.16.X）** 的 [Agent Skill](https://github.com/bryan31/How2useLiteFlow)。装上它之后，你的 AI 在写 LiteFlow 相关代码时，会以官方文档与源码蒸馏出的知识为准，**不杜撰、不拿网络内容充当 LiteFlow 的行为依据**。

<br/>

## 🎯 这个 Skill 能帮你做什么？

它内置了从 LiteFlow 官方文档与源码蒸馏出的**用法细节与代码细节**，覆盖你日常会用到的几乎所有场景：

* **组件** —— 普通 / 选择 / 布尔 / 次数循环 / 迭代循环组件，以及声明式组件与生命周期钩子。
* **EL 规则** —— `THEN`/`WHEN`/`IF`/`SWITCH`/`FOR`/`WHILE`/`ITERATOR`/`CATCH`/`RETRY`/`TIMEOUT`/`PRE`/`FINALLY`/`AND`/`OR`/`NOT`，以及 `tag`/`data`/`bind`、链路继承等。
* **数据上下文** —— 上下文隔离、别名、参数注入、表达式取参。
* **脚本组件** —— Groovy / JS / Python / QLExpress / Lua / Aviator / Kotlin / Java 等多语言写法。
* **规则配置源** —— 本地文件 / SQL / ZK / Nacos / Etcd / Apollo / Redis / 自定义。
* **配置项** —— SpringBoot / Spring / Solon / 纯代码方式的全部配置。
* **执行器** —— `FlowExecutor` 的各执行方法与 `LiteflowResponse` 的正确取值方式。
* **AI Agent 编排** —— `liteflow-react-agent`：把 ReAct Agent 当作标准组件编排进 EL、模型 / 凭据配置、自定义工具、流式输出、会话记忆。
* **测试与调试** —— JUnit5 + SpringBoot 的测试范式、热刷新、线程池、动态构造、决策路由等高级特性。
* **源码级细节** —— `FlowExecutor`、`FlowBus`、`DataBus`、`Condition` 树、两阶段解析等内部实现。

<br/>

## ⚙️ 它是怎么做到「不胡说」的？

**你只需要安装这个 skill，不需要任何额外配置。** 它能可靠回答 LiteFlow 问题，靠的是一套分层策略：

1. **蒸馏知识（覆盖约 90%）** —— 内置高频速查表 + 分主题参考文档，全部从 LiteFlow 官方文档与源码蒸馏而来。绝大多数问题（EL 算子、组件类型、执行 API、配置项、源码实现）都直接由这些内容作答，不联网、无需额外设置。
2. **源码托底** —— 对于蒸馏知识未覆盖的少数冷门或深层问题，skill 会去读 LiteFlow 的真实源码：优先查找本地 LiteFlow 仓库，没有则在征得你同意后克隆官方仓库，再用精确的 `path:line` 引用作答。
3. **绝不杜撰** —— 若参考文档与源码都无法确认，skill 会如实说明，而不是臆测、也不拿网络内容充当 LiteFlow 的行为依据。

::: tip 一句话总结
装上这个 skill，你的 AI 就能可靠地回答 LiteFlow 问题——从日常用法一直到源码级实现。
:::

<br/>

## 🚀 一键安装

通过 [`skills` CLI](https://github.com/vercel-labs/skills) 一键安装：

```bash
npx skills add bryan31/How2useLiteFlow
```

可选参数（全局安装、指定 agent、跳过确认）：

```bash
npx skills add bryan31/How2useLiteFlow@how2useliteflow -g -a claude-code -y
```

安装后整个 skill 目录（含 `references/`、`scripts/`）会被拷贝到你的 agent 配置目录，无需额外配置。

<br/>

## ✨ 触发方式

当你向 AI 提到 LiteFlow 相关内容（组件、EL 规则、上下文、脚本组件、规则源、执行器、ReAct Agent 编排、测试、源码细节等）时，该 skill 会**自动启用**，无需手动开启。

<br/>

## 🔗 项目地址

How2useLiteFlow 已在 GitHub 开源，欢迎 Star 与反馈：

[https://github.com/bryan31/How2useLiteFlow](https://github.com/bryan31/How2useLiteFlow)
