(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{613:function(t,a,e){"use strict";e.r(a);var s=e(8),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在LiteFlow框架中，规则文件是驱动/编排整个流程的关键，用户通过指定rule-source来定位规则文件的本地路径。而rule-source也是LiteFlow框架中必须配置的参数，而其他参数都不是必须的（都有默认值）。")]),t._v(" "),a("p",[t._v("以下以Springboot的配置做例子，Spring以及非Spring的环境配置可以详细阅读"),a("RouterLink",{attrs:{to:"/pages/v2.11.X/b70ec8/"}},[t._v("配置项")]),t._v("这章节。")],1),t._v(" "),a("h2",{attrs:{id:"常规配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常规配置"}},[t._v("#")]),t._v(" 常规配置")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("config/flow.el.xml")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("规则文件为任何的*.xml形式即可，在v2.9.0之后，不存在老的表达式。但是文档为了兼容习惯，后面的示例依然会采用*.el.xml的形式。")])]),t._v(" "),a("h2",{attrs:{id:"工程内指定多个路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程内指定多个路径"}},[t._v("#")]),t._v(" 工程内指定多个路径")]),t._v(" "),a("p",[t._v("规则文件之间可以用"),a("code",[t._v(",")]),t._v("或者"),a("code",[t._v(";")]),t._v("隔开：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("config/flow1.el.xml,config/flow2.el.xml,config/flow3.el.xml")]),t._v("\n")])])]),a("p",[t._v("你也可以使用Spring EL表达式进行模糊匹配，加载多个配置文件：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("config/**/*.el.xml")]),t._v("\n")])])]),a("h2",{attrs:{id:"绝对路径指定多个路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径指定多个路径"}},[t._v("#")]),t._v(" 绝对路径指定多个路径")]),t._v(" "),a("p",[t._v("绝对路径也可以用"),a("code",[t._v(",")]),t._v("或者"),a("code",[t._v(";")]),t._v("进行分隔：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/data/lf/flow1.el.xml,/data/lf/flow2.el.xml")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在LiteFlow v2.11.1版本之前，不支持绝对路径的模糊匹配。而在这个版本之后，对绝对路径的模糊匹配也作了支持")])]),t._v(" "),a("p",[t._v("你可以用"),a("code",[t._v("*")]),t._v("和"),a("code",[t._v("**")]),t._v("来进行模糊匹配：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/data/lf/**/*Rule.xml")]),t._v("\n")])])]),a("p",[t._v("以上则表示，在"),a("code",[t._v("/data/lf/")]),t._v(" 这个目录下，以及多级子目录下的所有匹配"),a("code",[t._v("*Rule")]),t._v("这个文件命名并且以"),a("code",[t._v("xml")]),t._v("结尾的所有文件。")])])}),[],!1,null,null,null);a.default=r.exports}}]);