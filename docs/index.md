---
home: true
heroImage: /img/logo.svg
heroText: LiteFlow
tagline: 🚀轻量，快速，稳定可编排的组件式规则引擎
actionText: 🧩新版本，全新规则表达式！
actionLink: /pages/5816c5/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
features: # 可选的
  - title: 🍀轻巧强大
    details: 小身躯蕴藏着大能量，简单的学习成本，几分钟就能上手。却可以完成复杂的规则编排。
  - title: 🌸优雅高效
    details: 拥有独特的设计理念，所有逻辑皆为组件。稳定运行于各大公司的核心系统上，性能卓越。
  - title: 🌼支持丰富
    details: 不管你是何种架构，都能支持。任意编排，多种规则格式，平滑热刷新，多级嵌套，外部存储扩展等等。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
notices: # 可选的
  - id: liteFlowX-1.0.3
    title: ✨ LiteFlowX v1.0.3 新版本发布！
    content: '<div><p>2022-08-02</p><ul><li>[新增]支持替补组件特性</li><li>[新增]支持node关键字的组件名包装特性</li></ul></div><p style="text-align: right;"><a href="/pages/liteflowx/">查看详情</a></p>'
    isHtmlContent: true
---

<Notice :data="$frontmatter.notices"/>

<br/><br/>

## 🌈特别赞助

::: cardList
```yaml
- name: ERD Online
  desc: 开箱即用的数据库建模、产品版本管理软件
  avatar: /img/donate/erd.png
  link: https://portal.zerocode.net.cn/
  bgColor: '#f8c567' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: '#1f2328' # 可选，默认var(--textColor)
- name: Eoapi
  desc: 开源 API 管理工具，接口文档、接口测试、Mock...
  avatar: /img/donate/eoapi-logo.jpg
  link: https://docs.eoapi.io/?utm_source=ZZ080101
  bgColor: '#00785A'
  textColor: '#FFFFFF'
```
:::
<br/>

<p align="center">
  <a class="become-sponsor" href="/pages/fb599d/">成为赞助者</a>
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
    <version>2.8.3</version>
</dependency>
```

:::tip 新版本稳定吗？

我们每一次发布版本，都会补充大量的测试用例。截止到目前，LiteFlow一共有880多个测试用例，几乎覆盖到每一个已有功能的细节点。

并且我们会跑超大量的并发压力测试，以上所有的通过后，我们才会谨慎的提交代码覆盖主分支进行发版。

你大可不必担心新版本不稳定的情况，况且，我们有良好的社区群。基本上有问必答，如出现bug，基本上隔天必解决。

所以，请放心的使用！
:::

<br/>

## 🎉致谢

LiteFlow自从2020年开源以来，获得了很多人的支持。目前社区群800多人，Gitee上2.2k Stars，Github上600多Stars，感谢各位支持者的一路同行，我们会努力把国产的规则引擎做到极致。

LiteFlow在[2021](https://www.oschina.net/project/top_cn_2021)获得“OSC 年度最受欢迎中国开源软件”殊荣。

LiteFlow在2022年获得“Gitee最有价值开源项目“奖项（GVP）。

感谢OSCHINA和Gitee官方平台对LiteFlow项目的推荐和肯定。

LiteFlow首页的背景由插画师`森阳`提供，感谢她的创作，如需要插画商业合作小伙伴可以联系她：

> 邮件：sssenyang@qq.com | 微信：ArtSenyang

<br/>

## 🏡代码托管

<a href='https://gitee.com/dromara/liteFlow' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/liteflow" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/><br/>

## 💪🏻参与开发

欢迎各路好汉一起来参与完善 LiteFlow，我们期待你的 PR！

如果想贡献，请先查看[参与开发](/pages/ae4dd5/)。

<br/>

## 🍭架构图

<img :src="$withBase('/img/arch.png')" style="zoom: 120%" class="no-zoom">

<br/>

## 🐳Dromara组织成员
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/TLog" target="_blank">
        <img :src="$withBase('/img/dromara/tlog-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/liteFlow" target="_blank">
        <img :src="$withBase('/img/dromara/liteflow-logo.png')" class="no-zoom" style="height:40px;max-width:180px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hutool" target="_blank">
        <img :src="$withBase('/img/dromara/hutool-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sa-token" target="_blank">
        <img :src="$withBase('/img/dromara/satoken-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hmily" target="_blank">
        <img :src="$withBase('/img/dromara/hmily-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/Raincat" target="_blank">
        <img :src="$withBase('/img/dromara/raincat-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/myth" target="_blank">
        <img :src="$withBase('/img/dromara/myth-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/cubic" target="_blank">
        <img :src="$withBase('/img/dromara/cubic-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/forest" target="_blank">
        <img :src="$withBase('/img/dromara/forest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://jpom.top" target="_blank">
        <img :src="$withBase('/img/dromara/jpom-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sureness" target="_blank">
        <img :src="$withBase('/img/dromara/sureness-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/easy-es" target="_blank">
        <img :src="$withBase('/img/dromara/ee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/northstar" target="_blank">
        <img :src="$withBase('/img/dromara/northstar-logo.png')" class="no-zoom" style="height:40px;max-width:180px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hertzbeat" target="_blank">
        <img :src="$withBase('/img/dromara/hertzbeat-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/dynamic-tp" target="_blank">
        <img :src="$withBase('/img/dromara/dynamictp-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/mendmix" target="_blank">
        <img :src="$withBase('/img/dromara/mendmix-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
        <img :src="$withBase('/img/dromara/koalas-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/MaxKey" target="_blank">
        <img :src="$withBase('/img/dromara/maxkey-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/gobrs-async" target="_blank">
        <img :src="$withBase('/img/dromara/gobrsasync-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/fast-request" target="_blank">
        <img :src="$withBase('/img/dromara/fastrequest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/x-easypdf" target="_blank">
        <img :src="$withBase('/img/dromara/xeasypdf-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/image-combiner" target="_blank">
        <img :src="$withBase('/img/dromara/imagecombiner-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/dante-cloud" target="_blank">
        <img :src="$withBase('/img/dromara/dantecloud-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

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
    <a href="http://www.layui-vue.com/zh-CN/index" target="_blank">
        <img :src="$withBase('/img/link/layui-vue.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="http://www.pearadmin.com/" target="_blank">
        <img :src="$withBase('/img/link/pearAdmin-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dotnetchina" target="_blank">
        <img :src="$withBase('/img/link/dotnet-china-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<br/>

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="129"></div>
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
</style>
