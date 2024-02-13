/*! For license information please see 823.f071e3e8.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["823"],{36324:function(e,t,o){"use strict";o.r(t);var r=o("395");o.es(r,t);let n=r.default;t.default=n},5018:function(e,t,o){"use strict";o.r(t);var r=o("69298"),n=o("40537"),a=o("7197"),i=o("24647"),l=o("82055");t.default={__name:"index",setup(e){let t=(0,i.useTranslate)({"zh-CN":{penColor:"\u81EA\u5B9A\u4E49\u989C\u8272",lineWidth:"\u81EA\u5B9A\u4E49\u7EBF\u5BBD",backgroundColor:"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272"},"en-US":{penColor:"Pen Color",lineWidth:"Line Width",backgroundColor:"Background Color"}}),o=(0,r.ref)(""),u=e=>{o.value=e.image},c=()=>(0,l.showToast)("clear");return(e,i)=>{let l=(0,r.resolveComponent)("demo-block");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(l,{title:(0,r.unref)(t)("basicUsage")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(n.default),{onSubmit:u,onClear:c})]),_:1},8,["title"]),o.value?((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(a.default),{key:0,src:o.value},null,8,["src"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(l,{title:(0,r.unref)(t)("penColor")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(n.default),{"pen-color":"#ff0000",onClear:c,onSubmit:u})]),_:1},8,["title"]),(0,r.createVNode)(l,{title:(0,r.unref)(t)("lineWidth")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(n.default),{"line-width":6,onClear:c,onSubmit:u})]),_:1},8,["title"]),(0,r.createVNode)(l,{title:(0,r.unref)(t)("backgroundColor")},{default:(0,r.withCtx)(()=>[(0,r.createVNode)((0,r.unref)(n.default),{"background-color":"#eee",onClear:c,onSubmit:u})]),_:1},8,["title"])],64)}}}},395:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r.default}});var r=o("5018");o.es(r,t)},99497:function(e,t,o){"use strict";o.r(t),o.d(t,{Button:function(){return a}});var r=o("37704"),n=o("56061"),a=(0,r.withInstall)(n.default);t.default=a},6149:function(e,t,o){"use strict";o.r(t),o.d(t,{route:function(){return a},routeProps:function(){return n},useRoute:function(){return i}}),o("56821"),o("5780");var r=o("69298"),n={to:[String,Object],url:String,replace:Boolean};function a(e){var{to:t,url:o,replace:r,$router:n}=e;t&&n?n[r?"replace":"push"](t):o&&(r?location.replace(o):location.href=o)}function i(){var e=(0,r.getCurrentInstance)().proxy;return()=>a(e)}},7197:function(e,t,o){"use strict";o.r(t),o.d(t,{Image:function(){return a}});var r=o("37704"),n=o("33233"),a=(0,r.withInstall)(n.default);t.default=a},95786:function(e,t,o){"use strict";o.r(t),o.d(t,{Loading:function(){return a}});var r=o("37704"),n=o("94354"),a=(0,r.withInstall)(n.default);t.default=a},40537:function(e,t,o){"use strict";o.r(t);var r=o("37704"),n=o("34909"),a=(0,r.withInstall)(n.default);t.default=a},82055:function(e,t,o){"use strict";o.r(t),o.d(t,{closeToast:function(){return a.closeToast},showFailToast:function(){return a.showFailToast},showLoadingToast:function(){return a.showLoadingToast},showSuccessToast:function(){return a.showSuccessToast},showToast:function(){return a.showToast}});var r=o("37704"),n=o("73090"),a=o("46936"),i=(0,r.withInstall)(n.default);t.default=i},20897:function(e,t,o){"use strict";o.r(t),o.d(t,{lockClick:function(){return n}});var r=0;function n(e){e?(!r&&document.body.classList.add("van-toast--unclickable"),r++):r&&!--r&&document.body.classList.remove("van-toast--unclickable")}},84285:function(e,t,o){"use strict";o.r(t),o.d(t,{mountComponent:function(){return l},usePopupState:function(){return i}});var r=o("69298"),n=o("74990"),a=o("10023");function i(){var e=(0,r.reactive)({show:!1}),t=t=>{e.show=t},o=o=>{(0,n.extend)(e,o,{transitionAppear:!0}),t(!0)},i=()=>t(!1);return(0,a.useExpose)({open:o,close:i,toggle:t}),{open:o,close:i,state:e,toggle:t}}function l(e){var t=(0,r.createApp)(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}},56061:function(e,t,o){"use strict";o.r(t),o("74366"),o("52400"),o("20964");var r=o("69298"),n=o("37704"),a=o("6149"),i=o("96528"),l=o("95786"),[u,c]=(0,n.createNamespace)("button"),s=(0,n.extend)({},a.routeProps,{tag:(0,n.makeStringProp)("button"),text:String,icon:String,type:(0,n.makeStringProp)("default"),size:(0,n.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,n.makeStringProp)("button"),loadingSize:n.numericProp,loadingText:String,loadingType:String,iconPosition:(0,n.makeStringProp)("left")});t.default=(0,r.defineComponent)({name:u,props:s,emits:["click"],setup(e,t){var{emit:o,slots:u}=t,s=(0,a.useRoute)(),d=()=>u.loading?u.loading():(0,r.createVNode)(l.Loading,{size:e.loadingSize,type:e.loadingType,class:c("loading")},null),v=()=>e.loading?d():u.icon?(0,r.createVNode)("div",{class:c("icon")},[u.icon()]):e.icon?(0,r.createVNode)(i.Icon,{name:e.icon,class:c("icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{var t;if(t=e.loading?e.loadingText:u.default?u.default():e.text)return(0,r.createVNode)("span",{class:c("text")},[t])},p=()=>{var{color:t,plain:o}=e;if(t){var r={color:o?t:"white"};return!o&&(r.background=t),t.includes("gradient")?r.border=0:r.borderColor=t,r}},g=t=>{e.loading?(0,n.preventDefault)(t):!e.disabled&&(o("click",t),s())};return()=>{var{tag:t,type:o,size:a,block:i,round:l,plain:u,square:s,loading:d,disabled:m,hairline:h,nativeType:k,iconPosition:w}=e,C=[c([o,a,{plain:u,block:i,round:l,square:s,loading:d,disabled:m,hairline:h}]),{[n.BORDER_SURROUND]:h}];return(0,r.createVNode)(t,{type:k,class:C,style:p(),disabled:m,onClick:g},{default:()=>[(0,r.createVNode)("div",{class:c("content")},["left"===w&&v(),f(),"right"===w&&v()])]})}}})},33233:function(e,t,o){"use strict";o.r(t),o("74366"),o("52400");var r=o("69298"),n=o("37704"),a=o("96528"),[i,l]=(0,n.createNamespace)("image"),u={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:n.numericProp,height:n.numericProp,radius:n.numericProp,lazyLoad:Boolean,iconSize:n.numericProp,showError:n.truthProp,errorIcon:(0,n.makeStringProp)("photo-fail"),iconPrefix:String,showLoading:n.truthProp,loadingIcon:(0,n.makeStringProp)("photo")};t.default=(0,r.defineComponent)({name:i,props:u,emits:["load","error"],setup(e,t){var{emit:o,slots:i}=t,u=(0,r.ref)(!1),c=(0,r.ref)(!0),s=(0,r.ref)(),{$Lazyload:d}=(0,r.getCurrentInstance)().proxy,v=(0,r.computed)(()=>{var t={width:(0,n.addUnit)(e.width),height:(0,n.addUnit)(e.height)};return(0,n.isDef)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,n.addUnit)(e.radius)),t});(0,r.watch)(()=>e.src,()=>{u.value=!1,c.value=!0});var f=e=>{c.value&&(c.value=!1,o("load",e))},p=()=>{var e=new Event("load");Object.defineProperty(e,"target",{value:s.value,enumerable:!0}),f(e)},g=e=>{u.value=!0,c.value=!1,o("error",e)},m=(t,o,n)=>n?n():(0,r.createVNode)(a.Icon,{name:t,size:e.iconSize,class:o,classPrefix:e.iconPrefix},null),h=()=>c.value&&e.showLoading?(0,r.createVNode)("div",{class:l("loading")},[m(e.loadingIcon,l("loading-icon"),i.loading)]):u.value&&e.showError?(0,r.createVNode)("div",{class:l("error")},[m(e.errorIcon,l("error-icon"),i.error)]):void 0,k=()=>{if(!u.value&&e.src){var t={alt:e.alt,class:l("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?(0,r.withDirectives)((0,r.createVNode)("img",(0,r.mergeProps)({ref:s},t),null),[[(0,r.resolveDirective)("lazy"),e.src]]):(0,r.createVNode)("img",(0,r.mergeProps)({ref:s,src:e.src,onLoad:f,onError:g},t),null)}},w=e=>{var{el:t}=e,o=()=>{t===s.value&&c.value&&p()};s.value?o():(0,r.nextTick)(o)},C=e=>{var{el:t}=e;t===s.value&&!u.value&&g()};return d&&n.inBrowser&&(d.$on("loaded",w),d.$on("error",C),(0,r.onBeforeUnmount)(()=>{d.$off("loaded",w),d.$off("error",C)})),(0,r.onMounted)(()=>{(0,r.nextTick)(()=>{var t;((t=s.value)===null||void 0===t?void 0:t.complete)&&!e.lazyLoad&&p()})}),()=>{var t;return(0,r.createVNode)("div",{class:l({round:e.round,block:e.block}),style:v.value},[k(),h(),(t=i.default)===null||void 0===t?void 0:t.call(i)])}}})},94354:function(e,t,o){"use strict";o.r(t),o("74366"),o("52400"),o("6868"),o("4331");var r=o("69298"),n=o("37704"),[a,i]=(0,n.createNamespace)("loading"),l=Array(12).fill(null).map((e,t)=>(0,r.createVNode)("i",{class:i("line",String(t+1))},null)),u=(0,r.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,r.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),c={size:n.numericProp,type:(0,n.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:n.numericProp,textColor:String};t.default=(0,r.defineComponent)({name:a,props:c,setup(e,t){var{slots:o}=t,a=(0,r.computed)(()=>(0,n.extend)({color:e.color},(0,n.getSizeStyle)(e.size))),c=()=>{var t="spinner"===e.type?l:u;return(0,r.createVNode)("span",{class:i("spinner",e.type),style:a.value},[o.icon?o.icon():t])},s=()=>{if(o.default){var t;return(0,r.createVNode)("span",{class:i("text"),style:{fontSize:(0,n.addUnit)(e.textSize),color:(t=e.textColor)!==null&&void 0!==t?t:e.color}},[o.default()])}};return()=>{var{type:t,vertical:o}=e;return(0,r.createVNode)("div",{class:i([t,{vertical:o}]),"aria-live":"polite","aria-busy":!0},[c(),s()])}}})},34909:function(e,t,o){"use strict";o.r(t),o("74366"),o("52400");var r=o("69298"),n=o("37704"),a=o("22300"),i=o("10023"),l=o("99497"),[u,c,s]=(0,n.createNamespace)("signature"),d={tips:String,type:(0,n.makeStringProp)("png"),penColor:(0,n.makeStringProp)("#000"),lineWidth:(0,n.makeNumberProp)(3),clearButtonText:String,backgroundColor:(0,n.makeStringProp)(""),confirmButtonText:String},v=()=>{var e,t=document.createElement("canvas");return!!((e=t.getContext)===null||void 0===e?void 0:e.call(t,"2d"))};t.default=(0,r.defineComponent)({name:u,props:d,emits:["submit","clear","start","end","signing"],setup(e,t){var o,{emit:u}=t,d=(0,r.ref)(),f=(0,r.ref)(),p=(0,r.computed)(()=>d.value?d.value.getContext("2d"):null),g=!n.inBrowser||v(),m=0,h=0,k=()=>{if(!p.value)return!1;p.value.beginPath(),p.value.lineWidth=e.lineWidth,p.value.strokeStyle=e.penColor,o=(0,a.useRect)(d),u("start")},w=e=>{if(!p.value)return!1;(0,n.preventDefault)(e);var t=e.touches[0],r=t.clientX-((null==o?void 0:o.left)||0),a=t.clientY-((null==o?void 0:o.top)||0);p.value.lineCap="round",p.value.lineJoin="round",p.value.lineTo(r,a),p.value.stroke(),u("signing",e)},C=e=>{(0,n.preventDefault)(e),u("end")},S=t=>{var o=document.createElement("canvas");return o.width=t.width,o.height=t.height,e.backgroundColor&&y(o.getContext("2d")),t.toDataURL()===o.toDataURL()},y=t=>{t&&e.backgroundColor&&(t.fillStyle=e.backgroundColor,t.fillRect(0,0,m,h))},b=()=>{var t,o,r=d.value;r&&u("submit",{image:S(r)?"":((t=(o={jpg:()=>r.toDataURL("image/jpeg",.8),jpeg:()=>r.toDataURL("image/jpeg",.8)})[e.type])===null||void 0===t?void 0:t.call(o))||r.toDataURL("image/".concat(e.type)),canvas:r})},P=()=>{p.value&&(p.value.clearRect(0,0,m,h),p.value.closePath(),y(p.value)),u("clear")},x=()=>{if(g&&d.value){var e,t,o,r=d.value,a=n.inBrowser?window.devicePixelRatio:1;m=r.width=(((e=f.value)===null||void 0===e?void 0:e.offsetWidth)||0)*a,h=r.height=(((t=f.value)===null||void 0===t?void 0:t.offsetHeight)||0)*a,(o=p.value)===null||void 0===o||o.scale(a,a),y(p.value)}},N=()=>{if(p.value){var e=p.value.getImageData(0,0,m,h);x(),p.value.putImageData(e,0,0)}};return(0,r.watch)(n.windowWidth,N),(0,r.onMounted)(x),(0,i.useExpose)({resize:N}),()=>(0,r.createVNode)("div",{class:c()},[(0,r.createVNode)("div",{class:c("content"),ref:f},[g?(0,r.createVNode)("canvas",{ref:d,onTouchstartPassive:k,onTouchmove:w,onTouchend:C},null):(0,r.createVNode)("p",null,[e.tips])]),(0,r.createVNode)("div",{class:c("footer")},[(0,r.createVNode)(l.Button,{size:"small",onClick:P},{default:()=>[e.clearButtonText||s("clear")]}),(0,r.createVNode)(l.Button,{type:"primary",size:"small",onClick:b},{default:()=>[e.confirmButtonText||s("confirm")]})])])}})},73090:function(e,t,o){"use strict";o.r(t),o("74366"),o("52400");var r=o("69298"),n=o("37704"),a=o("20897"),i=o("96528"),l=o("97760"),u=o("95786"),[c,s]=(0,n.createNamespace)("toast"),d=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],v={icon:String,show:Boolean,type:(0,n.makeStringProp)("text"),overlay:Boolean,message:n.numericProp,iconSize:n.numericProp,duration:(0,n.makeNumberProp)(2e3),position:(0,n.makeStringProp)("middle"),teleport:[String,Object],wordBreak:String,className:n.unknownProp,iconPrefix:String,transition:(0,n.makeStringProp)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:n.unknownProp,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:n.numericProp};t.default=(0,r.defineComponent)({name:c,props:v,emits:["update:show"],setup(e,t){var o,{emit:c,slots:v}=t,f=!1,p=()=>{var t=e.show&&e.forbidClick;f!==t&&(f=t,(0,a.lockClick)(f))},g=e=>c("update:show",e),m=()=>{e.closeOnClick&&g(!1)},h=()=>clearTimeout(o),k=()=>{var{icon:t,type:o,iconSize:n,iconPrefix:a,loadingType:l}=e;return t||"success"===o||"fail"===o?(0,r.createVNode)(i.Icon,{name:t||o,size:n,class:s("icon"),classPrefix:a},null):"loading"===o?(0,r.createVNode)(u.Loading,{class:s("loading"),size:n,type:l},null):void 0},w=()=>{var{type:t,message:o}=e;return v.message?(0,r.createVNode)("div",{class:s("text")},[v.message()]):(0,n.isDef)(o)&&""!==o?"html"===t?(0,r.createVNode)("div",{key:0,class:s("text"),innerHTML:String(o)},null):(0,r.createVNode)("div",{class:s("text")},[o]):void 0};return(0,r.watch)(()=>[e.show,e.forbidClick],p),(0,r.watch)(()=>[e.show,e.type,e.message,e.duration],()=>{h(),e.show&&e.duration>0&&(o=setTimeout(()=>{g(!1)},e.duration))}),(0,r.onMounted)(p),(0,r.onUnmounted)(p),()=>(0,r.createVNode)(l.Popup,(0,r.mergeProps)({class:[s([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:m,onClosed:h,"onUpdate:show":g},(0,n.pick)(e,d)),{default:()=>[k(),w()]})}})},46936:function(e,t,o){"use strict";o.r(t),o.d(t,{closeToast:function(){return m},showFailToast:function(){return g},showLoadingToast:function(){return f},showSuccessToast:function(){return p},showToast:function(){return d}}),o("88849"),o("99885"),o("83323"),o("57101"),o("68883"),o("51104"),o("53116"),o("68961"),o("45259"),o("2531"),o("74814"),o("58627"),o("92798"),o("97748"),o("74366"),o("52400"),o("59186"),o("78394"),o("64667"),o("14078"),o("76959"),o("11057");var r=o("69298"),n=o("37704"),a=o("84285"),i=o("73090"),l=[],u=(0,n.extend)({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1}),c=new Map;function s(e){return(0,n.isObject)(e)?e:{message:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!n.inBrowser)return{};var t=function(){if(!l.length){var e=function(){var{instance:e,unmount:t}=(0,a.mountComponent)({setup(){var e=(0,r.ref)(""),{open:t,state:o,close:n,toggle:l}=(0,a.usePopupState)(),u=()=>{};return(0,r.watch)(e,e=>{o.message=e}),(0,r.getCurrentInstance)().render=()=>(0,r.createVNode)(i.default,(0,r.mergeProps)(o,{onClosed:u,"onUpdate:show":l}),null),{open:t,close:n,message:e}}});return e}();l.push(e)}return l[l.length-1]}(),o=s(e);return t.open((0,n.extend)({},u,c.get(o.type||u.type),o)),t}var v=e=>t=>d((0,n.extend)({type:e},s(t))),f=v("loading"),p=v("success"),g=v("fail"),m=e=>{if(l.length){if(e)l.forEach(e=>{e.close()}),l=[];else{var t;l[0].close()}}}}}]);