(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{1031:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("LiteFlow从2.6.4开始支持了优雅平滑热刷新的特性。")]),t._v(" "),a("p",[t._v("即你可以在不重启服务的情况下，进行规则的重载。并且在高并发下刷新的时候，正在执行流程的线程是完全平滑的，不会因为刷新的过程而出现中断的现象。")]),t._v(" "),a("p",[t._v("在刷新时，正在执行的流程还是走的旧的流程，刷新好。后续request会自动切换到新的流程。")]),t._v(" "),a("p",[t._v("LiteFlow原生支持的zookeeper配置源，不需要你做任何事，只要zk上的规则更改了之后，会自动热平滑刷新。")]),t._v(" "),a("p",[t._v("但是对于自定义配置源来说，LiteFlow提供了主动刷新和被动刷新2个接口，根据需要自行选择。")]),t._v(" "),a("h2",{attrs:{id:"基于规则文件-主动刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于规则文件-主动刷新"}},[t._v("#")]),t._v(" 基于规则文件-主动刷新")]),t._v(" "),a("p",[t._v("你可以在spring容器中拿到"),a("code",[t._v("FlowExecutor")]),t._v("对象后，调用以下接口：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("flowExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reloadRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个方法会按照启动时的方式去拉取你最新的流程配置信息，进行平滑热刷新。")]),t._v(" "),a("h2",{attrs:{id:"基于规则文件-被动刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于规则文件-被动刷新"}},[t._v("#")]),t._v(" 基于规则文件-被动刷新")]),t._v(" "),a("p",[t._v("所谓被动刷新，适用于使用了诸如配置中心，nacos，etcd等自定配置源，这类配置源可以反向推送最新的数据。对于java客户端这边，一定会有一个诸如listener的监听器去监听数据的变更。")]),t._v(" "),a("p",[t._v("如果你监听到了变更，你可以通过调用这个方法去实现平滑热刷新：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowBus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshFlowMetaData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlowParserTypeEnum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中第一个参数是指文件格式什么，支持xml/json/yml")]),t._v(" "),a("p",[t._v("第二个参数指的是推送过来的最新配置文本数据")]),t._v(" "),a("h2",{attrs:{id:"基于动态代码构建-刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于动态代码构建-刷新"}},[t._v("#")]),t._v(" 基于动态代码构建-刷新")]),t._v(" "),a("p",[t._v("如果你是基于动态代码构建的规则，则意味着没有规则文件，以上两种方式是基于规则文件的。")]),t._v(" "),a("p",[t._v("其实基于动态代码构建的，建议你把动态代码构建的代码封装成一个方法。有变动时，再重新执行一遍构建就可以了。会重新覆盖的。并且这一过程，也是平滑的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);