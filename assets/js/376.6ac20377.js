(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{839:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("你可能注意到了，在执行器执行流程的时候，需要传入流程入参和上下文class定义(一个或多个)两种参数。")]),t._v(" "),s("p",[t._v("关于流程入参在"),s("RouterLink",{attrs:{to:"/pages/v2.9.X/563b67/"}},[t._v("流程入参")]),t._v("章节有具体说明。")],1),t._v(" "),s("p",[t._v("对于数据上下文而言，初始化动作是由框架来处理的。也就是说，在你执行第一个组件时，上下文对象里面是没有用户数据的。而你的流程入参是用"),s("code",[t._v("this.getRequestData()")]),t._v("获取的，"),s("strong",[t._v("这部分不包含在上下文里面")]),t._v("。")]),t._v(" "),s("p",[t._v("如果你需要将流程入参放入上下文，那这一动作是需要你自己来完成的。")]),t._v(" "),s("p",[t._v("可能会有人觉得这一步骤略显繁琐。")]),t._v(" "),s("p",[t._v("LiteFlow从2.8.4版本开始，允许用户传入一个或多个已经初始化好的bean作为上下文，而不是传入class对象。")]),t._v(" "),s("p",[t._v("在拿到"),s("code",[t._v("FlowExecutor")]),t._v("之后，你可以像如下一样，传入已经初始化好的bean作为上下文（当然也支持多上下文，这里只演示单上下文）：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderContext")]),t._v(" orderContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\norderContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOrderNo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SO11223344"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LiteflowResponse")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flowExecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute2Resp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chain1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orderContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果你这样调用，等于你的上下文中已经初始化好了一个一些数据。从某种意义上来说，这已经等同于"),s("code",[t._v("流程入参")]),t._v("了，所以使用这个的时候，你完全可以不传流程入参了。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("框架并不支持上下文bean和class混传，你要么都传bean，要么都传class。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);