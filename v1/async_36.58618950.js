(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{158:function(t,i,n){"use strict";var e=n(79);n.n(e).a},159:function(t,i,n){(t.exports=n(12)(!1)).push([t.i,".demo-style .van-ellipsis {\n  font-size: 13px;\n  margin-left: 15px;\n  max-width: 250px;\n}\n.demo-style .van-hairline--top {\n  height: 30px;\n  background-color: #fff;\n}\n.demo-style .van-hairline--top::after {\n  top: 5px;\n}\n.demo-style .demo-animate-block {\n  top: 50%;\n  left: 50%;\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  border-radius: 3px;\n  margin: -50px 0 0 -50px;\n  background-color: #1989fa;\n}\n",""])},187:function(t,i,n){"use strict";n.r(i);var e={i18n:{"zh-CN":{hairline:"1px 边框",ellipsis:"文字省略",animation:"动画",toggle:"切换动画",text:"这是一段宽度限制 250px 的文字，后面的内容会省略"},"en-US":{hairline:"Hairline",ellipsis:"Text Ellipsis",animation:"Animation",toggle:"Switch animation",text:"This is a paragraph of 250px width limit, the back will be omitted."}},data:function(){return{show:!1,transitionName:""}},methods:{animate:function(t){var i=this;this.show=!0,this.transitionName=t,setTimeout(function(){i.show=!1},500)}}},a=(n(158),n(7)),l=Object(a.a)(e,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("ellipsis")}},[n("div",{staticClass:"van-ellipsis"},[t._v(t._s(t.$t("text")))])]),n("demo-block",{attrs:{title:t.$t("hairline")}},[n("div",{staticClass:"van-hairline--top"})]),n("demo-block",{attrs:{title:t.$t("animation")}},[n("van-cell",{attrs:{"is-link":"",title:"Fade"},on:{click:function(i){return t.animate("van-fade")}}}),n("van-cell",{attrs:{"is-link":"",title:"Slide Up"},on:{click:function(i){return t.animate("van-slide-up")}}}),n("van-cell",{attrs:{"is-link":"",title:"Slide Down"},on:{click:function(i){return t.animate("van-slide-down")}}}),n("van-cell",{attrs:{"is-link":"",title:"Slide Left"},on:{click:function(i){return t.animate("van-slide-left")}}}),n("van-cell",{attrs:{"is-link":"",title:"Slide Right"},on:{click:function(i){return t.animate("van-slide-right")}}})],1),n("transition",{attrs:{name:t.transitionName}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"demo-animate-block"})])],1)},[],!1,null,null,null);i.default=l.exports},79:function(t,i,n){var e=n(159);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(13)(e,a);e.locals&&(t.exports=e.locals)}}]);