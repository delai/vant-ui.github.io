/*! For license information please see 3582.021e3e26.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3582"],{11970:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var o=a("11303");a.es(o,t),a("98746");var n=o.default},11303:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o.default}});var o=a("91734");a.es(o,t)},91734:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var o=a("36840"),n=a("22863"),r=a("11099"),i=a("70656"),u=a("82626"),l=["src"],c=(0,o.defineComponent)({__name:"index",setup(e){var t=(0,i.useTranslate)({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),a=(0,o.ref)(0),c=(0,o.ref)(0),d=(0,o.ref)(0),s=(0,o.ref)(0),f=(0,o.ref)(0),p=(0,o.ref)("home"),v={active:(0,i.cdnURL)("user-active.png"),inactive:(0,i.cdnURL)("user-inactive.png")},m=e=>{(0,u.showToast)("".concat(t("tab")," ").concat(e+1))};return(e,i)=>{var u=(0,o.resolveComponent)("demo-block");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(u,{title:(0,o.unref)(t)("basicUsage")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=e=>a.value=e)},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{icon:"home-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"search"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"friends-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"setting-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("matchByName")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=e=>p.value=e)},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{name:"home",icon:"home-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{name:"search",icon:"search"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{name:"friends",icon:"friends-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{name:"setting",icon:"setting-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("badge")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=e=>c.value=e)},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{icon:"home-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"search",dot:""},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"friends-o",badge:"5"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"setting-o",badge:"20"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("customIcon")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:d.value,"onUpdate:modelValue":i[3]||(i[3]=e=>d.value=e)},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{badge:"3"},{icon:(0,o.withCtx)(e=>[(0,o.createElementVNode)("img",{src:e.active?v.active:v.inactive},null,8,l)]),default:(0,o.withCtx)(()=>[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)((0,o.unref)(t)("custom")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"search"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"setting-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("customColor")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:s.value,"onUpdate:modelValue":i[4]||(i[4]=e=>s.value=e),"active-color":"#ee0a24"},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{icon:"home-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"search"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"friends-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"setting-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("switchEvent")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":i[5]||(i[5]=e=>f.value=e),onChange:m},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{icon:"home-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)("".concat((0,o.unref)(t)("tab")," 1")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"search"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)("".concat((0,o.unref)(t)("tab")," 2")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"friends-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)("".concat((0,o.unref)(t)("tab")," 3")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(r.default),{icon:"setting-o"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)("".concat((0,o.unref)(t)("tab")," 4")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}})},52953:function(e,t,a){"use strict";a.r(t),a.d(t,{useHeight:function(){return u}});var o=a("22300"),n=a("36840"),r=a("59633"),i=a("26270"),u=(e,t)=>{var a=(0,n.ref)(),u=()=>{a.value=(0,o.useRect)(e).height};return(0,n.onMounted)(()=>{if((0,n.nextTick)(u),t)for(var e=1;e<=3;e++)setTimeout(u,100*e)}),(0,i.onPopupReopen)(()=>(0,n.nextTick)(u)),(0,n.watch)([r.windowWidth,r.windowHeight],u),a}},3578:function(e,t,a){"use strict";a.r(t),a.d(t,{routeProps:function(){return n},route:function(){return r},useRoute:function(){return i}}),a("56821"),a("5780");var o=a("36840"),n={to:[String,Object],url:String,replace:Boolean};function r(e){var{to:t,url:a,replace:o,$router:n}=e;t&&n?n[o?"replace":"push"](t):a&&(o?location.replace(a):location.href=a)}function i(){var e=(0,o.getCurrentInstance)().proxy;return()=>r(e)}},4341:function(e,t,a){"use strict";a.r(t),a.d(t,{Loading:function(){return r},default:function(){return i}});var o=a("59633"),n=a("96134"),r=(0,o.withInstall)(n.default),i=r},11099:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var o=a("59633"),n=a("77408"),r=(0,o.withInstall)(n.default)},22863:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var o=a("59633"),n=a("74783"),r=(0,o.withInstall)(n.default)},82626:function(e,t,a){"use strict";a.r(t),a.d(t,{showToast:function(){return r.showToast},closeToast:function(){return r.closeToast},showFailToast:function(){return r.showFailToast},showLoadingToast:function(){return r.showLoadingToast},showSuccessToast:function(){return r.showSuccessToast},default:function(){return i}});var o=a("59633"),n=a("6773"),r=a("19049"),i=(0,o.withInstall)(n.default)},35050:function(e,t,a){"use strict";a.r(t),a.d(t,{lockClick:function(){return n}});var o=0;function n(e){e?(!o&&document.body.classList.add("van-toast--unclickable"),o++):o&&!--o&&document.body.classList.remove("van-toast--unclickable")}},7133:function(e,t,a){"use strict";a.r(t),a.d(t,{usePopupState:function(){return i},mountComponent:function(){return u}});var o=a("36840"),n=a("8933"),r=a("29067");function i(){var e=(0,o.reactive)({show:!1}),t=t=>{e.show=t},a=a=>{(0,n.extend)(e,a,{transitionAppear:!0}),t(!0)},i=()=>t(!1);return(0,r.useExpose)({open:a,close:i,toggle:t}),{open:a,close:i,state:e,toggle:t}}function u(e){var t=(0,o.createApp)(e),a=document.createElement("div");return document.body.appendChild(a),{instance:t.mount(a),unmount(){t.unmount(),document.body.removeChild(a)}}}},86401:function(e,t,a){"use strict";a.r(t),a.d(t,{usePlaceholder:function(){return r}});var o=a("36840"),n=a("52953");function r(e,t){var a=(0,n.useHeight)(e,!0);return e=>(0,o.createVNode)("div",{class:t("placeholder"),style:{height:a.value?"".concat(a.value,"px"):void 0}},[e()])}},96134:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}}),a("74366"),a("52400"),a("6868"),a("4331");var o=a("36840"),n=a("59633"),[r,i]=(0,n.createNamespace)("loading"),u=Array(12).fill(null).map((e,t)=>(0,o.createVNode)("i",{class:i("line",String(t+1))},null)),l=(0,o.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,o.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),c={size:n.numericProp,type:(0,n.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:n.numericProp,textColor:String},d=(0,o.defineComponent)({name:r,props:c,setup(e,t){var{slots:a}=t,r=(0,o.computed)(()=>(0,n.extend)({color:e.color},(0,n.getSizeStyle)(e.size))),c=()=>{var t="spinner"===e.type?u:l;return(0,o.createVNode)("span",{class:i("spinner",e.type),style:r.value},[a.icon?a.icon():t])},d=()=>{if(a.default){var t;return(0,o.createVNode)("span",{class:i("text"),style:{fontSize:(0,n.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[a.default()])}};return()=>{var{type:t,vertical:a}=e;return(0,o.createVNode)("div",{class:i([t,{vertical:a}]),"aria-live":"polite","aria-busy":!0},[c(),d()])}}})},77408:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}}),a("74366"),a("52400"),a("81660"),a("71874"),a("64667");var o=a("36840"),n=a("59633"),r=a("74783"),i=a("22300"),u=a("3578"),l=a("57739"),c=a("3042"),[d,s]=(0,n.createNamespace)("tabbar-item"),f=(0,n.extend)({},u.routeProps,{dot:Boolean,icon:String,name:n.numericProp,badge:n.numericProp,badgeProps:Object,iconPrefix:String}),p=(0,o.defineComponent)({name:d,props:f,emits:["click"],setup(e,t){var{emit:a,slots:d}=t,f=(0,u.useRoute)(),p=(0,o.getCurrentInstance)().proxy,{parent:v,index:m}=(0,i.useParent)(r.TABBAR_KEY);if(v){var h=(0,o.computed)(()=>{var t,{route:a,modelValue:o}=v.props;if(a&&"$route"in p){var{$route:r}=p,{to:i}=e,u=(0,n.isObject)(i)?i:{path:i};return!!r.matched.find(e=>{var t="path"in u&&u.path===e.path,a="name"in u&&u.name===e.name;return t||a})}return(null!==(t=e.name)&&void 0!==t?t:m.value)===o}),g=t=>{if(!h.value){var o;v.setActive(null!==(o=e.name)&&void 0!==o?o:m.value,f)}a("click",t)},V=()=>d.icon?d.icon({active:h.value}):e.icon?(0,o.createVNode)(l.Icon,{name:e.icon,classPrefix:e.iconPrefix},null):void 0;return()=>{var t,{dot:a,badge:n}=e,{activeColor:r,inactiveColor:i}=v.props,u=h.value?r:i;return(0,o.createVNode)("div",{role:"tab",class:s({active:h.value}),style:{color:u},tabindex:0,"aria-selected":h.value,onClick:g},[(0,o.createVNode)(c.Badge,(0,o.mergeProps)({dot:a,class:s("icon"),content:n},e.badgeProps),{default:V}),(0,o.createVNode)("div",{class:s("text")},[null===(t=d.default)||void 0===t?void 0:t.call(d,{active:h.value})])])}}}})},74783:function(e,t,a){"use strict";a.r(t),a.d(t,{TABBAR_KEY:function(){return d},default:function(){return s}}),a("74366"),a("52400"),a("95818");var o=a("36840"),n=a("59633"),r=a("22300"),i=a("86401"),[u,l]=(0,n.createNamespace)("tabbar"),c={route:Boolean,fixed:n.truthProp,border:n.truthProp,zIndex:n.numericProp,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:(0,n.makeNumericProp)(0),safeAreaInsetBottom:{type:Boolean,default:null}},d=Symbol(u),s=(0,o.defineComponent)({name:u,props:c,emits:["change","update:modelValue"],setup(e,t){var{emit:a,slots:u}=t,c=(0,o.ref)(),{linkChildren:s}=(0,r.useChildren)(d),f=(0,i.usePlaceholder)(c,l),p=()=>{var t;return null!==(t=e.safeAreaInsetBottom)&&void 0!==t?t:e.fixed},v=()=>{var t,{fixed:a,zIndex:r,border:i}=e;return(0,o.createVNode)("div",{ref:c,role:"tablist",style:(0,n.getZIndexStyle)(r),class:[l({fixed:a}),{[n.BORDER_TOP_BOTTOM]:i,"van-safe-area-bottom":p()}]},[null===(t=u.default)||void 0===t?void 0:t.call(u)])};return s({props:e,setActive:(t,o)=>{(0,n.callInterceptor)(e.beforeChange,{args:[t],done(){a("update:modelValue",t),a("change",t),o()}})}}),()=>e.fixed&&e.placeholder?f(v):v()}})},6773:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}}),a("74366"),a("52400");var o=a("36840"),n=a("59633"),r=a("35050"),i=a("57739"),u=a("96446"),l=a("4341"),[c,d]=(0,n.createNamespace)("toast"),s=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],f={icon:String,show:Boolean,type:(0,n.makeStringProp)("text"),overlay:Boolean,message:n.numericProp,iconSize:n.numericProp,duration:(0,n.makeNumberProp)(2e3),position:(0,n.makeStringProp)("middle"),teleport:[String,Object],wordBreak:String,className:n.unknownProp,iconPrefix:String,transition:(0,n.makeStringProp)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:n.unknownProp,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},p=(0,o.defineComponent)({name:c,props:f,emits:["update:show"],setup(e,t){var a,{emit:c,slots:f}=t,p=!1,v=()=>{var t=e.show&&e.forbidClick;p!==t&&(p=t,(0,r.lockClick)(p))},m=e=>c("update:show",e),h=()=>{e.closeOnClick&&m(!1)},g=()=>clearTimeout(a),V=()=>{var{icon:t,type:a,iconSize:n,iconPrefix:r,loadingType:u}=e;return t||"success"===a||"fail"===a?(0,o.createVNode)(i.Icon,{name:t||a,size:n,class:d("icon"),classPrefix:r},null):"loading"===a?(0,o.createVNode)(l.Loading,{class:d("loading"),size:n,type:u},null):void 0},x=()=>{var{type:t,message:a}=e;return f.message?(0,o.createVNode)("div",{class:d("text")},[f.message()]):(0,n.isDef)(a)&&""!==a?"html"===t?(0,o.createVNode)("div",{key:0,class:d("text"),innerHTML:String(a)},null):(0,o.createVNode)("div",{class:d("text")},[a]):void 0};return(0,o.watch)(()=>[e.show,e.forbidClick],v),(0,o.watch)(()=>[e.show,e.type,e.message,e.duration],()=>{g(),e.show&&e.duration>0&&(a=setTimeout(()=>{m(!1)},e.duration))}),(0,o.onMounted)(v),(0,o.onUnmounted)(v),()=>(0,o.createVNode)(u.Popup,(0,o.mergeProps)({class:[d([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:h,onClosed:g,"onUpdate:show":m},(0,n.pick)(e,s)),{default:()=>[V(),x()]})}})},19049:function(e,t,a){"use strict";a.r(t),a.d(t,{showToast:function(){return s},showLoadingToast:function(){return p},showSuccessToast:function(){return v},showFailToast:function(){return m},closeToast:function(){return h}}),a("88849"),a("99885"),a("83323"),a("57101"),a("68883"),a("51104"),a("53116"),a("68961"),a("45259"),a("2531"),a("74814"),a("58627"),a("92798"),a("97748"),a("74366"),a("52400"),a("59186"),a("78394"),a("64667"),a("14078"),a("76959"),a("11057");var o=a("36840"),n=a("59633"),r=a("7133"),i=a("6773"),u=[],l=(0,n.extend)({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1}),c=new Map;function d(e){return(0,n.isObject)(e)?e:{message:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!n.inBrowser)return{};var t=function(){if(!u.length){var e=function(){var{instance:e,unmount:t}=(0,r.mountComponent)({setup(){var e=(0,o.ref)(""),{open:t,state:a,close:n,toggle:u}=(0,r.usePopupState)(),l=()=>{};return(0,o.watch)(e,e=>{a.message=e}),(0,o.getCurrentInstance)().render=()=>(0,o.createVNode)(i.default,(0,o.mergeProps)(a,{onClosed:l,"onUpdate:show":u}),null),{open:t,close:n,message:e}}});return e}();u.push(e)}return u[u.length-1]}(),a=d(e);return t.open((0,n.extend)({},l,c.get(a.type||l.type),a)),t}var f=e=>t=>s((0,n.extend)({type:e},d(t))),p=f("loading"),v=f("success"),m=f("fail"),h=e=>{if(u.length){if(e)u.forEach(e=>{e.close()}),u=[];else{var t;u[0].close()}}}},98746:function(e,t,a){},12076:function(e,t,a){}}]);