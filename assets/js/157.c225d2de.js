(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{619:function(t,s,a){"use strict";a.r(s);var e=a(8),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Redis配置源的规则刷新机制默认为轮询模式。")]),t._v(" "),s("h2",{attrs:{id:"工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),s("p",[t._v("轮询模式以 "),s("strong",[t._v("定时拉取")]),t._v(" 的方式进行规则数据刷新。")]),t._v(" "),s("p",[t._v("在拉取方式的具体设计上主要考虑到两个因素。其一，若每次去Redis中拉取规则数据，需要再次解析和编译，会对框架性能造成很大影响；\n其二，大部分时间拉取的数据并无变化，无用功较多。")]),t._v(" "),s("p",[t._v("考虑到如上两个问题，轮询模式数据拉取的工作方式设定为：")]),t._v(" "),s("blockquote",[s("p",[t._v("1、首次在Redis中获取数据后，将数据以KV结构缓存到本地，key为chainId/scriptId (以下简称数据Id)，value为数据的指纹值 (SHA-1值)。相较于原始数据，指纹值数据量小，缓存占用空间可忽略不计。")]),t._v(" "),s("p",[s("br"),t._v("\n2、此后的每次轮询中，无需拉取全部数据，而是在Redis端调用脚本计算当前数据的指纹值，仅传输数据Id及对应指纹值。")]),t._v(" "),s("p",[s("br"),t._v("\n3、将拉取获得的最新指纹值与本地缓存的指纹值对比，对于发生变化的数据，针对性地根据数据Id从Redis中获取最新数据值，更新规则元数据，同时更新本地缓存指纹值。")])]),t._v(" "),s("p",[t._v("以上设定中，首次轮询起始时间、轮询时间间隔均可自由配置。")]),t._v(" "),s("h2",{attrs:{id:"配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),s("p",[t._v("Redis配置源支持单点和哨兵两种模式。轮询模式下配置参数如下：")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"Yaml风格配置",active:""}},[s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("liteflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rule-source-ext-data-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#单点模式配置如下两项")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#哨兵模式配置如下三项")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redisMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sentinel\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("masterName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mymaster\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sentinelAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26389")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26379")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果你没有用户名或密码可以不配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" poll\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pollingInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pollingStartTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chainDataBase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chainKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chainKey\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果你没有脚本组件，以下可以不配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptDataBase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scriptKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scriptKey\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"Properties风格配置"}},[s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("liteflow.rule-source-ext-data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('{\\\n      \\# 单点模式配置如下两项\\\n      "host":"127.0.0.1",\\\n      "port":6379,\\\n      \\# 哨兵模式配置如下三项\\\n      "redisMode":"sentinel",\\\n      "masterName":"mymaster",\\\n      "sentinelAddress":["127.0.0.1:26389","127.0.0.1:26379"],\\\n      "username":"root",\\\n      "password":"123456",\\\n      "mode":"poll",\\\n      "pollingInterval":60,\\\n      "pollingStartTime":60,\\\n      "chainDataBase":1,\\\n      "chainKey":"chainKey",\\\n      "scriptDataBase":1,\\\n      "scriptKey":"scriptKey"\\\n}')]),t._v("\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"配置说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("redisMode")]),t._v(" "),s("td",[t._v("Redis模式，single为单点，sentinel为哨兵，默认为单点")])]),t._v(" "),s("tr",[s("td",[t._v("host")]),t._v(" "),s("td",[t._v("单点模式Redis连接IP地址")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("单点模式Redis连接端口号")])]),t._v(" "),s("tr",[s("td",[t._v("masterName")]),t._v(" "),s("td",[t._v("哨兵模式主节点名")])]),t._v(" "),s("tr",[s("td",[t._v("sentinelAddress")]),t._v(" "),s("td",[t._v("哨兵模式哨兵节点连接地址 ip:port")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("Redis的用户名 (Redis 6.0及以上)")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("Redis的密码")])]),t._v(" "),s("tr",[s("td",[t._v("mode")]),t._v(" "),s("td",[t._v("规则刷新模式，poll为轮询，sub/subscribe为订阅，默认为轮询")])]),t._v(" "),s("tr",[s("td",[t._v("chainDataBase")]),t._v(" "),s("td",[t._v("规则数据的数据库号")])]),t._v(" "),s("tr",[s("td",[t._v("chainKey")]),t._v(" "),s("td",[t._v("规则数据的Redis key名")])]),t._v(" "),s("tr",[s("td",[t._v("scriptDataBase")]),t._v(" "),s("td",[t._v("脚本组件的数据库号")])]),t._v(" "),s("tr",[s("td",[t._v("scriptKey")]),t._v(" "),s("td",[t._v("脚本组件的Redis key名")])]),t._v(" "),s("tr",[s("td",[t._v("pollingInterval")]),t._v(" "),s("td",[t._v("轮询时间间隔(s)，默认为60s")])]),t._v(" "),s("tr",[s("td",[t._v("pollingStartTime")]),t._v(" "),s("td",[t._v("规则配置后首次轮询的起始时间(s)，默认为60s")])])])]),t._v(" "),s("h2",{attrs:{id:"存储数据说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储数据说明"}},[t._v("#")]),t._v(" 存储数据说明")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("在轮询模式中，规则和脚本数据均以Redis Hash结构存储，配置项"),s("code",[t._v("chainKey")]),t._v("和"),s("code",[t._v("scriptKey")]),t._v("即为该Hash的名字。")]),t._v(" "),s("p",[t._v("你可以在redis UI客户端直接存入数据，如果使用redis client框架以代码的方式存入时，一定要注意编码，比如以Redisson存储规则时，一定要设置"),s("code",[t._v("Codec")]),t._v("为"),s("code",[t._v("StringCodec")]),t._v("。")])]),t._v(" "),s("p",[t._v("对于规则来说，你在Redis中需要为规则单独创建一个Hash类型的数据，这个Hash内的每个键值对就是一个规则，"),s("strong",[t._v("Hash内的field为chainId，value为单纯的EL（"),s("code",[t._v("THEN(a,b,c)")]),t._v("）")]),t._v("。")]),t._v(" "),s("p",[t._v("假设你的规则Hash数据键名为:"),s("code",[t._v("chains")]),t._v("，那么配置形式样例如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Redis HashKey：chains")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("chain1")]),t._v(" "),s("td",[t._v("THEN(a, b, c);")])]),t._v(" "),s("tr",[s("td",[t._v("chain2")]),t._v(" "),s("td",[t._v("IF(x, b).ELIF(y, c).ELSE(d);")])])])]),t._v(" "),s("p",[t._v("对于脚本来说，Hash中的field有固定格式："),s("code",[t._v("脚本组件ID:脚本类型:脚本名称[:脚本语言]")]),t._v("，value为脚本数据。")]),t._v(" "),s("p",[t._v("假设你的脚本Hash数据键名为:"),s("code",[t._v("scripts")]),t._v("，那么配置形式样例如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Redis HashKey：scripts")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("s1:script:脚本组件1")]),t._v(" "),s("td",[t._v('defaultContext.setData("s1","hello")')])]),t._v(" "),s("tr",[s("td",[t._v("s2:script:脚本组件2:js")]),t._v(" "),s("td",[t._v('defaultContext.setData("s2","hello")')])]),t._v(" "),s("tr",[s("td",[t._v("s3:if_script:脚本组件3")]),t._v(" "),s("td",[t._v("if(a > 100){return true;}else{return false;}")])])])]),t._v(" "),s("p",[t._v("关于脚本类型，可以参照"),s("RouterLink",{attrs:{to:"/pages/v2.11.X/81d53c/"}},[t._v("定义脚本组件")]),t._v("这一章节。")],1),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"自动刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动刷新"}},[t._v("#")]),t._v(" 自动刷新")]),t._v(" "),s("p",[t._v("使用了此Redis配置源插件的轮询模式，凡是在配置的Redis键内的数据改动，会依据设定的轮询参数定期拉取并更新数据，你无需做任何事情。")]),t._v(" "),s("h2",{attrs:{id:"模式优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式优缺点"}},[t._v("#")]),t._v(" 模式优缺点")]),t._v(" "),s("p",[t._v("根据工作原理，轮询模式在性能方面做出了权衡：")]),t._v(" "),s("blockquote",[s("p",[t._v("【"),s("strong",[t._v("优势")]),t._v("】")]),t._v(" "),s("ul",[s("li",[t._v("能做到按需拉取真实数据，缓存占用空间小；")]),t._v(" "),s("li",[t._v("计算脚本预先缓存到服务端，不影响Redis服务端性能；")]),t._v(" "),s("li",[t._v("基于Redis原生Hash结构存储，可通过任意客户端或命令行操作数据。")])]),t._v(" "),s("p",[t._v("【"),s("strong",[t._v("劣势")]),t._v("】")]),t._v(" "),s("ul",[s("li",[t._v("受轮询间隔限制，数据更新不实时；")]),t._v(" "),s("li",[t._v("客户端定时轮询存在性能消耗，但仅做指纹值对比，传输数据量小，实际性能影响很小。")])])]),t._v(" "),s("p",[t._v("如果对数据数据延迟容忍度高，且希望Redis客户端不受限的情况下，推荐采用轮询模式。")]),t._v(" "),s("h2",{attrs:{id:"小例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小例子"}},[t._v("#")]),t._v(" 小例子")]),t._v(" "),s("p",[t._v("为了让大家能简单上手Redis规则文件的配置和运行，这里有一个小demo，大家可以拉到本地来运行，需要你替换Redis的配置信息。")]),t._v(" "),s("p",[t._v("运行项目前，先读项目里的"),s("code",[t._v("readme.txt")]),t._v("文件。")]),t._v(" "),s("blockquote",[s("p",[t._v("https://github.com/bryan31/liteflow-ext-rule-demo")])])],1)}),[],!1,null,null,null);s.default=v.exports}}]);