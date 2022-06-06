---
home: true
heroImage: /img/logo.svg
heroText: LiteFlow
tagline: 🚀轻量，快速，稳定可编排的组件式规则引擎
actionText: 开始使用 →
actionLink: /pages/967466/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 轻巧强大
    details: 小身躯蕴藏着大能量，简单的学习成本，几分钟就能上手。却可以完成复杂的规则编排。
  - title: 优雅高效
    details: 拥有独特的设计理念，所有逻辑皆为组件。稳定运行于各大公司的核心系统上，性能卓越。
  - title: 支持丰富
    details: 不管你是何种架构，都能支持。任意编排，多种规则格式，平滑热刷新，多级嵌套，外部存储扩展等等。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

<br/><br/>

<p align="center">
  <a class="become-sponsor" href="/pages/fb599d/">支持这个项目</a>
</p>

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #E01E5A;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #E01E5A;
}
</style>

<br/>

## 🍬特性
* **组件定义统一：** 所有的逻辑都是组件，为所有的逻辑提供统一化的组件实现方式，小身材，大能量。
* **规则轻量：** 基于规则文件来编排流程，学习规则入门只需要5分钟，一看既懂。
* **规则多样化：** 规则支持xml、json、yml三种规则文件写法方式，喜欢哪种用哪个。
* **任意编排：** 同步异步混编，再复杂的逻辑过程，利用LiteFlow的规则，都是很容易做到的，看规则文件就能知道逻辑是如何运转的。
* **规则能从任意地方加载：** 框架中提供本地文件配置源和zk配置源的实现，也提供了扩展接口，您可以把规则存储在任何地方。
* **优雅热刷新机制：** 规则变化，无需重启您的应用，即时改变应用的规则。高并发下不会因为刷新规则导致正在执行的规则有任何错乱。
* **支持广泛：** 不管你的项目是不是基于Springboot，Spring还是任何其他java框架构建，LiteFlow都能游刃有余。
* **JDK支持：** 从JDK8到JDK17，统统支持。无需担心JDK版本。
* **脚本语言支持：** 可以定义脚本语言节点，支持QLExpress和Groovy两种脚本。未来还会支持更多的脚本语言。
* **规则嵌套支持：** 只要你想的出，你可以利用简单的表达式完成多重嵌套的复杂逻辑编排。
* **组件重试支持：** 组件可以支持重试，每个组件均可自定义重试配置和指定异常。
* **上下文隔离机制：** 可靠的上下文隔离机制，你无需担心高并发情况下的数据串流。
* **声明式组件支持：** 你可以让你的任意类秒变组件。
* **详细的步骤信息：** 你的链路如何执行的，每个组件耗时多少，报了什么错，一目了然。
* **稳定可靠：** 历时2年多的迭代，在各大公司的核心系统上稳定运行。
* **性能卓越：** 框架本身几乎不消耗额外性能，性能取决你的组件执行效率。
* **自带简单监控：** 框架内自带一个命令行的监控，能够知道每个组件的运行耗时排行。

<br/>

## ✨最新版本

```xml
<dependency>
    <groupId>com.yomahub</groupId>
    <artifactId>liteflow-spring-boot-starter</artifactId>
    <version>2.7.1</version>
</dependency>
```

:::tip 新版本稳定吗？

我们每一次发布版本，都会补充大量的测试用例。截止到目前，LiteFlow一共有400多个测试用例，几乎覆盖到每一个已有功能的细节点。

并且我们会跑超大量的并发压力测试，以上所有的通过后，我们才会谨慎的提交代码覆盖主分支进行发版。

你大可不必担心新版本不稳定的情况，况且，我们有良好的社区群。基本上有问必答，如出现bug，基本上隔天必解决。

所以，请放心的使用！
:::

<br/>

## 🎉致谢

LiteFlow自从2020年开源以来，获得了很多人的支持。目前社区群800多人，Gitee上2k Stars，Github上500多Stars， 这离不开社区小伙伴的支持和意见。感谢你们。

LiteFlow更是在[2021](https://www.oschina.net/project/top_cn_2021)获得“OSC 年度最受欢迎中国开源软件”殊荣，感谢各位支持者的一路同行，我们会努力把国产的规则引擎做到极致。

<br/>

## 🏡代码托管

> [Gitee](https://gitee.com/dromara/liteFlow) | [Github](https://github.com/dromara/liteflow)

<br/>

## 💪🏻参与贡献

欢迎各路好汉一起来参与完善 LiteFlow，我们期待你的 PR！

如果想贡献，请先查看[贡献准则](/pages/ae4dd5/)。

<br/>

## 🍭架构图

<img :src="$withBase('/img/architecture.svg')" style="zoom: 120%">

<br/>

## 🧲友情链接
<span style="width: 150px;flex:1;text-align: left">
    <a href="https://gitee.com" target="_blank">
        <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://www.oschina.net" target="_blank">
        <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/TLog" target="_blank">
        <img :src="$withBase('/img/link/tlog-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sa-token" target="_blank">
        <img :src="$withBase('/img/link/satoken-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sureness" target="_blank">
        <img :src="$withBase('/img/link/sureness-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hutool" target="_blank">
        <img :src="$withBase('/img/link/hutool-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/Apache-ShenYu/incubator-shenyu" target="_blank">
        <img :src="$withBase('/img/link/shenyu-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/forest" target="_blank">
        <img :src="$withBase('/img/link/forest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/MaxKey" target="_blank">
        <img :src="$withBase('/img/link/maxkey-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dotnetchina" target="_blank">
        <img :src="$withBase('/img/link/dotnet-china-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="http://www.pearadmin.com/" target="_blank">
        <img :src="$withBase('/img/link/pearAdmin-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<!-- AD 
<div class="wwads-cn wwads-horizontal page-ad" data-id="129" style="width:100%;max-height:80px;min-height:auto;"></div>
<style>
  .page-ad img{width:80px!important;}
  /* .pageT .wwads-content{display:flex;align-items: center;}
  .pageT .wwads-poweredby{display:none!important;}
  .pageT .wwads-hide{display:none!important;} */
</style>
-->