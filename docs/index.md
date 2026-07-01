---
home: true
heroImage: false
heroText: false
tagline: false
slogan: '<div class="hero-custom"><div class="hero-brand"><img src="/img/logo.png" alt="LiteFlow" class="hero-custom-logo" /><span class="hero-brand-copy"><span class="hero-custom-title">LiteFlow<span class="hero-custom-version">v2.16.0</span></span><span class="hero-custom-subtitle">RULES AS CODE</span></span></div><div class="hero-custom-typewriter"><span class="tw-text"></span><span class="tw-cursor"></span></div></div>'
actions:
  - actionText: ⛵️ 进入编排文档
    actionLink: /pages/5816c5/
    actionClass: action-button-liteflowx
  - actionText: 🤖 进入 Ai Agent 编排
    actionLink: /pages/agent-overview/
    actionClass: action-button-liteflowx
  - actionText: 🧠 AI 用 LiteFlow（Skill）
    actionLink: /pages/how2use-liteflow/
    actionClass: action-button-liteflowx
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
features: # 可选的
  - title: 🧬 强大的EL
    details: 简单低学习成本的EL，丰富的关键字，能完成任意模式的逻辑编排。小身材，大能量。
  - title: 🧩 皆为组件
    details: 拥有独特的设计理念，所有逻辑皆为组件。上下文隔离，组件单一职责，组件可以复用且互相解耦。
  - title: 🤖 AI Agent 编排
    details: 将 Re-Act Agent 封装为标准组件，可与普通业务节点通过 EL 规则自由编排，让大模型智能体真正融入你的业务流程。
  - title: 📑 脚本支持
    details: 除了java，你还可以用多达8种脚本语言来书写你的逻辑：Java，Groovy，Kotlin，Js，Python，Lua，QLExpress，Aviator。
  - title: 🍃 平滑热刷
    details: 无论是编排规则，还是逻辑组件，全部可热更替，实时更改，无需重启。
  - title: 🛖 规则存储
    details: 支持把规则和脚本存在任何关系型数据库，并且支持大部分的注册中心，支持zk，nacos，etcd，apollo，redis。
  - title: ⭐️ 支持度广
    details: JDK8~JDK25，Springboot 2.X ~ Springboot 4.X，统统支持。非Spring也给予了支持。
  - title: 🍱 高级特性
    details: 超多的高级特性，每一个都能贴合你的业务，利用高级特性让你的复杂场景瞬间变得简单且灵动。
  - title: 🪁 可靠性强
    details: 对系统的额外消耗极小，性能强悍。多达2000个测试用例保障了LiteFlow的质量。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none

---

<Notice :data="$frontmatter.notices"/>

## 🌈 特别赞助

::: cardList
```yaml
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
  expired: '2026-03-07'
- name: 速众低代码开发平台
  desc: Java+Vue3+大模型 100%开源
  avatar: /img/donate/suzhong.gif
  link: https://www.suconnect.com?hmsr=LiteFlow&hmpl=&hmcu=LiteFlow&hmkw=&hmci=
  bgColor: '#2284FF'
  textColor: '#FFFFFF'
  expired: '2027-02-25'
- name: Easysearch
  desc: 企业级的分布式搜索型数据库
  avatar: /img/donate/easySearch.png
  link: https://easysearch.cn
  bgColor: '#836EFF'
  textColor: '#FFFFFF'
  expired: '2027-03-22'

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

## ✨ 最新版本

```xml
<dependency>
    <groupId>com.yomahub</groupId>
    <artifactId>liteflow-spring-boot-starter</artifactId>
    <version>2.16.0</version>
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

LiteFlow于2024年获得"GitCode G-Star毕业项目"认证！

LiteFlow获得 2025 年度开源项目`基础软件赛道`第二名的殊荣。

感谢以上官方平台对LiteFlow项目的推荐和肯定。

<br/>

## 💪🏻 参与开发

欢迎各路好汉一起来参与完善 LiteFlow，我们期待你的 PR！

如果想贡献，请先查看[参与开发](/pages/ae4dd5/)。

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
        <a href="https://gitcode.com/" target="_blank">
            <img :src="$withBase('/img/link/gitcode-logo.svg')" class="no-zoom">
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
    <span class="project-link">
        <a href="https://gitee.com/aizuda/flowlong" target="_blank">
            <img :src="$withBase('/img/link/flowlong-logo.png')" class="no-zoom">
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
        <a href="https://rulego.cc" target="_blank">
            <img :src="$withBase('/img/link/rulego.png')" class="no-zoom">
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
