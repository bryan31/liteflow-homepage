(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1046:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("LF 2.12.2.1发布啦！")]),t._v(" "),s("p",[t._v("肯定有小伙伴会奇怪，这次怎么最后还有个点1呢。因为"),s("code",[t._v("2.12.2")]),t._v("本来已经发布，但是这期间社区里有个同学用到了声明式的异常事件监听功能，发现有一个bug并立即上报了。我在查清楚原委之后觉得这应该被尽快修复，所以在"),s("code",[t._v("2.12.2")]),t._v("后面又打了个补丁版本。")]),t._v(" "),s("p",[t._v("但是这并代表"),s("code",[t._v("2.12.2")]),t._v("就不能用，如果你没有用到声明式的异常事件监听功能，那么"),s("code",[t._v("2.12.2")]),t._v("和"),s("code",[t._v("2.12.2.1")]),t._v("是完全一致的。")]),t._v(" "),s("p",[t._v("这次的"),s("code",[t._v("2.12.2.1")]),t._v("版本没有带来大的特性，算是常规性迭代，但是也带了很多功能的增强和一些bug的修复。这些issue都来自于社区。")]),t._v(" "),s("p",[t._v("所以更加说明了我们是非常重视社区的。")]),t._v(" "),s("p",[t._v("这次版本带来了13个issue的更新，包括8个增强和5个修复。接下来我会挑一些来介绍。")]),t._v(" "),s("h2",{attrs:{id:"决策路由支持刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#决策路由支持刷新"}},[t._v("#")]),t._v(" 决策路由支持刷新")]),t._v(" "),s("p",[t._v("决策路由自从2.12.0推出以来，我们一直在对决策路由做一些优化。比如2.12.1版本支持了数据库中使用决策路由，以及决策路由的命名空间。这次我们对决策路由的调整是：支持了决策路由的刷新。")]),t._v(" "),s("p",[t._v("如果决策路由配置在数据库中，并开启了轮询，那么改变等待轮询即可刷新决策路由。如果没有开启轮询，你现在可以通过调用以下api来完成刷新：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reloadChain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chain1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"THEN(a, b, c)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AND(r1, r2)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("是的，它是一个重载方法，它还有一个两个参数的方法，那是单独刷新规则的，现在它的重载可以连带规则和路由一起刷新了。")]),t._v(" "),s("h2",{attrs:{id:"sql插件的轮询逻辑优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql插件的轮询逻辑优化"}},[t._v("#")]),t._v(" SQL插件的轮询逻辑优化")]),t._v(" "),s("p",[t._v("在这之前，一直有社区里的同学反映，在使用数据库存储规则和脚本时，单更新脚本和单更新规则，自动刷新都正常，但是同时更新了规则和脚本，刷新就会一直失效。")]),t._v(" "),s("p",[t._v("我们这次修复了这个问题。现在无论你怎么更新，自动刷新都会生效。")]),t._v(" "),s("h2",{attrs:{id:"上下文支持超类获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文支持超类获取"}},[t._v("#")]),t._v(" 上下文支持超类获取")]),t._v(" "),s("p",[t._v("这也是社区一位使用者提出的建议，有些上下文的设计是有超类的。在公共组件里希望可以用超类去获取上下文。这样更利于公共组件的定义。")]),t._v(" "),s("p",[t._v("这次我们支持了这一形式的获取。你的上下文既可以用本身的Class获取，也可以用他的超类去获取。")]),t._v(" "),s("h2",{attrs:{id:"el的构建现在支持retry属性的构建了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#el的构建现在支持retry属性的构建了"}},[t._v("#")]),t._v(" EL的构建现在支持retry属性的构建了")]),t._v(" "),s("p",[t._v("如果经常用动态代码构建规则特性的小伙伴应该知道，LF里有个ELBus对象，是可以很方便的通过代码来构建出规则的。")]),t._v(" "),s("p",[t._v("之前不支持retry属性，这次我们不仅支持了retry。而且我们把ELBus的核心代码部分重构了一遍，更加合理，更加高效。")]),t._v(" "),s("h2",{attrs:{id:"全部更新列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全部更新列表"}},[t._v("#")]),t._v(" 全部更新列表")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("增强 #IAE5PA FlowBus中提供刷新route的api方法\n\nhttps://gitee.com/dromara/liteFlow/issues/IAE5PA\n\n增强 #IACEH9 SQL插件中的轮询逻辑优化\n\nhttps://gitee.com/dromara/liteFlow/issues/IACEH9\n\n增强 #IACEGB 上下文超类判断的获取和转换\n\nhttps://gitee.com/dromara/liteFlow/issues/IACEGB\n\n增强 #IA9QBG el-builder的部分重构\n\nhttps://gitee.com/dromara/liteFlow/issues/IA9QBG\n\n增强 #IA9NOI ELBus中增加对retry构建的api支持\n\nhttps://gitee.com/dromara/liteFlow/issues/IA9NOI\n\n增强 #IA6E3Q redis配置的时候可以指定Redisson的链接数，默认的connections太多了\n\nhttps://gitee.com/dromara/liteFlow/issues/IA6E3Q\n\n增强 #IA8B3T 插件 throw Exception 会丢失堆栈\n\nhttps://gitee.com/dromara/liteFlow/issues/IA8B3T\n\n增强 #IABK5C 校验 EL 表达式，获取校验失败原因\n\nhttps://gitee.com/dromara/liteFlow/issues/IABK5C\n\n修复 #IA5PAK ELBus串行编排不支持对每个节点进行超时配置\n\nhttps://gitee.com/dromara/liteFlow/issues/IA5PAK\n\n修复 #IAD2HH 希望支持执行节点日志与监控日志的分开管理\n\nhttps://gitee.com/dromara/liteFlow/issues/IAD2HH\n\n修复 #IACSQ8 liteflow-solon-plugin 启动报错\n\nhttps://gitee.com/dromara/liteFlow/issues/IACSQ8\n\n修复 #IADIXE 使用迭代循环组件，下游getCurrLoopObj()获取为null\n\nhttps://gitee.com/dromara/liteFlow/issues/IADIXE\n\n修复 #IAFKQV 声明式的onError方法取不到Exception\n\nhttps://gitee.com/dromara/liteFlow/issues/IAFKQV\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);