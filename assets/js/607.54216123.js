(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1070:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("此文档仅适用于从2.7.X升级到2.8.X的指南。")]),t._v(" "),s("p",[t._v("如果你现在使用的版本是2.6.X，那么在升级到2.8.X之前，请先看"),s("RouterLink",{attrs:{to:"/pages/4848b9/"}},[t._v("升级到2.7.X说明")]),t._v("。")],1),t._v(" "),s("p",[t._v("2.8.X是一个里程碑系列。设计了全新的EL形式的规则表达式。但是也保持了对原有规则的支持，使得以前版本的LiteFlow能够以相对平滑的方式迁移到新版本。")]),t._v(" "),s("h2",{attrs:{id:"🌼2-7-x迁移到2-8-x版本注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌼2-7-x迁移到2-8-x版本注意事项"}},[t._v("#")]),t._v(" 🌼2.7.X迁移到2.8.X版本注意事项")]),t._v(" "),s("h3",{attrs:{id:"第一部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一部分"}},[t._v("#")]),t._v(" 第一部分")]),t._v(" "),s("p",[s("strong",[t._v("如果你不打算更换规则表达式的形式，你只需要做以下几点就可以了：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("原先的"),s("code",[t._v("NodeCondComponent")]),t._v("现在更名成为了"),s("code",[t._v("NodeSwitchComponent")]),t._v("，中文表达也从"),s("code",[t._v("条件组件")]),t._v("变更成了"),s("code",[t._v("选择组件")]),t._v("。")]),t._v(" "),s("p",[t._v("并且要实现的方法也从"),s("code",[t._v("processCond")]),t._v("变更成了"),s("code",[t._v("processSwitch")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("对于脚本组件来说，以前的"),s("code",[t._v("脚本条件组件")]),t._v("定义的type是"),s("code",[t._v("cond_script")]),t._v("，现在变成了"),s("code",[t._v("switch_script")]),t._v("，中文表达也从"),s("code",[t._v("脚本条件组件")]),t._v("变更成了"),s("code",[t._v("脚本选择组件")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("对于声明式组件来说，以前的"),s("code",[t._v("@LiteflowCondCmpDefine")]),t._v(" 更名成了"),s("code",[t._v("@LiteflowSwitchCmpDefine")]),t._v(",方法上的定义"),s("code",[t._v("@LiteflowMethod(LiteFlowMethodEnum.PROCESS_COND)")]),t._v("现在变更成了"),s("code",[t._v("@LiteflowMethod(LiteFlowMethodEnum.PROCESS_SWITCH)")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("原先获取上下文的方式是在组件中调用"),s("code",[t._v("this.getContextBean()")]),t._v("，在2.8.X中需要传入上下文的Class。")]),t._v(" "),s("p",[t._v("为什么多传入一个Class呢，因为2.8.X中支持了多上下文的全新特性。你取上下文需要改成以下形式：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推荐以下用法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YourContextBean")]),t._v(" contextBean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContextBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YourContextBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.8.X支持了多上下文的特性，如果你的上下文只有一个的话，用以下语句则和上面等价")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YourContextBean")]),t._v(" contextBean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstContextBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("LiteflowResponse")]),t._v("对象原先需要定义成泛型的形式，现在不需要泛型了。直接写就可以了。Slot也是，没有泛型了，请在你的代码中去掉泛型。")])]),t._v(" "),s("li",[s("p",[t._v("如果你的代码实现过LiteFlow的全局组件拦截接口"),s("code",[t._v("ICmpAroundAspect")]),t._v("，也请去掉相关泛型。")])]),t._v(" "),s("li",[s("p",[t._v("新版本中去除了"),s("code",[t._v("FlowExecutor")]),t._v("直接返回数据上下文的用法，统一用"),s("code",[t._v("LiteflowResponse")]),t._v("类来接收。")])])]),t._v(" "),s("h3",{attrs:{id:"第二部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二部分"}},[t._v("#")]),t._v(" 第二部分")]),t._v(" "),s("p",[s("strong",[t._v("如果你想用新的规则表达式，除了第一部分要做以外，还要注意第二部分的变更")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("你需要学习EL的表达语法，请参照"),s("RouterLink",{attrs:{to:"/pages/v2.8.X/16eca9/"}},[t._v("EL规则的写法")]),t._v("。你需要替换所有的规则表达式写法。")],1)]),t._v(" "),s("li",[s("p",[t._v("你需要把规则文件名改成"),s("code",[t._v("xxxx.el.xml")]),t._v("的形式（如果不改名，还是会按以前的方式去解析，可能会报错）。")])]),t._v(" "),s("li",[s("p",[t._v("如果你的规则文件是通过自定义配置源或者zk加载的，原先的写法是：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v(" #自定义配置源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v(" liteflow.rule-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("xml:com.yomahub.liteflow.test.parsecustom.parser.CustomXmlFlowParser")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v(" #zk加载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v(" liteflow.rule-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("xml:127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183")]),t._v("\n")])])]),s("p",[t._v("现在需要把"),s("code",[t._v("xml:")]),t._v("变成"),s("code",[t._v("el_xml")]),t._v("，json和yaml也是同理。")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#自定义配置源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("el_xml:com.yomahub.liteflow.test.parsecustom.parser.CustomXmlFlowParser")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#zk加载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("el_xml:127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("如果你使用过LiteFlow的被动平滑刷新功能，并且规则已经变更成了EL表达式形式，以前的写法是：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_XML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_YML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("现在需要更换"),s("code",[t._v("FlowParserTypeEnum")]),t._v("的枚举，变成这样：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_EL_XML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_EL_JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_EL_YML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("如果你的规则是基于代码动态构建的。现在的动态构建API更加简单，请参照"),s("RouterLink",{attrs:{to:"/pages/v2.8.X/6bc8fe/"}},[t._v("用代码动态构造规则")]),t._v("。")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);