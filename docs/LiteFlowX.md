---
title: LiteFlowX快速开发插件
date: 2022-07-12 00:57:00
permalink: /pages/liteflowx/
author:
 name: Timothy Lau
 link: https://gitee.com/liupeiqiang/
titleTag: ✨ V1.2.3
---

:::warning 插件版本须知

- LiteFlowX 插件版本自 `v1.1.0` 起，全面适配 LiteFlow `v2.9.0` 并且 部分功能不再向下兼容 LiteFlow `v2.8.X`。
- 若您仍在使用 LiteFlow `2.8.X` 及以下版本，可自行下载[ LiteFlowX v1.0.4 Jar包 ](https://gitee.com/liupeiqiang/LiteFlowX/releases/1.0.4)进行安装
- 若您仍在使用 LiteFlow `2.7.X` 及以下版本，可自行下载[ LiteFlowX v0.1.1 Jar包 ](https://gitee.com/liupeiqiang/LiteFlowX/releases/0.1.1)进行安装
- 插件将来会致力于 LiteFlow 框架的最新版本特性做出更改和完善，使用本插件前请确保您使用的是最新的 LiteFlow 框架。
:::

![封面](/img/liteflowx/cover.jpg)

LiteFlowX 是一款 IDEA 插件，它能够大幅度提高你在使用 LiteFlow 框架进行开发时的工作效率。

<p align="left">

<a href="https://www.github.com/Coder-XiaoYi/LiteFlowX" target="_blank">
<img class="no-zoom" :src="$withBase('/img/Gitee-red.svg')"/>
</a>

<a href='https://gitee.com/liupeiqiang/LiteFlowX/' target="_blank">
<img class="no-zoom" :src="$withBase('/img/Github-blue.svg')"/>
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
  desc: ELF 语法自动向 .xml 的 chain 注入
  bgColor: '#718971'
  textColor: '#fff'
- name: LiteFlow 工具箱
  desc: 项目工程的组件、链路一目了然
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
```
:::

- 全面适配 LiteFlow v2.9.x 的所有特性
- 支持 ELF 规则表达式（自动提示、语法高亮、语法检测）
- 能够识别组件、链路
- 细分化的组件类型图标，让组件一目了然
- 更加智能的自动提示，可细分化后的组件、链路
- 提供LiteFlow工具箱，整个工程的组件、链路，并且支持双击跳转
- 支持对 liteflow.ruleSource 属性的文件跳转
- ...更多特性敬请期待

## 🎉 安装LiteFlowX
有三种方式可安装LiteFlowX插件到IDEA中
::: tip
支持 LiteFlowX 插件的版本有：
- IntelliJ IDEA Educational — 2021.1 — 2022.2.2
- IntelliJ IDEA Community — 2021.1 — 2023.2.2
- IntelliJ IDEA Ultimate — 2021.1 — 2023.2.2
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
![预检测Chain未命名或重复](/img/liteflowx/chaindep.gif)

### 自定义elf语法关键字颜色
![自定义elf语法关键字颜色](/img/liteflowx/changecolor.gif)

### 支持Component和Chain跳转
![支持Component和Chain跳转](/img/liteflowx/componentjump.gif)

### 支持局部变量
![支持局部变量](/img/liteflowx/localvar.gif)

### LiteFlow 工具箱
![LiteFlow 工具箱](/img/liteflowx/toolbox.gif)

## 💬 疑难解答

### Q：为什么安装 LiteFlowX 插件，相关ELF表达式仍然无法高亮？
A：首先请确保您安装的是最新版本的 LiteFlowX 插件，并且安装完成后务必重启 IDEA。若以上操作仍无法解决问题，考虑您安装的第三方主题影响了高亮，请到 `File -> Settings -> Editor -> Color Scheme -> General -> Code -> Injected language fragment` 将右侧勾选框的 `Foreground` 取消勾选，并按确认更改。

![无高亮解决方法](/img/liteflowx/nohighlight.png)

### Q：在XML文件里面使用脚本组件，node标签的脚本语言无法高亮？
A：需要在`<node>`标签上使用属性`language`并给定语言才可进行高亮，如:`<node id="xxx" type="script" language="groovy"></node>`

![脚本语言无高亮解决方法](/img/liteflowx/scriptnohighlight.jpg)

### Q：为什么我使用Python语言或LUA语言进行脚本组件编写时并没有高亮显示和智能提示？
A：原因是Python与LUA语法本身IDEA是不支持，所以当你在使用 `<node type="script" language="python">` 或 `<node type="script" language="lua">`之前，请确保你已经安装第三方的相关插件如`Python`或`EmmyLua`插件。

![LUA插件安装](/img/liteflowx/EmmyLuaPlugin.png)
![Python插件安装](/img/liteflowx/PythonPlugin.png)

### Q：没有在疑难解答解决我的问题，怎么办？
A：LiteFlowX 插件仍在茁壮成长中，使用过程中难免会遇见奇奇怪怪的事，不过没有关系，您可以随时[联系作者](https://gitee.com/liupeiqiang)或在[Gitee仓库](https://gitee.com/liupeiqiang/LiteFlowX)内提出您宝贵的意见或ISSUES，我会第一时间解答您的疑问。💖

## 📕 更新日志 

::: tip [1.2.3] - 2023-08-30
- 新增对 xml 文件的自动注入 JAVA 语言
:::

::: tip [1.2.2] - 2023-08-08
- 新增 支持.parallel() 关键词
- 新增 支持.maxWaitSeconds() 关键词
- 修复 ToolBox 会被关闭问题
- 兼容 IDEA-2023.2.* 版本
:::

::: tip [1.2.1] - 2023-04-11
- 新增 支持表达式结尾键入.tag()和.id()
- 兼容 WHILE() 括号表达式内使用AND、OR、NOT逻辑表达式
:::

::: tip [1.2.0] - 2023-04-01
- 新增 支持AND()、OR()、NOT()逻辑表达式
- 兼容 IDEA-2023.* 版本
:::

::: tip [1.1.6] - 2023-03-16
- 新增 CATCH().DO() 表达式
:::

::: tip [1.1.5] - 2023-02-01
- 修复 ITERATOR 关键字组件图标无法正常显示问题
- 修复 .el.xml 文件中 domChain 标签无法识别 id 属性问题
:::

::: tip [1.1.4] - 2023-01-18
- 新增 #I6AY1G 对 ITERATOR 关键字的支持
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I6AY1G
:::

::: tip [1.1.3] - 2022-12-11
- 新增 #I65E2V SWITCH表达式的DEFAULT用法
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I65E2V
- 新增 #I65E31 脚本组件对Python语言以及Lua语言的支持
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I65E31
- 兼容 IDEA-2022.3 版本
:::

::: tip [1.1.2] - 2022-11-23
- 修复 #I5X8XV com/intellij/psi/impl/source/PsiClassImpl.isInheritor must not be null 的问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5X8XV
- 修复 com.intellij.psi.impl.source.xml.XmlElementContentGroupImpl cannot be cast to class com.intellij.psi.xml.XmlTag 的问题
:::

::: tip [1.1.1] - 2022-10-24
- 新增 #I5VMP4 在xml中新增对groovy以及javascript语法的支持
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5VMP4
- 修复 #I5WQME 无法识别多行注释问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5WQME
:::

::: tip [1.1.0] - 2022-10-09
- 新增 #I5TUH1 LiteFlow 2.9.0 的 data 属性特性的适配
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5TUH1
- 新增 #I5TU26 LiteFlow 2.9.0 循环组件语法的适配
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5TU26
- 新增 #I5U36H LiteFlow 2.9.0 版本中EL对*.xml检测生效
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5U36H
- 新增 #I5UA9R LiteFlow 2.9.0 重构后的声明式组件的适配
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5UA9R
- 新增 #I5TU3E 细分化Component类型的特性
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5TU3E
- 修复 #I5Q35D ELF语法无法正常解析注释的问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5Q35D
- 修复 #I5U3QH 核心源码不应该显示组件图标的问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5U3QH
- 修复 #I5O84M 不能正常识别node的XML标签的问题
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5O84M
- 优化 插件内核源码架构
- 优化 插件内的所有图标，简洁清爽！
- 优化 LiteFlowTool 工具箱的副标题显示内容
- 修复 LiteFlowTool 工具箱双击无法跳转对应Chain的问题
:::

::: tip [1.0.4] - 2022-08-25
- 新增 #I5NWWJ 支持 LiteFlow v2.8.5 的IF关键字特性
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5NWWJ
- 修复 SWITCH() 允许输入多个表达式的问题
:::

::: tip [1.0.3] - 2022-08-02
- 新增 #I5K13V 支持 liteflow v2.8.3 的替补组件特性
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5K13V
- 新增 #I5JQXV 支持 liteflow v2.8.3 的组件名包装
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5JQXV
:::

::: tip [1.0.2] - 2022-07-21
- 新增 #I5HPMC 支持EL中的注释
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5HPMC
- 新增 #I5H8RL 新增 IDEA-222.* 的支持
  - https://gitee.com/liupeiqiang/LiteFlowX/issues/I5H8RL
- 新增 识别括号并高亮
- 新增 自动缩进
- 修复 抛出 java.lang.NullPointerException 异常的问题
:::

::: tip [1.0.1] - 2022-07-14
- 修复 因旧表达式存在而导致的报错
- 修复 因qualifiedName参数为null而导致的IllegalArgumentException
- 优化 部分代码的对Null值得判断
:::

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
  avatar: /img/liteflowx/avator/bryan31.webp
  link: https://gitee.com/bryan31
  bgColor: '#d7d7d7'
  textColor: '#000000'
- name: Timothy Lau
  desc: LiteFlowX 开源作者
  avatar: /img/liteflowx/avator/liupeiqiang.webp
  link: https://gitee.com/liupeiqiang
  bgColor: '#ffe3d8'
  textColor: '#444452'
- name: chenglitao521
  desc: 贡献者
  avatar: /img/liteflowx/avator/chenglitao521.jpg
  link: https://github.com/chenglitao521
  bgColor: '#f5efbd'
  textColor: '#3d6328'
```
:::
