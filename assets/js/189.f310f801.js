(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{651:function(v,_,t){"use strict";t.r(_);var o=t(8),e=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("在前面几个章节中，我们介绍了LiteFlow是用EL表达式来驱动"),_("code",[v._v("组件")]),v._v("执行顺序的。")]),v._v(" "),_("p",[v._v("可见"),_("code",[v._v("组件")]),v._v("是LiteFlow的最小逻辑执行单元。")]),v._v(" "),_("p",[v._v("而"),_("code",[v._v("组件")]),v._v("在前面几章的介绍中，都是需要你自己去定义类的。而定义类通常用于相对固定的逻辑，EL表达式能够即时调整，但是定义成类的组件中的逻辑还是要重启系统才能调整。")]),v._v(" "),_("p",[v._v("但是在实际业务场景中，有的场景需要实时的去调整小部分逻辑，那怎么办呢。")]),v._v(" "),_("p",[v._v("这就需要LiteFlow提供的"),_("code",[v._v("脚本组件")]),v._v("特性了。")]),v._v(" "),_("p",[v._v("脚本组件，顾名思义就是不再需要你去用类去定义组件了，而是用脚本来定义组件。而脚本也是可以被即时调整的。")]),v._v(" "),_("p",[v._v("脚本组件也是LiteFlow框架中非常重要且极具有特色的一个特性，利用EL+脚本组件，你可以做出一套极其灵活的系统。无论是执行顺序，还是关键逻辑，均可进行热刷新。")]),v._v(" "),_("p",[v._v("LiteFlow在启动时就对脚本进行了预编译，虽然脚本的执行性能肯定比不过原生java，但是性能不会差太多，因为脚本方便且灵活可以热刷，这是java类所做不到的。")]),v._v(" "),_("p",[v._v("LiteFlow中目前支持的脚本语言多达7种。下面一小章会大致说下每一种脚本语言该如何运用。")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),_("p",[v._v("虽然脚本组件拥有可热刷新的特性，但是依旧不推荐把一个系统里所有的逻辑都写成脚本组件，因为并不是所有的逻辑都需要热修改。")]),v._v(" "),_("p",[v._v("推荐把需要灵活经常变的逻辑写成脚本组件，固定不变的逻辑还是用java类来写。"),_("code",[v._v("java类+脚本组件+EL")]),v._v("的组合是官方最为推荐的方式。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);