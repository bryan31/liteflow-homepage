(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{1066:function(t,o,l){"use strict";l.r(o);var s=l(8),v=Object(s.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("有使用者肯定发现了，在组件中通过this关键字，可以调用到"),o("code",[t._v("this.getSlot()")]),t._v(" 这个方法，返回一个slot。")]),t._v(" "),o("p",[t._v("那这个Slot是什么呢？在框架中起到什么样的作用？")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("Slot对象是上下文的一个包装类。每一个请求，都会申请一个新的Slot对象，同时一个请求结束的时候，也会回收这个slot对象。")]),t._v(" "),o("p",[t._v("LiteFlow框架声称的对于每个请求，上下文之间是隔离的，准确的来说，是Slot之间是隔离的。因为Slot隔离，所以上下文也隔离。上下文是Slot中的一个子项。")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("上下文是用来存放组件中产生的业务数据的，而它的包装类Slot里，则存放着一些框架对于这次请求中的元数据。大多数情况下，用户是不需要关心的。")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("大部分情况下，用户只要直接获得上下文就可以了。")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("值得一提的是，slot的数量可能有些使用者会以为只有1024个，从而认为并发如果超过1024，slot就会分配不过来了。其实不然，LiteFlow框架从很早开始就加入了slot自动扩容的机制，当slot用完的时候，slot就会自动扩容。扩容因子为0.75，也就是说，每次扩容之后的数量为扩容之前的1.75倍。其实使用者是完全不用担心并发大，slot分配不过来的问题。")])])}),[],!1,null,null,null);o.default=v.exports}}]);