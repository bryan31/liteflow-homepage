---
home: true
heroImage: /img/logo.svg
heroText: LiteFlow
tagline: 🚀轻量，快速，稳定可编排的组件式规则引擎
actionText: 开始使用 →
actionLink: /pages/a2f161/
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
<p align="center">
  <a class="become-sponsor" href="/pages/1b12ed/">支持这个项目</a>
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
* 复杂业务的解耦利器，为所有组件提供统一的实现协议。
* 基于规则文件来编排流程，并可进行热编排。
* 框架中支持ZooKeeper流程配置，即时推送修改内容。
* 能自由扩展配置持久化源，提供扩展接口。
* 支持SpringBoot的自动装配，也支持Spring的配置和非Spring的项目。
* 提供串行和并行2种模式，提供常见常见的表达式语句。
* 提供无级嵌套子流程模式。
* 数据槽高并发隔离机制。
* 组件的重试机制。
* 多种脚本语言的支持。
* 自带简单的监控，能够知道每个组件的运行耗时排行。

<br/>

## 🍭架构图

<img :src="$withBase('/img/architecture.svg')" style="zoom: 120%">

<br/>

## 🧲友情链接
<span style="width: 150px;flex:1;text-align: left">
    <a href="https://gitee.com">
        <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://www.oschina.net">
        <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/TLog">
        <img :src="$withBase('/img/link/tlog-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sa-token">
        <img :src="$withBase('/img/link/satoken-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sureness">
        <img :src="$withBase('/img/link/sureness-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hutool">
        <img :src="$withBase('/img/link/hutool-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/Apache-ShenYu/incubator-shenyu">
        <img :src="$withBase('/img/link/shenyu-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/forest">
        <img :src="$withBase('/img/link/forest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/MaxKey">
        <img :src="$withBase('/img/link/maxkey-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dotnetchina">
        <img :src="$withBase('/img/link/dotnet-china-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="http://www.pearadmin.com/">
        <img :src="$withBase('/img/link/pearAdmin-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<!-- AD 
<div class="wwads-cn wwads-horizontal page-ad" data-id="136" style="width:100%;max-height:80px;min-height:auto;"></div>
<style>
  .page-ad img{width:80px!important;}
  /* .pageT .wwads-content{display:flex;align-items: center;}
  .pageT .wwads-poweredby{display:none!important;}
  .pageT .wwads-hide{display:none!important;} */
</style>
-->