(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{495:function(a,t,e){"use strict";e.r(t);var s=e(8),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在LiteFlow框架中，规则文件是驱动/编排整个流程的关键，用户通过指定rule-source来定位规则文件的本地路径。而rule-source也是LiteFlow框架中必须配置的参数，而其他参数都不是必须的（都有默认值）。")]),a._v(" "),t("p",[a._v("以下以Springboot的配置做例子，Spring以及非Spring的环境配置可以详细阅读"),t("RouterLink",{attrs:{to:"/pages/b70ec8/"}},[a._v("配置项")]),a._v("这章节。")],1),a._v(" "),t("h2",{attrs:{id:"常规配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常规配置"}},[a._v("#")]),a._v(" 常规配置")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("config/flow.el.xml")]),a._v("\n")])])]),t("p",[a._v("或者")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("classpath:config/flow.el.xml")]),a._v("\n")])])]),t("p",[a._v("以上两种是等价的。")]),a._v(" "),t("p",[a._v("如果想扫描所有其他jar包中的类路径，可以使用"),t("code",[a._v("classpath*:")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("classpath*:config/liteflow/**/*.xml")]),a._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("规则文件为任何的*.xml形式即可，在v2.9.0之后，不存在老的表达式。但是文档为了兼容习惯，后面的示例依然会采用*.el.xml的形式。")])]),a._v(" "),t("h2",{attrs:{id:"工程内指定多个路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程内指定多个路径"}},[a._v("#")]),a._v(" 工程内指定多个路径")]),a._v(" "),t("p",[a._v("规则文件之间可以用"),t("code",[a._v(",")]),a._v("或者"),t("code",[a._v(";")]),a._v("隔开：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("config/flow1.el.xml,config/flow2.el.xml,config/flow3.el.xml")]),a._v("\n")])])]),t("p",[a._v("你也可以使用Spring EL表达式进行模糊匹配，加载多个配置文件：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("config/**/*.el.xml")]),a._v("\n")])])]),t("h2",{attrs:{id:"绝对路径指定多个路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径指定多个路径"}},[a._v("#")]),a._v(" 绝对路径指定多个路径")]),a._v(" "),t("p",[a._v("绝对路径也可以用"),t("code",[a._v(",")]),a._v("或者"),t("code",[a._v(";")]),a._v("进行分隔：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/data/lf/flow1.el.xml,/data/lf/flow2.el.xml")]),a._v("\n")])])]),t("h2",{attrs:{id:"绝对路径指定模糊路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径指定模糊路径"}},[a._v("#")]),a._v(" 绝对路径指定模糊路径"),t("Badge",{attrs:{text:"v2.11.1+"}})],1),a._v(" "),t("p",[a._v("你可以用"),t("code",[a._v("*")]),a._v("和"),t("code",[a._v("**")]),a._v("来进行模糊匹配：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("liteflow.rule-source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/data/lf/**/*Rule.xml")]),a._v("\n")])])]),t("p",[a._v("以上则表示，在"),t("code",[a._v("/data/lf/")]),a._v(" 这个目录下，以及多级子目录下的所有匹配"),t("code",[a._v("*Rule")]),a._v("这个文件命名并且以"),t("code",[a._v("xml")]),a._v("结尾的所有文件。")])])}),[],!1,null,null,null);t.default=r.exports}}]);