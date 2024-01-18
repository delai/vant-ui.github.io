/*! For license information please see 5475.1ab1a242.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5475"],{41986:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var o=a("32507");a.es(o,t);var r=o.default},32507:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o.default}});var o=a("60082");a.es(o,t)},60082:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var o=a("90247");a("3712");var r=a("69298"),i=a("58716"),l=a("17650"),n=a("70656"),u=a("82626"),c={style:{width:"100%"},controls:""},s=["src"],v=(0,r.defineComponent)({__name:"index",setup(e){var t=(0,n.useTranslate)({"zh-CN":{closed:"\u5173\u95ED",showClose:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",showImages:"\u9884\u89C8\u56FE\u7247",beforeClose:"\u5F02\u6B65\u5173\u95ED",closeEvent:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",customConfig:"\u4F20\u5165\u914D\u7F6E\u9879",startPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",useComponent:"\u4F7F\u7528 ImagePreview \u7EC4\u4EF6",useImageSlot:"\u4F7F\u7528 image \u63D2\u69FD",index:e=>"\u7B2C".concat(e+1,"\u9875")},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",useComponent:"Use ImagePreview Component",useImageSlot:"Use image slot",index:e=>"Page: ".concat(e)}}),a=[(0,n.cdnURL)("apple-1.jpeg"),(0,n.cdnURL)("apple-2.jpeg"),(0,n.cdnURL)("apple-3.jpeg"),(0,n.cdnURL)("apple-4.jpeg")],v=["https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg"],d=(0,r.ref)(!1),f=(0,r.ref)(0),p=(0,r.ref)(!1),h=()=>(0,u.showToast)(t("closed")),m=()=>new Promise(e=>{setTimeout(()=>{e(!0)},1e3)}),g=e=>{f.value=e},w=()=>{d.value=!0},C=()=>{p.value=!0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.showImagePreview)((0,o._)({images:a},e));e.beforeClose&&setTimeout(()=>{null==t||t.close()},2e3)};return(e,o)=>{var n=(0,r.resolveComponent)("demo-block");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(n,{card:"",title:(0,r.unref)(t)("basicUsage")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("showImages"),onClick:o[0]||(o[0]=e=>P())},null,8,["title"])]),_:1},8,["title"]),(0,r.createVNode)(n,{card:"",title:(0,r.unref)(t)("customConfig")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("startPosition"),onClick:o[1]||(o[1]=e=>P({startPosition:1}))},null,8,["title"]),(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("showClose"),onClick:o[2]||(o[2]=e=>P({closeable:!0}))},null,8,["title"]),(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("closeEvent"),onClick:o[3]||(o[3]=e=>P({onClose:h}))},null,8,["title"])]),_:1},8,["title"]),(0,r.createVNode)(n,{card:"",title:(0,r.unref)(t)("beforeClose")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("beforeClose"),onClick:o[4]||(o[4]=e=>P({beforeClose:m}))},null,8,["title"])]),_:1},8,["title"]),(0,r.createVNode)(n,{card:"",title:(0,r.unref)(t)("useComponent")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("useComponent"),onClick:w},null,8,["title"]),(0,r.createVNode)((0,r.unref)(l.ImagePreview),{show:d.value,"onUpdate:show":o[5]||(o[5]=e=>d.value=e),images:a,onChange:g},{index:(0,r.withCtx)(()=>[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("index",f.value)),1)]),_:1},8,["show"])]),_:1},8,["title"]),(0,r.createVNode)(n,{card:"",title:(0,r.unref)(t)("useImageSlot")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(i.default),{"is-link":"",title:(0,r.unref)(t)("useImageSlot"),onClick:C},null,8,["title"]),(0,r.createVNode)((0,r.unref)(l.ImagePreview),{show:p.value,"onUpdate:show":o[6]||(o[6]=e=>p.value=e),images:v,"close-on-click-image":!1},{image:(0,r.withCtx)(e=>{var{src:t}=e;return[(0,r.createElementVNode)("video",c,[(0,r.createElementVNode)("source",{src:t},null,8,s)])]}),_:1},8,["show"])]),_:1},8,["title"])],64)}}})},58716:function(e,t,a){"use strict";a.r(t),a.d(t,{Cell:function(){return i},default:function(){return l}});var o=a("59633"),r=a("73880"),i=(0,o.withInstall)(r.default),l=i},3578:function(e,t,a){"use strict";a.r(t),a.d(t,{route:function(){return i},routeProps:function(){return r},useRoute:function(){return l}}),a("56821"),a("5780");var o=a("69298"),r={to:[String,Object],url:String,replace:Boolean};function i(e){var{to:t,url:a,replace:o,$router:r}=e;t&&r?r[o?"replace":"push"](t):a&&(o?location.replace(a):location.href=a)}function l(){var e=(0,o.getCurrentInstance)().proxy;return()=>i(e)}},4341:function(e,t,a){"use strict";a.r(t),a.d(t,{Loading:function(){return i},default:function(){return l}});var o=a("59633"),r=a("86512"),i=(0,o.withInstall)(r.default),l=i},7394:function(e,t,a){"use strict";a.r(t),a.d(t,{SwipeItem:function(){return i},default:function(){return l}});var o=a("59633"),r=a("65982"),i=(0,o.withInstall)(r.default),l=i},58847:function(e,t,a){"use strict";a.r(t),a.d(t,{Swipe:function(){return i},default:function(){return l}});var o=a("59633"),r=a("35678"),i=(0,o.withInstall)(r.default),l=i},73880:function(e,t,a){"use strict";a.r(t),a.d(t,{cellSharedProps:function(){return c},default:function(){return v}}),a("74366"),a("52400");var o=a("69298"),r=a("59633"),i=a("3578"),l=a("57739"),[n,u]=(0,r.createNamespace)("cell"),c={tag:(0,r.makeStringProp)("div"),icon:String,size:String,title:r.numericProp,value:r.numericProp,label:r.numericProp,center:Boolean,isLink:Boolean,border:r.truthProp,iconPrefix:String,valueClass:r.unknownProp,labelClass:r.unknownProp,titleClass:r.unknownProp,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},s=(0,r.extend)({},c,i.routeProps),v=(0,o.defineComponent)({name:n,props:s,setup(e,t){var{slots:a}=t,n=(0,i.useRoute)(),c=()=>{if(a.label||(0,r.isDef)(e.label))return(0,o.createVNode)("div",{class:[u("label"),e.labelClass]},[a.label?a.label():e.label])},s=()=>{if(a.title||(0,r.isDef)(e.title)){var t,i=null===(t=a.title)||void 0===t?void 0:t.call(a);if(!Array.isArray(i)||0!==i.length)return(0,o.createVNode)("div",{class:[u("title"),e.titleClass],style:e.titleStyle},[i||(0,o.createVNode)("span",null,[e.title]),c()])}},v=()=>{var t=a.value||a.default;if(t||(0,r.isDef)(e.value))return(0,o.createVNode)("div",{class:[u("value"),e.valueClass]},[t?t():(0,o.createVNode)("span",null,[e.value])])},d=()=>a.icon?a.icon():e.icon?(0,o.createVNode)(l.Icon,{name:e.icon,class:u("left-icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{if(a["right-icon"])return a["right-icon"]();if(e.isLink){var t=e.arrowDirection&&"right"!==e.arrowDirection?"arrow-".concat(e.arrowDirection):"arrow";return(0,o.createVNode)(l.Icon,{name:t,class:u("right-icon")},null)}};return()=>{var t,{tag:r,size:i,center:l,border:c,isLink:p,required:h}=e,m=null!==(t=e.clickable)&&void 0!==t?t:p,g={center:l,required:!!h,clickable:m,borderless:!c};return i&&(g[i]=!!i),(0,o.createVNode)(r,{class:u(g),role:m?"button":void 0,tabindex:m?0:void 0,onClick:n},{default:()=>{var e;return[d(),s(),v(),f(),null===(e=a.extra)||void 0===e?void 0:e.call(a)]}})}}})},86512:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}}),a("74366"),a("52400"),a("6868"),a("4331");var o=a("69298"),r=a("59633"),[i,l]=(0,r.createNamespace)("loading"),n=Array(12).fill(null).map((e,t)=>(0,o.createVNode)("i",{class:l("line",String(t+1))},null)),u=(0,o.createVNode)("svg",{class:l("circular"),viewBox:"25 25 50 50"},[(0,o.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),c={size:r.numericProp,type:(0,r.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:r.numericProp,textColor:String},s=(0,o.defineComponent)({name:i,props:c,setup(e,t){var{slots:a}=t,i=(0,o.computed)(()=>(0,r.extend)({color:e.color},(0,r.getSizeStyle)(e.size))),c=()=>{var t="spinner"===e.type?n:u;return(0,o.createVNode)("span",{class:l("spinner",e.type),style:i.value},[a.icon?a.icon():t])},s=()=>{if(a.default){var t;return(0,o.createVNode)("span",{class:l("text"),style:{fontSize:(0,r.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[a.default()])}};return()=>{var{type:t,vertical:a}=e;return(0,o.createVNode)("div",{class:l([t,{vertical:a}]),"aria-live":"polite","aria-busy":!0},[c(),s()])}}})},65982:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}}),a("74366"),a("52400");var o=a("69298"),r=a("59633"),i=a("35678"),l=a("22300"),n=a("29067"),[u,c]=(0,r.createNamespace)("swipe-item"),s=(0,o.defineComponent)({name:u,setup(e,t){var a,{slots:r}=t,u=(0,o.reactive)({offset:0,inited:!1,mounted:!1}),{parent:s,index:v}=(0,l.useParent)(i.SWIPE_KEY);if(s){var d=(0,o.computed)(()=>{var e={},{vertical:t}=s.props;return s.size.value&&(e[t?"height":"width"]="".concat(s.size.value,"px")),u.offset&&(e.transform="translate".concat(t?"Y":"X","(").concat(u.offset,"px)")),e}),f=(0,o.computed)(()=>{var{loop:e,lazyRender:t}=s.props;if(!t||a)return!0;if(!u.mounted)return!1;var o=s.activeIndicator.value,r=s.count.value-1;return a=v.value===o||v.value===(0===o&&e?r:o-1)||v.value===(o===r&&e?0:o+1)});return(0,o.onMounted)(()=>{(0,o.nextTick)(()=>{u.mounted=!0})}),(0,n.useExpose)({setOffset:e=>{u.offset=e}}),()=>{var e;return(0,o.createVNode)("div",{class:c(),style:d.value},[f.value?null===(e=r.default)||void 0===e?void 0:e.call(r):null])}}}})},35678:function(e,t,a){"use strict";a.r(t),a.d(t,{SWIPE_KEY:function(){return d},default:function(){return f}}),a("74366"),a("52400"),a("95818"),a("76959"),a("11057"),a("64667"),a("6868"),a("4331");var o=a("69298"),r=a("59633"),i=a("22300"),l=a("10976"),n=a("29067"),u=a("26270"),[c,s]=(0,r.createNamespace)("swipe"),v={loop:r.truthProp,width:r.numericProp,height:r.numericProp,vertical:Boolean,autoplay:(0,r.makeNumericProp)(0),duration:(0,r.makeNumericProp)(500),touchable:r.truthProp,lazyRender:Boolean,initialSwipe:(0,r.makeNumericProp)(0),indicatorColor:String,showIndicators:r.truthProp,stopPropagation:r.truthProp},d=Symbol(c),f=(0,o.defineComponent)({name:c,props:v,emits:["change","dragStart","dragEnd"],setup(e,t){var a,c,{emit:v,slots:f}=t,p=(0,o.ref)(),h=(0,o.ref)(),m=(0,o.reactive)({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),g=!1,w=(0,l.useTouch)(),{children:C,linkChildren:P}=(0,i.useChildren)(d),N=(0,o.computed)(()=>C.length),b=(0,o.computed)(()=>m[e.vertical?"height":"width"]),S=(0,o.computed)(()=>e.vertical?w.deltaY.value:w.deltaX.value),x=(0,o.computed)(()=>m.rect?(e.vertical?m.rect.height:m.rect.width)-b.value*N.value:0),k=(0,o.computed)(()=>b.value?Math.ceil(Math.abs(x.value)/b.value):N.value),V=(0,o.computed)(()=>N.value*b.value),y=(0,o.computed)(()=>(m.active+N.value)%N.value),I=(0,o.computed)(()=>{var t=e.vertical?"vertical":"horizontal";return w.direction.value===t}),E=(0,o.computed)(()=>{var t={transitionDuration:"".concat(m.swiping?0:e.duration,"ms"),transform:"translate".concat(e.vertical?"Y":"X","(").concat(+m.offset.toFixed(2),"px)")};if(b.value){var a=e.vertical?"height":"width",o=e.vertical?"width":"height";t[a]="".concat(V.value,"px"),t[o]=e[o]?"".concat(e[o],"px"):""}return t}),T=t=>{var{active:a}=m;if(t)return e.loop?(0,r.clamp)(a+t,-1,N.value):(0,r.clamp)(a+t,0,k.value);return a},B=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=t*b.value;!e.loop&&(o=Math.min(o,-x.value));var i=a-o;return!e.loop&&(i=(0,r.clamp)(i,x.value,0)),i},D=t=>{var{pace:a=0,offset:o=0,emitChange:r}=t;if(!(N.value<=1)){var{active:i}=m,l=T(a),n=B(l,o);if(e.loop){if(C[0]&&n!==x.value){var u=n<x.value;C[0].setOffset(u?V.value:0)}if(C[N.value-1]&&0!==n){var c=n>0;C[N.value-1].setOffset(c?-V.value:0)}}m.active=l,m.offset=n,r&&l!==i&&v("change",y.value)}},z=()=>{m.swiping=!0,m.active<=-1?D({pace:N.value}):m.active>=N.value&&D({pace:-N.value})},R=()=>{z(),w.reset(),(0,i.doubleRaf)(()=>{m.swiping=!1,D({pace:1,emitChange:!0})})},U=()=>clearTimeout(a),_=()=>{U(),+e.autoplay>0&&N.value>1&&(a=setTimeout(()=>{R(),_()},+e.autoplay))},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:+e.initialSwipe;if(p.value){var a=()=>{if(!(0,r.isHidden)(p)){var a,o,i={width:p.value.offsetWidth,height:p.value.offsetHeight};m.rect=i,m.width=+(null!==(a=e.width)&&void 0!==a?a:i.width),m.height=+(null!==(o=e.height)&&void 0!==o?o:i.height)}N.value&&-1===(t=Math.min(N.value-1,t))&&(t=N.value-1),m.active=t,m.swiping=!0,m.offset=B(t),C.forEach(e=>{e.setOffset(0)}),_()};(0,r.isHidden)(p)?(0,o.nextTick)().then(a):a()}},L=()=>M(m.active),Y=t=>{e.touchable&&!(t.touches.length>1)&&(w.start(t),g=!1,c=Date.now(),U(),z())},j=()=>{if(e.touchable&&m.swiping){var t=Date.now()-c;if((Math.abs(S.value/t)>.25||Math.abs(S.value)>b.value/2)&&I.value){var a=e.vertical?w.offsetY.value:w.offsetX.value,o=0;D({pace:o=e.loop?a>0?S.value>0?-1:1:0:-Math[S.value>0?"ceil":"floor"](S.value/b.value),emitChange:!0})}else S.value&&D({pace:0});g=!1,m.swiping=!1,v("dragEnd",{index:y.value}),_()}},A=(t,a)=>{var r=a===y.value,i=r?{backgroundColor:e.indicatorColor}:void 0;return(0,o.createVNode)("i",{style:i,class:s("indicator",{active:r})},null)},O=()=>f.indicator?f.indicator({active:y.value,total:N.value}):e.showIndicators&&N.value>1?(0,o.createVNode)("div",{class:s("indicators",{vertical:e.vertical})},[Array(N.value).fill("").map(A)]):void 0;return(0,n.useExpose)({prev:()=>{z(),w.reset(),(0,i.doubleRaf)(()=>{m.swiping=!1,D({pace:-1,emitChange:!0})})},next:R,state:m,resize:L,swipeTo:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};z(),w.reset(),(0,i.doubleRaf)(()=>{var o;o=e.loop&&t===N.value?0===m.active?0:t:t%N.value,a.immediate?(0,i.doubleRaf)(()=>{m.swiping=!1}):m.swiping=!1,D({pace:o-m.active,emitChange:!0})})}}),P({size:b,props:e,count:N,activeIndicator:y}),(0,o.watch)(()=>e.initialSwipe,e=>M(+e)),(0,o.watch)(N,()=>M(m.active)),(0,o.watch)(()=>e.autoplay,_),(0,o.watch)([r.windowWidth,r.windowHeight,()=>e.width,()=>e.height],L),(0,o.watch)((0,i.usePageVisibility)(),e=>{"visible"===e?_():U()}),(0,o.onMounted)(M),(0,o.onActivated)(()=>M(m.active)),(0,u.onPopupReopen)(()=>M(m.active)),(0,o.onDeactivated)(U),(0,o.onBeforeUnmount)(U),(0,i.useEventListener)("touchmove",t=>{e.touchable&&m.swiping&&(w.move(t),I.value&&!(!e.loop&&(0===m.active&&S.value>0||m.active===N.value-1&&S.value<0))&&((0,r.preventDefault)(t,e.stopPropagation),D({offset:S.value}),!g&&(v("dragStart",{index:y.value}),g=!0)))},{target:h}),()=>{var t;return(0,o.createVNode)("div",{ref:p,class:s()},[(0,o.createVNode)("div",{ref:h,style:E.value,class:s("track",{vertical:e.vertical}),onTouchstartPassive:Y,onTouchend:j,onTouchcancel:j},[null===(t=f.default)||void 0===t?void 0:t.call(f)]),O()])}}})}}]);