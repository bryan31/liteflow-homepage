(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1060:function(t,a,v){"use strict";v.r(a);var s=v(8),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"v2-9-4介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2-9-4介绍"}},[t._v("#")]),t._v(" v2.9.4介绍")]),t._v(" "),a("p",[t._v("新版本我们依旧依托于社区，一共完成了14个issue。")]),t._v(" "),a("p",[t._v("其中80%的issue来自于社区使用者。")]),t._v(" "),a("p",[t._v("2.9.4版本完全兼容2.9.3版本，可以无缝升级。")]),t._v(" "),a("h2",{attrs:{id:"新的脚本引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新的脚本引擎"}},[t._v("#")]),t._v(" 新的脚本引擎")]),t._v(" "),a("p",[t._v("鉴于之前社区有人反应LiteFlow提供的Javascript脚本引擎是基于jdk的，而JDK的Javascript引擎只支持到ES5规范，且不支持Java 17。")]),t._v(" "),a("p",[t._v("所以这次我们新增了一个Javascript引擎："),a("code",[t._v("GraalJs")]),t._v("。支持ES6规范，且支持Java 8~17。")]),t._v(" "),a("p",[t._v("当然老的引擎我们还是保留，如果是简单的js语法，你依旧可以用老的引擎。")]),t._v(" "),a("p",[t._v("关于这块详情请参考"),a("RouterLink",{attrs:{to:"/pages/bd70f7/"}},[t._v("选择脚本语言")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"提供规则验证接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供规则验证接口"}},[t._v("#")]),t._v(" 提供规则验证接口")]),t._v(" "),a("p",[t._v("虽然LiteFlow在启动时会去编译所有的规则，如果有错也会详细报出，但是在更改脚本前，使用者可能不太确信自己的规则写的有没有问题。所以在社区内，有人提出了希望增加一个验证规则的接口。")]),t._v(" "),a("p",[t._v("那这次我们也提供了相应的接口。详情请参考"),a("RouterLink",{attrs:{to:"/pages/395fd0/"}},[t._v("验证规则")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"zk和etcd支持局部刷新机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk和etcd支持局部刷新机制"}},[t._v("#")]),t._v(" Zk和Etcd支持局部刷新机制")]),t._v(" "),a("p",[t._v("如果你使用zk或者Etcd，你在zk和etcd里更改了规则，会自动推送到相应的应用进行无感自动刷新。")]),t._v(" "),a("p",[t._v("但是之前的实现模式是全部刷新，即不管你改了哪个规则，所有的规则刷新一遍。虽然LiteFlow刷新速度非常快速，但是这种实现模式还是不够优雅。")]),t._v(" "),a("p",[t._v("这次我们实现了局部刷新，即你改变哪个即刷新哪个。")]),t._v(" "),a("h2",{attrs:{id:"声明式组件的二次动态代理问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明式组件的二次动态代理问题"}},[t._v("#")]),t._v(" 声明式组件的二次动态代理问题")]),t._v(" "),a("p",[t._v("在社区内，我们也收到了许多使用声明式组件特性小伙伴们的反馈，在声明式组件上使用类似事务标注等需要动态代理的特性时，LiteFlow的声明式组件会报错。")]),t._v(" "),a("p",[t._v("经过核验，我们发现LiteFlow之前漏考虑了二次动态代理的问题，这次我们修复了。")]),t._v(" "),a("h2",{attrs:{id:"其他修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他修复"}},[t._v("#")]),t._v(" 其他修复")]),t._v(" "),a("p",[t._v("在新版本中，我们修复其他issue也有很多，包括脚本对元数据取值的bug，@ScriptBean标注所带来的一些小问题，脚本异常处理的优化等等。")])])}),[],!1,null,null,null);a.default=_.exports}}]);