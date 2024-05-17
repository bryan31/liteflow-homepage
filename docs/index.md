---
home: true
heroImage: /img/logo.svg
heroText: LiteFlow
tagline: 🚀 轻量，快速，稳定可编排的组件式规则引擎
slogan: '<div class="slo">Make your code amazing.</div>'
actions:
  - actionText: ⛵️ v2.12.0 进入文档
    actionLink: /pages/5816c5/
    actionClass: action-button-liteflowx
  - actionText: 👑 LF CLUB社区
    actionLink: /pages/8d8888/
    actionClass: action-button-liteflowx
  - actionText: 🌟 为LiteFlow点星
    actionLink: https://gitee.com/dromara/liteFlow
    actionClass: action-button-liteflowx
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
features: # 可选的
  - title: 🧬 强大的EL
    details: 简单低学习成本的EL，丰富的关键字，能完成任意模式的逻辑编排。小身材，大能量。
  - title: 🧩 皆为组件
    details: 拥有独特的设计理念，所有逻辑皆为组件。上下文隔离，组件单一职责，组件可以复用且互相解耦。
  - title: 📑 脚本支持
    details: 除了java，你还可以用多达7种脚本语言来书写你的逻辑：Java，Groovy，Js，Python，Lua，QLExpress，Aviator。
  - title: 🛖 规则存储
    details: 支持把规则和脚本存在任何关系型数据库，并且支持大部分的注册中心，支持zk，nacos，etcd，apollo，redis。
  - title: 🍃 平滑热刷
    details: 无论是编排规则，还是脚本组件，你都可以在不用重启应用的情况下进行即时刷新。实时替换逻辑。
  - title: ⭐️ 支持度广
    details: JDK8~JDK17，Spring 2.X ~ Spring 3.X，统统支持。非Spring也给予了支持。
  - title: 🍱 高级特性
    details: 超多的高级特性，每一个都能贴合你的业务，利用高级特性让你的复杂场景瞬间变得简单且灵动。
  - title: 🏤 社区强大
    details: 多达几千人的使用者社区，及时给你答疑解惑。并且在国内多家一线企业中落地运用。
  - title: 🪁 可靠性强
    details: 对系统的额外消耗极小，性能强悍。多达1700个测试用例保障了LiteFlow的质量。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
notices: # 可选的
  - id: Liteflow-2.12.0
    title: 🚀 LiteFlow v2.12.0 发布！
    content: '<div><p>2024-04-15</p><ul><li>决策路由特性</li><li>允许启动不检查组件</li><li>别名获取上下文</li><li>EL中新增retry关键字</li><li>别名获取上下文</li><li>新增布尔组件</li><li>验证脚本/卸载脚本特性</li><li>其余超多更改请点击查看详情查看</li></ul></div><p style="text-align: right;"><a href="/pages/8ff017/">查看详情</a></p>'
    isHtmlContent: true
---

<Notice :data="$frontmatter.notices"/>

## 🌈 特别赞助

::: cardList
```yaml
- name: MISBoot低代码开发平台
  desc: 零代码应用快速搭建<br>让开发更简单
  avatar: /img/donate/misboot.png
  link: https://www.misboot.com/?from=LiteFlow
  bgColor: '#ba4552'
  textColor: '#FFFFFF'
  expired: '2025-11-21'
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
- name: 云程低代码平台
  desc: 采用springboot+vue技术，可私有化部署，可交付源代码
  avatar: /img/donate/yuncheng.png
  link: http://www.yunchengxc.com/
  bgColor: '#A6A1F3'
  textColor: '#FFFFFF'
  expired: '2024-10-27'
- name: 驰骋工作流引擎
  desc: 专注流程表单引擎领域研发20年，100%核心源代码开放
  avatar: /img/donate/chicheng.png
  link: https://ccbpm.cn/?frm=liteFlow
  bgColor: '#2c61a9'
  textColor: '#FFFFFF'
  expired: '2028-01-05'
- name: FastBee物联网平台
  desc: 更适合中小企业和个人使用的开源物联网平台
  avatar: /img/donate/fb.gif
  link: https://fastbee.cn/
  bgColor: '#f4dec8'
  textColor: '#000000'
  expired: '2025-02-20'
- name: JNPF低代码开发平台
  desc: 技术双引擎系统，无限制业务场景，永久使用权，全源码交付
  avatar: /img/donate/yinmai.png
  link: https://www.jnpfsoft.com/index.html?from=liteflow
  bgColor: '#aaccff'
  textColor: '#000000'
  expired: '2025-04-12'

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

## ✨ 最新版本

```xml
<dependency>
    <groupId>com.yomahub</groupId>
    <artifactId>liteflow-spring-boot-starter</artifactId>
    <version>2.12.0</version>
</dependency>
```

:::tip 新版本稳定吗？

我们每一次发布版本，都会补充大量的测试用例。庞大的测试用例数目几乎覆盖到每一个已有功能的细节点。

并且我们会跑超大量的并发压力测试，以上所有的通过后，我们才会谨慎的提交代码覆盖主分支进行发版。

你大可不必担心新版本不稳定的情况，况且，我们有良好的社区群。基本上有问必答，如出现bug，基本上隔天必解决。

所以，请放心的使用！
:::

<br/>

另外LiteFlow通过了[墨菲安全](https://www.murphysec.com)的检测，为0风险框架！

<a href="https://www.murphysec.com/dr/pSdSchoCUEdpkadxPy" alt="OSCS Status"><img class="no-zoom" src="https://www.oscs1024.com/platform/badge/dromara/liteFlow.git.svg?size=large"/></a>

<br/>

## 🎉 致谢

LiteFlow自从2020年开源以来，获得了很多人的支持。目前社区群5000多人，Gitee上6k Stars，Github上2.8k Stars，感谢各位支持者的一路同行，我们会努力把国产的规则引擎做到极致。

LiteFlow在[2021](https://www.oschina.net/project/top_cn_2021)获得“OSC 年度最受欢迎中国开源软件”殊荣。

LiteFlow在2022年获得“Gitee最有价值开源项目“奖项（GVP）。

LiteFlow在2022年成为了"中国信通院可信开源社区共同体(TWOS)成员"。

感谢OSCHINA和Gitee官方平台对LiteFlow项目的推荐和肯定。

LiteFlow首页的背景由插画师`森阳`提供，感谢她的创作，如需要插画商业合作小伙伴可以联系她：

> 邮件：sssenyang@qq.com | 微信：ArtSenyang

<br/>

## 🏡 代码托管

<a href='https://gitee.com/dromara/liteFlow' target="_blank">
    <img class="no-zoom" :src="$withBase('/img/Gitee-red.svg')"/>
</a>

<a href="https://github.com/dromara/liteflow" target="_blank">
    <img class="no-zoom" :src="$withBase('/img/Github-blue.svg')"/>
</a>

<br/><br/>

## 💪🏻 参与开发

欢迎各路好汉一起来参与完善 LiteFlow，我们期待你的 PR！

如果想贡献，请先查看[参与开发](/pages/ae4dd5/)。

<br/>

## 🍭 架构图

<img :src="$withBase('/img/arch.svg')" style="zoom: 100%;" class="no-zoom">

<br/>

## 🌏 知识星球

<a href="https://t.zsxq.com/16imSPf5C"><img :src="$withBase('/img/zhishixingqiu.png')" style="zoom: 50%" class="no-zoom"></a>

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

## 🐳 Dromara组织成员
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
        <a href="https://gitee.com/dromara/Akali" target="_blank">
            <img :src="$withBase('/img/dromara/akali-logo.png')" class="no-zoom" >
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
    <span class="project-link">
        <a href="https://gitee.com/dromara/go-view" target="_blank">
            <img :src="$withBase('/img/dromara/goview-logo.png')" class="no-zoom" >
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
</div>

<br/><br/>

## 🧲 友情链接
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
    <span class="project-link">
        <a href="https://www.misboot.com/?from=LiteFlow" target="_blank">
            <img :src="$withBase('/img/link/misboot-logo.png')" class="no-zoom">
        </a>
    </span>
    <span class="project-link">
        <a href="https://ccbpm.cn/?frm=liteFlow" target="_blank">
            <img :src="$withBase('/img/link/chicheng.png')" class="no-zoom">
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