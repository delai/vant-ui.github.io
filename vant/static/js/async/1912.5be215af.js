/*! For license information please see 1912.5be215af.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1912"],{92800:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r("30580");r.es(n,t),r("99822");var o=n.default},30580:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n.default}});var n=r("59571");r.es(n,t)},59571:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r("36840"),o=r("38919"),a=r("54991"),i=r("70656"),u=(0,n.createElementVNode)("div",{style:{height:"200px"}},null,-1),c=(0,n.defineComponent)({__name:"index",setup(e){var t=(0,i.useTranslate)({"zh-CN":{offsetTop:"\u5438\u9876\u8DDD\u79BB",offsetBottom:"\u5438\u5E95\u8DDD\u79BB",setContainer:"\u6307\u5B9A\u5BB9\u5668"},"en-US":{offsetTop:"Offset Top",offsetBottom:"Offset Bottom",setContainer:"Set Container"}}),r=(0,n.ref)();return(e,i)=>{var c=(0,n.resolveComponent)("demo-block");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(c,{title:(0,n.unref)(t)("basicUsage")},{default:(0,n.withCtx)(()=>[(0,n.createVNode)((0,n.unref)(o.default),null,{default:(0,n.withCtx)(()=>[(0,n.createVNode)((0,n.unref)(a.default),{type:"primary",style:{"margin-left":"15px"}},{default:(0,n.withCtx)(()=>[(0,n.createTextVNode)((0,n.toDisplayString)((0,n.unref)(t)("basicUsage")),1)]),_:1})]),_:1})]),_:1},8,["title"]),(0,n.createVNode)(c,{title:(0,n.unref)(t)("offsetTop")},{default:(0,n.withCtx)(()=>[(0,n.createVNode)((0,n.unref)(o.default),{"offset-top":50},{default:(0,n.withCtx)(()=>[(0,n.createVNode)((0,n.unref)(a.default),{type:"primary",style:{"margin-left":"115px"}},{default:(0,n.withCtx)(()=>[(0,n.createTextVNode)((0,n.toDisplayString)((0,n.unref)(t)("offsetTop")),1)]),_:1})]),_:1})]),_:1},8,["title"]),(0,n.createVNode)(c,{title:(0,n.unref)(t)("setContainer")},{default:(0,n.withCtx)(()=>[(0,n.createElementVNode)("div",{ref_key:"container",ref:r,style:{height:"150px","background-color":"var(--van-background-2)"}},[(0,n.createVNode)((0,n.unref)(o.default),{container:r.value},{default:(0,n.withCtx)(()=>[(0,n.createVNode)((0,n.unref)(a.default),{type:"warning",style:{"margin-left":"215px"}},{default:(0,n.withCtx)(()=>[(0,n.createTextVNode)((0,n.toDisplayString)((0,n.unref)(t)("setContainer")),1)]),_:1})]),_:1},8,["container"])],512)]),_:1},8,["title"]),(0,n.createVNode)(c,{title:(0,n.unref)(t)("offsetBottom")},{default:(0,n.withCtx)(()=>[u,(0,n.createVNode)((0,n.unref)(o.default),{"offset-bottom":50,position:"bottom"},{default:(0,n.withCtx)(()=>[(0,n.createVNode)((0,n.unref)(a.default),{type:"primary",style:{"margin-left":"15px"}},{default:(0,n.withCtx)(()=>[(0,n.createTextVNode)((0,n.toDisplayString)((0,n.unref)(t)("offsetBottom")),1)]),_:1})]),_:1})]),_:1},8,["title"])],64)}}})},3042:function(e,t,r){"use strict";r.r(t),r.d(t,{Badge:function(){return a},default:function(){return i}});var n=r("59633"),o=r("67685"),a=(0,n.withInstall)(o.default),i=a},54991:function(e,t,r){"use strict";r.r(t),r.d(t,{Button:function(){return a},default:function(){return i}});var n=r("59633"),o=r("55396"),a=(0,n.withInstall)(o.default),i=a},15057:function(e,t,r){"use strict";r.r(t),r.d(t,{useGlobalZIndex:function(){return o},setGlobalZIndex:function(){return a}});var n=2e3,o=()=>++n,a=e=>{n=e}},3578:function(e,t,r){"use strict";r.r(t),r.d(t,{routeProps:function(){return o},route:function(){return a},useRoute:function(){return i}}),r("56821"),r("5780");var n=r("36840"),o={to:[String,Object],url:String,replace:Boolean};function a(e){var{to:t,url:r,replace:n,$router:o}=e;t&&o?o[n?"replace":"push"](t):r&&(n?location.replace(r):location.href=r)}function i(){var e=(0,n.getCurrentInstance)().proxy;return()=>a(e)}},12632:function(e,t,r){"use strict";r.r(t),r.d(t,{useVisibilityChange:function(){return i}});var n=r("59633"),o=r("36840"),a=r("22300");function i(e,t){if(n.inBrowser&&window.IntersectionObserver){var r=new IntersectionObserver(e=>{t(e[0].intersectionRatio>0)},{root:document.body}),i=()=>{e.value&&r.unobserve(e.value)};(0,o.onDeactivated)(i),(0,o.onBeforeUnmount)(i),(0,a.onMountedOrActivated)(()=>{e.value&&r.observe(e.value)})}}},57739:function(e,t,r){"use strict";r.r(t),r.d(t,{Icon:function(){return a},default:function(){return i}});var n=r("59633"),o=r("49834"),a=(0,n.withInstall)(o.default),i=a},4341:function(e,t,r){"use strict";r.r(t),r.d(t,{Loading:function(){return a},default:function(){return i}});var n=r("59633"),o=r("96134"),a=(0,n.withInstall)(o.default),i=a},38919:function(e,t,r){"use strict";r.r(t),r.d(t,{Sticky:function(){return a},default:function(){return i}});var n=r("59633"),o=r("28413"),a=(0,n.withInstall)(o.default),i=a},67685:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}}),r("74366"),r("52400"),r("56821"),r("5780"),r("22584");var n=r("36840"),o=r("59633"),[a,i]=(0,o.createNamespace)("badge"),u={dot:Boolean,max:o.numericProp,tag:(0,o.makeStringProp)("div"),color:String,offset:Array,content:o.numericProp,showZero:o.truthProp,position:(0,o.makeStringProp)("top-right")},c=(0,n.defineComponent)({name:a,props:u,setup(e,t){var{slots:r}=t,a=()=>{if(r.content)return!0;var{content:t,showZero:n}=e;return(0,o.isDef)(t)&&""!==t&&(n||0!==t&&"0"!==t)},u=()=>{var{dot:t,max:n,content:i}=e;if(!t&&a())return r.content?r.content():(0,o.isDef)(n)&&(0,o.isNumeric)(i)&&+i>+n?"".concat(n,"+"):i},c=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),l=(0,n.computed)(()=>{var t={background:e.color};if(e.offset){var[n,a]=e.offset,{position:i}=e,[u,l]=i.split("-");r.default?("number"==typeof a?t[u]=(0,o.addUnit)("top"===u?a:-a):t[u]="top"===u?(0,o.addUnit)(a):c(a),"number"==typeof n?t[l]=(0,o.addUnit)("left"===l?n:-n):t[l]="left"===l?(0,o.addUnit)(n):c(n)):(t.marginTop=(0,o.addUnit)(a),t.marginLeft=(0,o.addUnit)(n))}return t}),d=()=>{if(a()||e.dot)return(0,n.createVNode)("div",{class:i([e.position,{dot:e.dot,fixed:!!r.default}]),style:l.value},[u()])};return()=>{if(r.default){var{tag:t}=e;return(0,n.createVNode)(t,{class:i("wrapper")},{default:()=>[r.default(),d()]})}return d()}}})},55396:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("74366"),r("52400"),r("20964");var n=r("36840"),o=r("59633"),a=r("3578"),i=r("57739"),u=r("4341"),[c,l]=(0,o.createNamespace)("button"),d=(0,o.extend)({},a.routeProps,{tag:(0,o.makeStringProp)("button"),text:String,icon:String,type:(0,o.makeStringProp)("default"),size:(0,o.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,o.makeStringProp)("button"),loadingSize:o.numericProp,loadingText:String,loadingType:String,iconPosition:(0,o.makeStringProp)("left")}),s=(0,n.defineComponent)({name:c,props:d,emits:["click"],setup(e,t){var{emit:r,slots:c}=t,d=(0,a.useRoute)(),s=()=>c.loading?c.loading():(0,n.createVNode)(u.Loading,{size:e.loadingSize,type:e.loadingType,class:l("loading")},null),f=()=>e.loading?s():c.icon?(0,n.createVNode)("div",{class:l("icon")},[c.icon()]):e.icon?(0,n.createVNode)(i.Icon,{name:e.icon,class:l("icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{var t;if(t=e.loading?e.loadingText:c.default?c.default():e.text)return(0,n.createVNode)("span",{class:l("text")},[t])},v=()=>{var{color:t,plain:r}=e;if(t){var n={color:r?t:"white"};return!r&&(n.background=t),t.includes("gradient")?n.border=0:n.borderColor=t,n}},m=t=>{e.loading?(0,o.preventDefault)(t):!e.disabled&&(r("click",t),d())};return()=>{var{tag:t,type:r,size:a,block:i,round:u,plain:c,square:d,loading:s,disabled:g,hairline:h,nativeType:x,iconPosition:b}=e,y=[l([r,a,{plain:c,block:i,round:u,square:d,loading:s,disabled:g,hairline:h}]),{[o.BORDER_SURROUND]:h}];return(0,n.createVNode)(t,{type:x,class:y,style:v(),disabled:g,onClick:m},{default:()=>[(0,n.createVNode)("div",{class:l("content")},["left"===b&&f(),p(),"right"===b&&f()])]})}}})},77247:function(e,t,r){"use strict";r.r(t),r.d(t,{CONFIG_PROVIDER_KEY:function(){return c},default:function(){return s}}),r("74366"),r("52400"),r("95818"),r("56821"),r("5780"),r("76959"),r("11057"),r("64667");var n=r("36840"),o=r("59633"),a=r("15057"),[i,u]=(0,o.createNamespace)("config-provider"),c=Symbol(i),l={tag:(0,o.makeStringProp)("div"),theme:(0,o.makeStringProp)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,o.makeStringProp)("local"),iconPrefix:String};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(r=>{e[r]!==t[r]&&document.documentElement.style.setProperty(r,e[r])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}var s=(0,n.defineComponent)({name:i,props:l,setup(e,t){var{slots:r}=t,i=(0,n.computed)(()=>{var t,r;return t=(0,o.extend)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),r={},Object.keys(t).forEach(e=>{var n=(0,o.kebabCase)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");r["--van-".concat(n)]=t[e]}),r});if(o.inBrowser){var l=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,n.watch)(()=>e.theme,(e,t)=>{t&&s(t),l()},{immediate:!0}),(0,n.onActivated)(l),(0,n.onDeactivated)(s),(0,n.onBeforeUnmount)(s),(0,n.watch)(i,(t,r)=>{"global"===e.themeVarsScope&&d(t,r)}),(0,n.watch)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&d({},i.value),"global"===e&&d(i.value,{})}),"global"===e.themeVarsScope&&d(i.value,{})}return(0,n.provide)(c,e),(0,n.watchEffect)(()=>{void 0!==e.zIndex&&(0,a.setGlobalZIndex)(e.zIndex)}),()=>(0,n.createVNode)(e.tag,{class:u(),style:"local"===e.themeVarsScope?i.value:void 0},{default:()=>{var e;return[null===(e=r.default)||void 0===e?void 0:e.call(r)]}})}})},49834:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("74366"),r("52400"),r("20964");var n=r("36840"),o=r("59633"),a=r("3042"),i=r("77247"),[u,c]=(0,o.createNamespace)("icon"),l=e=>null==e?void 0:e.includes("/"),d={dot:Boolean,tag:(0,o.makeStringProp)("i"),name:String,size:o.numericProp,badge:o.numericProp,color:String,badgeProps:Object,classPrefix:String},s=(0,n.defineComponent)({name:u,props:d,setup(e,t){var{slots:r}=t,u=(0,n.inject)(i.CONFIG_PROVIDER_KEY,null),d=(0,n.computed)(()=>e.classPrefix||(null==u?void 0:u.iconPrefix)||c());return()=>{var{tag:t,dot:i,name:u,size:s,badge:f,color:p}=e,v=l(u);return(0,n.createVNode)(a.Badge,(0,n.mergeProps)({dot:i,tag:t,class:[d.value,v?"":"".concat(d.value,"-").concat(u)],style:{color:p,fontSize:(0,o.addUnit)(s)},content:f},e.badgeProps),{default:()=>{var e;return[null===(e=r.default)||void 0===e?void 0:e.call(r),v&&(0,n.createVNode)("img",{class:c("image"),src:u},null)]}})}}})},96134:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r("74366"),r("52400"),r("6868"),r("4331");var n=r("36840"),o=r("59633"),[a,i]=(0,o.createNamespace)("loading"),u=Array(12).fill(null).map((e,t)=>(0,n.createVNode)("i",{class:i("line",String(t+1))},null)),c=(0,n.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,n.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),l={size:o.numericProp,type:(0,o.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:o.numericProp,textColor:String},d=(0,n.defineComponent)({name:a,props:l,setup(e,t){var{slots:r}=t,a=(0,n.computed)(()=>(0,o.extend)({color:e.color},(0,o.getSizeStyle)(e.size))),l=()=>{var t="spinner"===e.type?u:c;return(0,n.createVNode)("span",{class:i("spinner",e.type),style:a.value},[r.icon?r.icon():t])},d=()=>{if(r.default){var t;return(0,n.createVNode)("span",{class:i("text"),style:{fontSize:(0,o.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[r.default()])}};return()=>{var{type:t,vertical:r}=e;return(0,n.createVNode)("div",{class:i([t,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[l(),d()])}}})},28413:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r("74366"),r("52400");var n=r("36840"),o=r("59633"),a=r("22300"),i=r("12632"),[u,c]=(0,o.createNamespace)("sticky"),l={zIndex:o.numericProp,position:(0,o.makeStringProp)("top"),container:Object,offsetTop:(0,o.makeNumericProp)(0),offsetBottom:(0,o.makeNumericProp)(0)},d=(0,n.defineComponent)({name:u,props:l,emits:["scroll","change"],setup(e,t){var{emit:r,slots:u}=t,l=(0,n.ref)(),d=(0,a.useScrollParent)(l),s=(0,n.reactive)({fixed:!1,width:0,height:0,transform:0}),f=(0,n.ref)(!1),p=(0,n.computed)(()=>(0,o.unitToPx)("top"===e.position?e.offsetTop:e.offsetBottom)),v=(0,n.computed)(()=>{if(!f.value){var{fixed:e,height:t,width:r}=s;if(e)return{width:"".concat(r,"px"),height:"".concat(t,"px")}}}),m=(0,n.computed)(()=>{if(s.fixed&&!f.value){var t=(0,o.extend)((0,o.getZIndexStyle)(e.zIndex),{width:"".concat(s.width,"px"),height:"".concat(s.height,"px"),[e.position]:"".concat(p.value,"px")});return s.transform&&(t.transform="translate3d(0, ".concat(s.transform,"px, 0)")),t}}),g=e=>r("scroll",{scrollTop:e,isFixed:s.fixed}),h=()=>{if(!(!l.value||(0,o.isHidden)(l))){var{container:t,position:r}=e,n=(0,a.useRect)(l),i=(0,o.getScrollTop)(window);if(s.width=n.width,s.height=n.height,"top"===r){if(t){var u=(0,a.useRect)(t),c=u.bottom-p.value-s.height;s.fixed=p.value>n.top&&u.bottom>0,s.transform=c<0?c:0}else s.fixed=p.value>n.top}else{var{clientHeight:d}=document.documentElement;if(t){var f=(0,a.useRect)(t),v=d-f.top-p.value-s.height;s.fixed=d-p.value<n.bottom&&d>f.top,s.transform=v<0?-v:0}else s.fixed=d-p.value<n.bottom}g(i)}};return(0,n.watch)(()=>s.fixed,e=>r("change",e)),(0,a.useEventListener)("scroll",h,{target:d,passive:!0}),(0,i.useVisibilityChange)(l,h),(0,n.watch)([o.windowWidth,o.windowHeight],()=>{!(!l.value||(0,o.isHidden)(l))&&s.fixed&&(f.value=!0,(0,n.nextTick)(()=>{var e=(0,a.useRect)(l);s.width=e.width,s.height=e.height,f.value=!1}))}),()=>{var e;return(0,n.createVNode)("div",{ref:l,style:v.value},[(0,n.createVNode)("div",{class:c({fixed:s.fixed&&!f.value}),style:m.value},[null===(e=u.default)||void 0===e?void 0:e.call(u)])])}}})},99822:function(e,t,r){},36038:function(e,t,r){}}]);