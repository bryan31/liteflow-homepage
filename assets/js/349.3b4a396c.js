(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{813:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("LiteFlow从v2.9.0开始，原生支持了标准关系型结构化数据库的配置源，只要你的数据库兼容标准SQL语法，都可以支持。")]),t._v(" "),a("h2",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),a("p",[t._v("如果使用数据库作为规则配置源，你需要添加以下额外插件依赖：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.yomahub"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("liteflow-rule-sql"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.9.7"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("依赖了插件包之后，你无需再配置"),a("code",[t._v("liteflow.ruleSource")]),t._v("路径。")]),t._v(" "),a("p",[t._v("只需要配置插件的额外参数即可：")]),t._v(" "),a("code-group",[a("code-block",{attrs:{title:"Yaml风格配置",active:""}},[a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("liteflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rule-source-ext-data-map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/poseidon\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driverClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.cj.jdbc.Driver\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("applicationName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#以下是chain表的配置，这个一定得有")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chainTableName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chain\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chainApplicationNameField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application_name\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chainNameField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chain_name\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("elDataField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" el_data\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#以下是script表的配置，如果你没使用到脚本，下面可以不配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptTableName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" script\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptApplicationNameField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application_name\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptIdField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" script_id\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptNameField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" script_name\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptDataField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" script_data\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptTypeField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" script_type\n")])])])]),t._v(" "),a("code-block",{attrs:{title:"Properties风格配置"}},[a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source-ext-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('{\\\n  "url":"jdbc:mysql://localhost:3306/poseidon",\\\n  "driverClassName":"com.mysql.cj.jdbc.Driver",\\\n  "username":"root",\\\n  "password":"123456",\\\n  "applicationName": "demo",\\\n  "chainTableName": "chain",\\\n  "chainApplicationNameField": "application_name",\\\n  "chainNameField": "chain_name",\\\n  "elDataField": "el_data",\\\n  "scriptTableName": "script",\\\n  "scriptApplicationNameField": "application_name",\\\n  "scriptIdField": "script_id",\\\n  "scriptNameField": "script_name",\\\n  "scriptDataField": "script_data",\\\n  "scriptTypeField": "script_type"')]),t._v("\n  }\n")])])])])],1),t._v(" "),a("h2",{attrs:{id:"配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),a("p",[t._v("LiteFlow并不约束你的表名和表结构，你只需要把表名和相关的字段名配置在参数里即可。")]),t._v(" "),a("p",[t._v("对于配置项说明如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置项")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("jdbc的连接url")])]),t._v(" "),a("tr",[a("td",[t._v("driverClassName")]),t._v(" "),a("td",[t._v("驱动器类名")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("数据库用户名")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("数据库密码")])]),t._v(" "),a("tr",[a("td",[t._v("applicationName")]),t._v(" "),a("td",[t._v("你的应用名称")])]),t._v(" "),a("tr",[a("td",[t._v("chainTableName")]),t._v(" "),a("td",[t._v("编排规则表的表名")])]),t._v(" "),a("tr",[a("td",[t._v("chainApplicationNameField")]),t._v(" "),a("td",[t._v("编排规则表中应用名称存储字段名")])]),t._v(" "),a("tr",[a("td",[t._v("chainNameField")]),t._v(" "),a("td",[t._v("规则名称存储的字段名")])]),t._v(" "),a("tr",[a("td",[t._v("elDataField")]),t._v(" "),a("td",[t._v("EL表达式的字段(只存EL)")])]),t._v(" "),a("tr",[a("td",[t._v("scriptTableName")]),t._v(" "),a("td",[t._v("你的脚本存储表的表名")])]),t._v(" "),a("tr",[a("td",[t._v("scriptApplicationNameField")]),t._v(" "),a("td",[t._v("脚本表中应用名称存储字段名")])]),t._v(" "),a("tr",[a("td",[t._v("scriptIdField")]),t._v(" "),a("td",[t._v("脚本组件的Id的字段名")])]),t._v(" "),a("tr",[a("td",[t._v("scriptNameField")]),t._v(" "),a("td",[t._v("脚本组件名称的字段名")])]),t._v(" "),a("tr",[a("td",[t._v("scriptDataField")]),t._v(" "),a("td",[t._v("脚本数据的字段名")])]),t._v(" "),a("tr",[a("td",[t._v("scriptTypeField")]),t._v(" "),a("td",[t._v("脚本类型的字段名(类型参照"),a("RouterLink",{attrs:{to:"/pages/v2.9.X/81d53c/"}},[t._v("定义脚本组件")]),t._v(")")],1)])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("在数据库中，你至少需要一张表来存储编排规则，这是必须的。")]),t._v(" "),a("p",[t._v("如果你使用到了脚本，那么需要第二张表来存储脚本。")]),t._v(" "),a("p",[t._v("在规则表中，一行数据就是一个规则。在脚本表中，一行数据就是一个脚本组件。")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("p",[t._v("规则表：liteflow_chain")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("application_name")]),t._v(" "),a("th",[t._v("chain_name")]),t._v(" "),a("th",[t._v("chain_desc")]),t._v(" "),a("th",[t._v("el_data")]),t._v(" "),a("th",[t._v("create_time")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("demo")]),t._v(" "),a("td",[t._v("chain1")]),t._v(" "),a("td",[t._v("测试流程1")]),t._v(" "),a("td",[t._v("THEN(a, b, c, s1,s2);")]),t._v(" "),a("td",[t._v("2022-09-19 19:31:00")])])])]),t._v(" "),a("p",[t._v("脚本表：liteflow_script")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("application_name")]),t._v(" "),a("th",[t._v("script_id")]),t._v(" "),a("th",[t._v("script_name")]),t._v(" "),a("th",[t._v("script_data")]),t._v(" "),a("th",[t._v("script_type")]),t._v(" "),a("th",[t._v("create_time")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("demo")]),t._v(" "),a("td",[t._v("s1")]),t._v(" "),a("td",[t._v("脚本s1")]),t._v(" "),a("td",[t._v("import cn.hutool.core.date.DateUtil"),a("br"),t._v('def date = DateUtil.parse("2022-10-17 13:31:43")'),a("br"),t._v('println(date) defaultContext.setData("demoDate", date)'),a("br"),t._v("class Student {"),a("br"),t._v("   int studentID"),a("br"),t._v("   String studentName"),a("br"),t._v("}"),a("br"),t._v('Student student = new Student() student.studentID = 100301 student.studentName = "张三" defaultContext.setData("student",student)  def a=3'),a("br"),t._v("def b=2"),a("br"),t._v('defaultContext.setData("s1",a*b)')]),t._v(" "),a("td",[t._v("script")]),t._v(" "),a("td",[t._v("2022-09-19 19:31:00")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("demo")]),t._v(" "),a("td",[t._v("s2")]),t._v(" "),a("td",[t._v("脚本s2")]),t._v(" "),a("td",[t._v('defaultContext.setData("s2","hello")')]),t._v(" "),a("td",[t._v("script")]),t._v(" "),a("td",[t._v("2022-09-19 19:31:00")])])])]),t._v(" "),a("h2",{attrs:{id:"自动刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动刷新"}},[t._v("#")]),t._v(" 自动刷新")]),t._v(" "),a("p",[t._v("由于结构化数据库并不提供监听机制，所以当你的规则在数据库中发生变化，LiteFlow是感知不到变化的。不会自动刷新规则。")]),t._v(" "),a("p",[t._v("你需要手动调用LiteFlow提供的相关API来完成规则刷新。在实际应用中，你可以把这个刷新做成页面上的一个按钮或者一个http链接来进行操作。")]),t._v(" "),a("p",[t._v("具体如何调用API进行规则刷新请参照"),a("RouterLink",{attrs:{to:"/pages/v2.9.X/204d71/"}},[t._v("平滑热刷新")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"小例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小例子"}},[t._v("#")]),t._v(" 小例子")]),t._v(" "),a("p",[t._v("为了让大家能简单上手SQL规则文件的配置和运行，这里有一个小demo，大家可以拉到本地来运行，需要你替换数据库的配置信息。")]),t._v(" "),a("p",[t._v("运行项目前，先读项目里的"),a("code",[t._v("readme.txt")]),t._v("文件。")]),t._v(" "),a("blockquote",[a("p",[t._v("https://github.com/bryan31/liteflow-ext-rule-demo")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);