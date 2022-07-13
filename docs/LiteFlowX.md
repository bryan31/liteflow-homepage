---
title: LiteFlowX快速开发插件
date: 2022-07-12 00:57:00
permalink: /pages/liteflowx/
author:
 name: 码农小易
 link: https://gitee.com/liupeiqiang/
titleTag: 🎉 支持elf语法！
---

:::warning 插件版本须知
- LiteFlowX 插件版本自 `v1.0.0` 起，将不再支持 LiteFlow `2.7.X` 及以下版本的特性。

- 如果您使用的是旧版本的 LiteFlow 框架，请自行[下载插件jar包](https://gitee.com/liupeiqiang/LiteFlowX/releases/0.1.1)安装。

- 插件将来会致力于 LiteFlow 框架的最新版本特性做出更改和完善，使用本插件前请确保您使用的是最新的 LiteFlow 框架。
:::

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

::: cardList 3
```yaml
- name: 支持 ELF 语法
  desc: 自动完成、语法高亮、词法分析
  bgColor: '#F0DFB1'
  textColor: '#242A38'
- name: 语法注入
  desc: ELF 语法自动向.el.xml的chain注入
  bgColor: '#718971'
  textColor: '#fff'
- name: LiteFlow 工具箱
  desc: 项目工程Component、Chain一目了然
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
```
:::

- 支持 LiteFlow 2.8.x 新的规则表达式语法（自动提示、语法高亮、语法检测）
- 特定的文件 Svg 图标，容易识别 LiteFlow 元素
- 能够识别Component、Chain
- Java 代码和 Chain 的互相跳转
- Xml 文件与 LiteFlow 元素的互相跳转
- 提供LiteFLow工具箱，整个工程的Component、Chain，并且支持双击跳转
- 支持对 liteflow.ruleSource 属性的文件跳转
- ...更多特性敬请期待

## 🎉 安装LiteFlowX
有三种方式可安装LiteFlowX插件到IDEA中
::: tip
支持 LiteFlowX 插件的版本有：
- IntelliJ IDEA Educational — 2020.1 — 2022.1.2
- IntelliJ IDEA Ultimate — 2020.1 — 2022.1.3
- IntelliJ IDEA Community — 2020.1 — 2022.1.3
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
### 智能提示Component和Chain
![智能提示ComponentChain](/img/liteflowx/chaincomponent.gif)

### 预检测Chain未命名或重复
![预检测Chain未命名或重复](/img/liteflowx/chaincomponent.gif)

### 自定义elf语法关键字颜色
![自定义elf语法关键字颜色](/img/liteflowx/changecolor.gif)

### 支持Component和Chain跳转
![支持Component和Chain跳转](/img/liteflowx/componentjump.gif)

### 支持局部变量
![支持局部变量](/img/liteflowx/localvar.gif)

### 支持.el.xml的chain标签自动注入elf语法
![支持.el.xml的chain标签自动注入elf语法](/img/liteflowx/newelxml.gif)

### LiteFlow 工具箱
![LiteFlow 工具箱](/img/liteflowx/toolbox.gif)



## 📕 更新日志
::: tip [1.0.0] - 2022-07-11
:tada: 适配 LiteFlow 2.8.x 全新规则表达式语法

- 支持elf语法高亮
- 支持component、chain、local variables自动提示
- 支持语法预检测
- 支持.el.xml的chain标签注入elf语法
- 更多功能等你挖掘...
:::

::: tip [0.1.1] - 2022-06-15
- 修复 #I5BW1N 关于java代码编辑器中的chain错误跳转问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5BW1N
- 修复 #I5BPP6 修复组件多层继承而无法正确跳转问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5BPP6 
:::

## 💖 特别鸣谢
::: cardList
```yaml
- name: 铂赛东
  desc: LiteFlow 开源作者
  avatar: https://portrait.gitee.com/uploads/avatars/user/367/1102362_bryan31_1578940308.png
  link: https://gitee.com/bryan31
  bgColor: '#d7d7d7'
  textColor: '#000000'
- name: 码农小易
  desc: LiteFlowX 开源作者
  avatar: https://portrait.gitee.com/uploads/avatars/user/635/1907773_liupeiqiang_1651224603.png
  link: https://gitee.com/liupeiqiang
  bgColor: '#ffe3d8'
  textColor: '#444452'
- name: chenglitao521
  desc: 贡献者
  avatar: https://avatars.githubusercontent.com/u/27468094
  link: https://github.com/chenglitao521
  bgColor: '#f5efbd'
  textColor: '#3d6328'
```
:::
