---
title: LiteFlowX快速开发插件
date: 2022-06-10 09:56:00
permalink: /pages/liteflowx/
author:
 name: 码农小易
 link: https://gitee.com/liupeiqiang/
titleTag: 推荐👍
---

![封面](/img/liteflowx/cover.png)

LiteFlowX 是一款 IDEA 插件，它能够大幅度提高你在使用 LiteFlow 框架进行开发时的工作效率。

<p align="left">

<a href="https://www.github.com/Coder-XiaoYi/LiteFlowX" target="_blank">
<img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<a href='https://gitee.com/liupeiqiang/LiteFlowX/' target="_blank">
<img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

</p>

::: tip 😋 支持项目
LiteFlowX 插件完全免费并开源，为了让各位小伙伴能使用到更优质的插件功能，可到仓库提issues哦！

如果插件觉得好用，请为这个插件打个[五分好评](https://plugins.jetbrains.com/plugin/19145-liteflowx/)！

如果插件源码对你开发有帮助，请为这个仓库[点个星星](https://gitee.com/liupeiqiang/LiteFlowX/)！
:::

## 🍬 LiteFlowX 特性
- 特定的文件 Svg 图标，容易识别 LiteFlow 元素
- 能够识别Component、Node、Chain、Slot
- Component、Node、Chain和XML文件的互相跳转
- Java 代码和 Chain 的互相跳转
- Xml 文件与 LiteFlow 元素的互相跳转
- Xml 的自动完成提示，能够提示Component、Node、Chain
- 提供LiteFLow工具箱，整个工程的Component、Node、Chain、Slot一目了然，并且支持双击跳转
- 支持对 liteflow.ruleSource 属性的文件跳转
- v2.6.x 与 v2.7.x 的新旧版本双兼容

::: warning
由于liteFlow 2.7.0及以后版本已经取消 Slot 概念，LiteFlowX插件仅支持2.6.x及以前版本的 Slot 识别
:::

## 🎉 安装LiteFlowX
有三种方式可安装LiteFlowX插件到IDEA中
::: tip
支持 LiteFlowX 插件的版本有：
- IntelliJ IDEA Educational — 2018.3 — 2022.1.1
- IntelliJ IDEA Ultimate — 2018.3 — 2022.1.2
- IntelliJ IDEA Community — 2018.3 — 2022.1.2
:::
### 方法一：点击这里安装（推荐）

页面加载完毕后，下方会出现安装按钮

<iframe frameborder="none" width="245px" height="48px" src="https://plugins.jetbrains.com/embeddable/install/19145"></iframe>

### 方法二：从 Marketplace 安装插件（推荐）
1. 按下组合键 `Ctrl + Alt + S`，打开 IDE settings 并选择 **Plugins**
2. 在 **Marketplace** 搜索 `LiteFlowX` 并点击 install

![通过Marketplace安装](/img/liteflowx/installByMarketplace.png)


### 方法三：导入JAR包进行安装
1. 在 [Releases](https://gitee.com/liupeiqiang/LiteFlowX/releases) 下载最新的插件Jar包
2. 按下组合键 Ctrl+Alt+S，打开 IDE settings 并选择 **Plugins**
3. 在插件页面, 点击 ⚙ 然后再点击 **Install Plugin from Disk...**
4. 选择在第一步下载好的插件并点击 **OK**
5. 如果提示重启IDE，点击 **OK** 应用更改即可

## 🌈 功能演示
### Java代码跳转到Chain
![Java代码跳转到Chain](/img/liteflowx/JavaToChain.gif)

### LiteFlowTool工具箱
![LiteFlowTool工具箱](/img/liteflowx/LiteFlowTool.gif)

### ruleSource跳转
![ruleSource跳转](/img/liteflowx/ruleSourceJump.gif)

### Xml跳转到Chain
![Xml跳转到Chain](/img/liteflowx/XmlToChain.gif)

### Xml跳转Component
![Xml跳转Component](/img/liteflowx/XmlToComponent.gif)
![Xml跳转Component2](/img/liteflowx/XmlToManyComponent.gif)

## 📕 更新日志
::: tip [0.1.1] - 2022-06-15
- 修复 #I5BW1N 关于java代码编辑器中的chain错误跳转问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5BW1N
- 修复 #I5BPP6 修复组件多层继承而无法正确跳转问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5BPP6 
:::