(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{903:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"最基本的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最基本的例子"}},[t._v("#")]),t._v(" 最基本的例子")]),t._v(" "),a("p",[t._v("如果你要并行执行a,b,c三个组件，你可以用"),a("code",[t._v("WHEN")]),t._v("关键字，需要注意的是，"),a("code",[t._v("WHEN")]),t._v("必须大写。")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    WHEN(a, b, c);\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"和串行嵌套起来-一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和串行嵌套起来-一"}},[t._v("#")]),t._v(" 和串行嵌套起来(一)")]),t._v(" "),a("p",[t._v("接下来，让我们把"),a("code",[t._v("THEN")]),t._v("和"),a("code",[t._v("WHEN")]),t._v("结合起来用，看一个示例：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    THEN(\n        a,\n        WHEN(b, c, d),\n        e\n    );\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("图示")]),t._v(" "),a("img",{staticClass:"no-zoom",staticStyle:{zoom:"80%"},attrs:{src:t.$withBase("/img/flow_example/e2.svg")}})]),t._v(" "),a("p",[t._v("在以上示例里，b,c,d默认并行都执行完毕后，才会执行e。")]),t._v(" "),a("h2",{attrs:{id:"和串行嵌套起来-二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和串行嵌套起来-二"}},[t._v("#")]),t._v(" 和串行嵌套起来(二)")]),t._v(" "),a("p",[t._v("上面的示例应该很好理解吧，那么再看一个示例：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    THEN(\n        a,\n        WHEN(b, THEN(c, d)),\n        e\n    );\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("图示")]),t._v(" "),a("img",{staticClass:"no-zoom",staticStyle:{zoom:"80%"},attrs:{src:t.$withBase("/img/flow_example/e3.svg")}})]),t._v(" "),a("h2",{attrs:{id:"忽略错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忽略错误"}},[t._v("#")]),t._v(" 忽略错误")]),t._v(" "),a("p",[a("code",[t._v("WHEN")]),t._v("关键字提供了一个子关键字"),a("code",[t._v("ignoreError")]),t._v("(默认为false)来提供忽略错误的特性，用法如下：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    THEN(\n        a,\n        WHEN(b, c, d).ignoreError(true),\n        e\n    );\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("图示")]),t._v(" "),a("img",{staticClass:"no-zoom",staticStyle:{zoom:"80%"},attrs:{src:t.$withBase("/img/flow_example/e2.svg")}})]),t._v(" "),a("p",[t._v("以上假设b,c,d中任一一个节点有异常，那么最终e仍旧会被执行。")]),t._v(" "),a("h2",{attrs:{id:"任一节点先执行完则忽略其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任一节点先执行完则忽略其他"}},[t._v("#")]),t._v(" 任一节点先执行完则忽略其他")]),t._v(" "),a("p",[a("code",[t._v("WHEN")]),t._v("关键字提供了一个子关键字"),a("code",[t._v("any")]),t._v("(默认为false)用来提供并行流程中，任一条分支先执行完即忽略其他分支，继续执行的特性。用法如下：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    THEN(\n        a,\n        WHEN(b, THEN(c, d), e).any(true),\n        f\n    );\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("图示")]),t._v(" "),a("img",{staticClass:"no-zoom",staticStyle:{zoom:"80%"},attrs:{src:t.$withBase("/img/flow_example/e4.svg")}})]),t._v(" "),a("p",[t._v("以上流程，假设e节点先执行完，那么不管其他分支是否执行完，会立马执行节点f。")]),t._v(" "),a("h2",{attrs:{id:"关于组的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于组的概念"}},[t._v("#")]),t._v(" 关于组的概念")]),t._v(" "),a("p",[t._v("在以前的版本中，并行编排有组(group)的概念，而在2.8.X版本中，我们去除了组的概念。")]),t._v(" "),a("p",[t._v("用EL表达式，其实你写2个不同的WHEN就是2个组。比如：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    THEN(\n        WHEN(a, b, c, d)\n    );\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("以上abcd都在同一个并行组中。")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    THEN(\n        WHEN(a, b),\n        WHEN(c, d)\n    );\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("以上例子，ab是一个并行组，而cd是另一个并行组。")])])}),[],!1,null,null,null);a.default=e.exports}}]);