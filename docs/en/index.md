---
home: true
heroImage: /img/logo.svg
heroText: LiteFlow
tagline: 🚀 A LIGHTWEIGHT and POWERFUL rules engine framework
slogan: '<div class="slo">Keep on the light side.</div>'
actions: 
  - 
    actionText: ⛵️ Quick Start
    actionLink: /en/pages/introduction/
    actionClass: action-button-liteflowx
  - 
    actionText: 🌟 Star it!
    actionLink: https://github.com/dromara/liteFlow
    actionClass: action-button-liteflowx
bannerBg: none
features: 
  - title: 🧬 Powerful "EL" Syntax
    details: '"EL" syntax is user-friendly and powerful, that able to execution of logical sequences in any desired pattern.'
  - title: 🧩 Component-Based
    details: Components are designed to be reusable and decoupled from each other.
  - title: 📑 More Script Language
    details: Supported running any script, including Java，Groovy，Javascript，Python，Lua，QLExpress and Aviator.
  - title: 🛖 Rule Storable
    details: Supported storing rules and scripts in any relational database, including ZooKeeper (zk), Nacos, etcd, Apollo, and Redis.
  - title: 🍃 Seamless Refresh Rules
    details: Enabling instant rule refresh without application restart.
  - title: ⭐️ High compatibility
    details: "Supported JDK 8 to JDK 17, Spring 2.X to Spring 3.X. It even provides support for non-Spring environments."
  - title: 🍱 More Advanced Features
    details: Complex scenarios can be instantly simplified and made more agile.
  - title: 🏤 Bigger Community
    details: Thousands of active members who can provide timely assistance and answer your questions. 
  - title: 🪁 High reliability
    details: Conducted extensive testing with up to 1200 test cases to ensure the quality of LiteFlow.
postList: none
notices: 
  - 
    id: Liteflow-2.11.2
    title: 🚀 LiteFlow v2.11.2 Released！
    content: '<div><p>2023-10-16</p><ul><li>[New Feature] Support polling automatic update mode in SQL plugin.</li><li>[New Feature] Added the "must" syntax.</li><li>[New Feature] New dynamic assembly API for EL expressions.</li><li>[New Feature] Supported chain inheritance.</li><li>[New Feature] Added the component degradation feature.</li><li>[New Feature] Supports fuzzy matching of absolute paths.</li><li>[New Feature] New thread pool isolation mechanism in WHEN expression.</li></ul></div><p style="text-align: right;"><a href="/en/pages/8ff014/">Details</a></p>'
    isHtmlContent: true
title: Home
date: 2023-10-16 22:24:29
permalink: /
---

<Notice :data="$frontmatter.notices"/>

## 🌈 Special Sponser

::: cardList
```yaml
- name: 力软低代码平台
  desc: 引擎式开发，适应多变业务场景，使用无限制，100%源码授权
  avatar: /img/donate/liruan.png
  link: https://www.learun.cn?fuid=03
  bgColor: '#148ce9'
  textColor: '#FFFFFF'
  expired: '2024-07-10'
- name: Snowy
  desc: 国内首个国密前后端分离快速开发平台，中国式工作流、独家双模式租户
  avatar: /img/donate/snowy.png
  link: https://xiaonuo.vip
  bgColor: '#1373CC'
  textColor: '#ffffff'
  expired: '2024-10-10'
- name: 2023年明道云伙伴大会
  desc: 千人同聚，48位行业大咖解析零代码实践经验和技术前沿。30个席位限时免费，速抢码：bnlf
  avatar: /img/donate/mdy.png
  link: https://www.mingdao.com/event/mpc/2023
  bgColor: '#2196F3'
  textColor: '#FFFFFF'
  expired: '2024-04-22'
- name: 云程低代码平台
  desc: 采用springboot+vue技术，可私有化部署，可交付源代码
  avatar: /img/donate/yuncheng.png
  link: http://www.yunchengxc.com/
  bgColor: '#1C58E6'
  textColor: '#FFFFFF'
  expired: '2023-10-27'

```
:::

<style>
  .page-wwads{
    width:100%!important;
    min-height: 0!important;
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

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="129"></div>

<p align="center">
  <a class="become-sponsor" href="/pages/fb599d/">Be a sponsor</a>
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

## 🍬 Feature
* **组件定义统一：** 所有的逻辑都是组件，为所有的逻辑提供统一化的组件实现方式，小身材，大能量。
* **规则轻量：** 基于规则文件来编排流程，学习规则入门只需要5分钟，一看既懂。
* **规则多样化：** 规则支持xml、json、yml三种规则文件写法方式，喜欢哪种用哪个。
* **任意编排：** 再复杂的逻辑过程，利用LiteFlow的规则，都是很容易做到的，看规则文件就能知道逻辑是如何运转的。
* **规则持久化：** 框架原生支持把规则存储在标准结构化数据库，Nacos，Etcd，Zookeeper，Apollo，Redis。您也可以自己扩展，把规则存储在任何地方。
* **优雅热刷新机制：** 规则变化，无需重启您的应用，即时改变应用的规则。高并发下不会因为刷新规则导致正在执行的规则有任何错乱。
* **支持广泛：** 不管你的项目是不是基于Springboot，Spring还是任何其他java框架构建，LiteFlow都能游刃有余。
* **JDK支持：** 从JDK8到JDK17，统统支持。无需担心JDK版本。
* **Springboot支持全面：** 支持Springboot 2.X到最新的Springboot 3.X。
* **脚本语言支持：** 可以定义脚本语言节点，支持Groovy，Java，Javascript，QLExpress，Python，Lua，Aviator。未来还会支持更多的脚本语言。
* **脚本和Java全打通：** 所有脚本语言均可调用Java方法，甚至于可以引用任意的实例，在脚本中调用RPC也是支持的。
* **规则嵌套支持：** 只要你想的出，你可以利用简单的表达式完成多重嵌套的复杂逻辑编排。
* **组件重试支持：** 组件可以支持重试，每个组件均可自定义重试配置和指定异常。
* **上下文隔离机制：** 可靠的上下文隔离机制，你无需担心高并发情况下的数据串流。
* **声明式组件支持：** 你可以让你的任意类秒变组件。
* **详细的步骤信息：** 你的链路如何执行的，每个组件耗时多少，报了什么错，一目了然。
* **稳定可靠：** 历时2年多的迭代，在各大公司的核心系统上稳定运行。
* **性能卓越：** 框架本身几乎不消耗额外性能，性能取决你的组件执行效率。
* **自带简单监控：** 框架内自带一个命令行的监控，能够知道每个组件的运行耗时排行。

<br/>

## ✨ Install

```xml
<dependency>
    <groupId>com.yomahub</groupId>
    <artifactId>liteflow-spring-boot-starter</artifactId>
    <version>2.11.2</version>
</dependency>
```

::: tip Is the latest version stable？

With each release before, we will add a large number of test cases to ensure the latest version stable. The vast number of test cases covers virtually every detail of the existing functionality.
And we also ran the planty of concurrent stress tests, and after passing all of the above, we prudently submitted code covering the main branch for release.
You don't have to worry about the latest version being unstable. Basically there are questions must be answered, if there is a bug.

So please rest assured to use it.
:::

<br/>

In addition, LiteFlow has passed the test of [墨菲安全](https://www.murphysec.com), with a zero risk framework!

<a href="https://www.murphysec.com/dr/pSdSchoCUEdpkadxPy" alt="OSCS Status"><img class="no-zoom" src="https://www.oscs1024.com/platform/badge/dromara/liteFlow.git.svg?size=large"/></a>

<br/>

## 🎉 Special thanks to:

LiteFlow has gained a lot of support since it became open source in 2020.  At present, the community has more than 5,000 people, Gitee warehouse has 5.0k Stars, Github warehouse has 2k Stars, thank you all the way to the supporters.

LiteFlow在[2021](https://www.oschina.net/project/top_cn_2021)获得“OSC 年度最受欢迎中国开源软件”殊荣。

LiteFlow在2022年获得“Gitee最有价值开源项目“奖项（GVP）。

LiteFlow在2022年成为了"中国信通院可信开源社区共同体(TWOS)成员"。

感谢OSCHINA和Gitee官方平台对LiteFlow项目的推荐和肯定。

LiteFlow首页的背景由插画师`森阳`提供，感谢她的创作，如需要插画商业合作小伙伴可以联系她：

> E-mail：sssenyang@qq.com | Wechat：ArtSenyang

<br/>

## 🏡 Repository

<a href='https://gitee.com/dromara/liteFlow' target="_blank">
    <img class="no-zoom" :src="$withBase('/img/Gitee-red.svg')"/>
</a>

<a href="https://github.com/dromara/liteflow" target="_blank">
    <img class="no-zoom" :src="$withBase('/img/Github-blue.svg')"/>
</a>

<br/><br/>

## 💪🏻 Be a contributor

Welcome all open source enthusiasts to participate in improving LiteFlow, we look forward to your PR!

How to [Become a contributor](/pages/ae4dd5/)。

<br/>

## 🍭 Architecture diagram

<img :src="$withBase('/img/arch.svg')" style="zoom: 100%;" class="no-zoom">

<br/>

<!-- ## 🌏 知识星球

<img :src="$withBase('/img/zhishixingqiu.png')" style="zoom: 50%" class="no-zoom"> -->

<br/><br/>

<style>
  .project-link {
    width: 10em;
    text-align: left;
  }
  .project-link img {
    height:1.8em;
    max-width:180px;
    margin: 14px;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
</style>

## 🐳 Dromara
<div class="row">
    <span class="project-link">
        <a href="https://gitee.com/dromara/TLog" target="_blank">
            <img :src="$withBase('/img/dromara/tlog-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/liteFlow" target="_blank">
            <img :src="$withBase('/img/dromara/liteflow-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/hutool" target="_blank">
            <img :src="$withBase('/img/dromara/hutool-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/sa-token" target="_blank">
            <img :src="$withBase('/img/dromara/satoken-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/hmily" target="_blank">
            <img :src="$withBase('/img/dromara/hmily-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/Raincat" target="_blank">
            <img :src="$withBase('/img/dromara/raincat-logo.png')" class="no-zoom" >
        </a>
    </span>
</div>
<div class="row">
    <span class="project-link">
        <a href="https://gitee.com/dromara/myth" target="_blank">
            <img :src="$withBase('/img/dromara/myth-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/hertzbeat" target="_blank">
            <img :src="$withBase('/img/dromara/hertzbeat-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/forest" target="_blank">
            <img :src="$withBase('/img/dromara/forest-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://jpom.top" target="_blank">
            <img :src="$withBase('/img/dromara/jpom-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/sureness" target="_blank">
            <img :src="$withBase('/img/dromara/sureness-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/easy-es" target="_blank">
            <img :src="$withBase('/img/dromara/ee-logo.png')" class="no-zoom" >
        </a>
    </span>
</div>
<div class="row">
    <span class="project-link">
        <a href="https://gitee.com/dromara/northstar" target="_blank">
            <img :src="$withBase('/img/dromara/northstar-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/fast-request" target="_blank">
            <img :src="$withBase('/img/dromara/fastrequest-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/dynamic-tp" target="_blank">
            <img :src="$withBase('/img/dromara/dynamictp-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/mendmix" target="_blank">
            <img :src="$withBase('/img/dromara/mendmix-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/cubic" target="_blank">
            <img :src="$withBase('/img/dromara/cubic-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
            <img :src="$withBase('/img/dromara/koalas-logo.png')" class="no-zoom" >
        </a>
    </span>
</div>
<div class="row">
    <span class="project-link">
        <a href="https://gitee.com/dromara/MaxKey" target="_blank">
            <img :src="$withBase('/img/dromara/maxkey-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/gobrs-async" target="_blank">
            <img :src="$withBase('/img/dromara/gobrsasync-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/x-easypdf" target="_blank">
            <img :src="$withBase('/img/dromara/xeasypdf-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/image-combiner" target="_blank">
            <img :src="$withBase('/img/dromara/imagecombiner-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/dante-cloud" target="_blank">
            <img :src="$withBase('/img/dromara/dantecloud-logo.png')" class="no-zoom" >
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dromara/go-view" target="_blank">
            <img :src="$withBase('/img/dromara/goview-logo.png')" class="no-zoom" >
        </a>
    </span>
</div>

<br/><br/>

## 🧲 Blogroll
<div class="row">
    <span class="project-link">
        <a href="https://gitee.com" target="_blank">
            <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="https://www.oschina.net" target="_blank">
            <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="http://www.layui-vue.com/zh-CN/index" target="_blank">
            <img :src="$withBase('/img/link/layui-vue.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="https://github.com/opengoofy/hippo4j" target="_blank">
            <img :src="$withBase('/img/link/hippo4j.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="http://www.pearadmin.com/" target="_blank">
            <img :src="$withBase('/img/link/pearAdmin-logo.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="https://gitee.com/dotnetchina" target="_blank">
            <img :src="$withBase('/img/link/dotnet-china-logo.png')" class="no-zoom">
        </a>
    </span>
</div>
<div class="row">
    <span class="project-link">
        <a href="https://xiaonuo.vip" target="_blank">
            <img :src="$withBase('/img/link/snowy-logo.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="http://www.yunchengxc.com/" target="_blank">
            <img :src="$withBase('/img/link/yuncheng-logo.png')" class="no-zoom">
        </a>
    </span>
</div>

<br/><br/>

<style lang="stylus">
.action-button-liteflowx
    margin-left 0.5rem
    margin-top: 0.5rem;
    display inline-block
    font-size 1.2rem
    background-color #FF3861
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color 0.1s ease
    box-sizing border-box
    border-bottom 1px solid #FF3861
    color #FFFFFF
    &:hover
        background-color lighten(#A63939, 10%)
</style>
<!-- 节日彩蛋 
<style>
  .numbers {
    position: fixed;
    z-index: 1000;
    left: 50%;
    margin-left: -237px;
    bottom: 10px;
  }
  .numbers ul {
    text-align: center;
    display: flex;
  }
  .numbers li {
    list-style: none;
    margin: 20px;
    font-size: 120px;
    position: relative;
    top: 0;
    color: transparent;
  }
  .numbers li:nth-child(1) {
    animation: myAnimate 1.5s ease alternate infinite;
  }
  .numbers li:nth-child(2) {
    animation: myAnimate 1.5s ease 0.5s alternate infinite;
  }
  .numbers li:nth-child(3) {
    animation: myAnimate 1.5s ease 1s alternate infinite;
  }
  .numbers li:nth-child(4) {
    animation: myAnimate 1.5s ease 1.5s alternate infinite;
  }
  @keyframes myAnimate {
    0% {
      color: rgb(299, 255, 80);
      top: 160px;
      transform: rotateY(0deg) scale(1);
    }
    50% {
      color: rgb(2, 150, 200);
      top: 0;
      transform: rotateY(180deg) scale(1.5);
    }
    100% {
      color: rgb(255, 106, 198);
      top: 160px;
      transform: rotateY(0deg) scale(1);
    }
  }
</style>

<div class="numbers">
  <ul>
    <li>1</li>
    <li>0</li>
    <li>2</li>
    <li>4</li>
  </ul>
</div>
-->

<style>
  .slo{
      margin:auto;
      max-width:500px;
      max-height:75px;
      background-image:-webkit-linear-gradient(left,#ff5c36,#ff494d,#FF3860); 
      -webkit-background-clip:text; 
      -webkit-text-fill-color:transparent;
      font-size: large;
      font-weight: bolder;
  }
</style>