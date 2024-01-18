/*! For license information please see 4795.c0aae6ca.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4795"],{90691:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return a}});var l=o("22020");o.es(l,t);var a=l.default},22020:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l.default}});var l=o("38219");o.es(l,t)},38219:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}});var l=o("69298"),a=o("79483"),n=o("12838"),r=o("58716"),u=o("81421"),i=o("54991"),d=o("70656"),c={style:{padding:"5px 16px"}},s=(0,l.defineComponent)({__name:"index",setup(e){var t=(0,d.useTranslate)({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",swipeItems:"\u6A2A\u5411\u6EDA\u52A8",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",swipeItems:"Swipe Items",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),o=(0,l.ref)(),s=(0,l.ref)(!0),p=(0,l.ref)(!1),f=(0,l.ref)(0),v=(0,l.ref)("a"),m=(0,l.computed)(()=>t("option1")),V=(0,l.computed)(()=>t("option2")),g=()=>{var e;null===(e=o.value)||void 0===e||e.toggle()};return(e,d)=>{var h=(0,l.resolveComponent)("demo-block");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(h,{title:(0,l.unref)(t)("basicUsage")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(a.default),null,{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[1]||(d[1]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,l.createVNode)(h,{title:(0,l.unref)(t)("customContent")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(a.default),null,{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[2]||(d[2]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{title:(0,l.unref)(t)("itemTitle"),ref_key:"item",ref:o},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(r.default),{center:"",title:(0,l.unref)(t)("switchTitle1")},{"right-icon":(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(u.default),{modelValue:s.value,"onUpdate:modelValue":d[3]||(d[3]=e=>s.value=e)},null,8,["modelValue"])]),_:1},8,["title"]),(0,l.createVNode)((0,l.unref)(r.default),{center:"",title:(0,l.unref)(t)("switchTitle2")},{"right-icon":(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(u.default),{modelValue:p.value,"onUpdate:modelValue":d[4]||(d[4]=e=>p.value=e)},null,8,["modelValue"])]),_:1},8,["title"]),(0,l.createElementVNode)("div",c,[(0,l.createVNode)((0,l.unref)(i.default),{type:"primary",block:"",round:"",style:{height:"40px"},onClick:g},{default:(0,l.withCtx)(()=>[(0,l.createTextVNode)((0,l.toDisplayString)((0,l.unref)(t)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),(0,l.createVNode)(h,{title:(0,l.unref)(t)("customActiveColor")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(a.default),{"active-color":"#ee0a24"},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[5]||(d[5]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[6]||(d[6]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,l.createVNode)(h,{title:(0,l.unref)(t)("swipeItems")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(a.default),{"swipe-threshold":"4"},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[7]||(d[7]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[8]||(d[8]=e=>v.value=e),options:V.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[9]||(d[9]=e=>v.value=e),options:V.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[10]||(d[10]=e=>v.value=e),options:V.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[11]||(d[11]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,l.createVNode)(h,{title:(0,l.unref)(t)("expandDirection")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(a.default),{direction:"up"},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[12]||(d[12]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[13]||(d[13]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,l.createVNode)(h,{title:(0,l.unref)(t)("disableMenu")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(a.default),null,{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[14]||(d[14]=e=>f.value=e),disabled:"",options:m.value},null,8,["modelValue","options"]),(0,l.createVNode)((0,l.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[15]||(d[15]=e=>v.value=e),disabled:"",options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}})},54991:function(e,t,o){"use strict";o.r(t),o.d(t,{Button:function(){return n},default:function(){return r}});var l=o("59633"),a=o("34396"),n=(0,l.withInstall)(a.default),r=n},58716:function(e,t,o){"use strict";o.r(t),o.d(t,{Cell:function(){return n},default:function(){return r}});var l=o("59633"),a=o("73880"),n=(0,l.withInstall)(a.default),r=n},44699:function(e,t,o){"use strict";o.r(t),o.d(t,{useId:function(){return n}});var l=o("69298"),a=0;function n(){var e=(0,l.getCurrentInstance)(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return"".concat(t,"-").concat(++a)}},3578:function(e,t,o){"use strict";o.r(t),o.d(t,{route:function(){return n},routeProps:function(){return a},useRoute:function(){return r}}),o("56821"),o("5780");var l=o("69298"),a={to:[String,Object],url:String,replace:Boolean};function n(e){var{to:t,url:o,replace:l,$router:a}=e;t&&a?a[l?"replace":"push"](t):o&&(l?location.replace(o):location.href=o)}function r(){var e=(0,l.getCurrentInstance)().proxy;return()=>n(e)}},12838:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return n}});var l=o("59633"),a=o("91441"),n=(0,l.withInstall)(a.default)},79483:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return n}});var l=o("59633"),a=o("47098"),n=(0,l.withInstall)(a.default)},4341:function(e,t,o){"use strict";o.r(t),o.d(t,{Loading:function(){return n},default:function(){return r}});var l=o("59633"),a=o("86512"),n=(0,l.withInstall)(a.default),r=n},81421:function(e,t,o){"use strict";o.r(t),o.d(t,{Switch:function(){return n},default:function(){return r}});var l=o("59633"),a=o("91902"),n=(0,l.withInstall)(a.default),r=n},34396:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}}),o("74366"),o("52400"),o("20964");var l=o("69298"),a=o("59633"),n=o("3578"),r=o("57739"),u=o("4341"),[i,d]=(0,a.createNamespace)("button"),c=(0,a.extend)({},n.routeProps,{tag:(0,a.makeStringProp)("button"),text:String,icon:String,type:(0,a.makeStringProp)("default"),size:(0,a.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,a.makeStringProp)("button"),loadingSize:a.numericProp,loadingText:String,loadingType:String,iconPosition:(0,a.makeStringProp)("left")}),s=(0,l.defineComponent)({name:i,props:c,emits:["click"],setup(e,t){var{emit:o,slots:i}=t,c=(0,n.useRoute)(),s=()=>i.loading?i.loading():(0,l.createVNode)(u.Loading,{size:e.loadingSize,type:e.loadingType,class:d("loading")},null),p=()=>e.loading?s():i.icon?(0,l.createVNode)("div",{class:d("icon")},[i.icon()]):e.icon?(0,l.createVNode)(r.Icon,{name:e.icon,class:d("icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{var t;if(t=e.loading?e.loadingText:i.default?i.default():e.text)return(0,l.createVNode)("span",{class:d("text")},[t])},v=()=>{var{color:t,plain:o}=e;if(t){var l={color:o?t:"white"};return!o&&(l.background=t),t.includes("gradient")?l.border=0:l.borderColor=t,l}},m=t=>{e.loading?(0,a.preventDefault)(t):!e.disabled&&(o("click",t),c())};return()=>{var{tag:t,type:o,size:n,block:r,round:u,plain:i,square:c,loading:s,disabled:V,hairline:g,nativeType:h,iconPosition:w}=e,N=[d([o,n,{plain:i,block:r,round:u,square:c,loading:s,disabled:V,hairline:g}]),{[a.BORDER_SURROUND]:g}];return(0,l.createVNode)(t,{type:h,class:N,style:v(),disabled:V,onClick:m},{default:()=>[(0,l.createVNode)("div",{class:d("content")},["left"===w&&p(),f(),"right"===w&&p()])]})}}})},73880:function(e,t,o){"use strict";o.r(t),o.d(t,{cellSharedProps:function(){return d},default:function(){return s}}),o("74366"),o("52400");var l=o("69298"),a=o("59633"),n=o("3578"),r=o("57739"),[u,i]=(0,a.createNamespace)("cell"),d={tag:(0,a.makeStringProp)("div"),icon:String,size:String,title:a.numericProp,value:a.numericProp,label:a.numericProp,center:Boolean,isLink:Boolean,border:a.truthProp,iconPrefix:String,valueClass:a.unknownProp,labelClass:a.unknownProp,titleClass:a.unknownProp,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},c=(0,a.extend)({},d,n.routeProps),s=(0,l.defineComponent)({name:u,props:c,setup(e,t){var{slots:o}=t,u=(0,n.useRoute)(),d=()=>{if(o.label||(0,a.isDef)(e.label))return(0,l.createVNode)("div",{class:[i("label"),e.labelClass]},[o.label?o.label():e.label])},c=()=>{if(o.title||(0,a.isDef)(e.title)){var t,n=null===(t=o.title)||void 0===t?void 0:t.call(o);if(!Array.isArray(n)||0!==n.length)return(0,l.createVNode)("div",{class:[i("title"),e.titleClass],style:e.titleStyle},[n||(0,l.createVNode)("span",null,[e.title]),d()])}},s=()=>{var t=o.value||o.default;if(t||(0,a.isDef)(e.value))return(0,l.createVNode)("div",{class:[i("value"),e.valueClass]},[t?t():(0,l.createVNode)("span",null,[e.value])])},p=()=>o.icon?o.icon():e.icon?(0,l.createVNode)(r.Icon,{name:e.icon,class:i("left-icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{if(o["right-icon"])return o["right-icon"]();if(e.isLink){var t=e.arrowDirection&&"right"!==e.arrowDirection?"arrow-".concat(e.arrowDirection):"arrow";return(0,l.createVNode)(r.Icon,{name:t,class:i("right-icon")},null)}};return()=>{var t,{tag:a,size:n,center:r,border:d,isLink:v,required:m}=e,V=null!==(t=e.clickable)&&void 0!==t?t:v,g={center:r,required:!!m,clickable:V,borderless:!d};return n&&(g[n]=!!n),(0,l.createVNode)(a,{class:i(g),role:V?"button":void 0,tabindex:V?0:void 0,onClick:u},{default:()=>{var e;return[p(),c(),s(),f(),null===(e=o.extra)||void 0===e?void 0:e.call(o)]}})}}})},91441:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}}),o("74366"),o("52400"),o("81660"),o("71874"),o("64667"),o("6868"),o("4331");var l=o("69298"),a=o("59633"),n=o("47098"),r=o("22300"),u=o("29067"),i=o("58716"),d=o("57739"),c=o("96446"),[s,p]=(0,a.createNamespace)("dropdown-item"),f={title:String,options:(0,a.makeArrayProp)(),disabled:Boolean,teleport:[String,Object],lazyRender:a.truthProp,modelValue:a.unknownProp,titleClass:a.unknownProp},v=(0,l.defineComponent)({name:s,inheritAttrs:!1,props:f,emits:["open","opened","close","closed","change","update:modelValue"],setup(e,t){var{emit:o,slots:s,attrs:f}=t,v=(0,l.reactive)({showPopup:!1,transition:!0,showWrapper:!1}),m=(0,l.ref)(),{parent:V,index:g}=(0,r.useParent)(n.DROPDOWN_KEY);if(V){var h=e=>()=>o(e),w=h("open"),N=h("close"),C=h("opened"),x=()=>{v.showWrapper=!1,o("closed")},b=t=>{e.teleport&&t.stopPropagation()},P=t=>{var{activeColor:a}=V.props,n=t.value===e.modelValue;return(0,l.createVNode)(i.Cell,{role:"menuitem",key:String(t.value),icon:t.icon,title:t.text,class:p("option",{active:n}),style:{color:n?a:""},tabindex:n?0:-1,clickable:!0,onClick:()=>{v.showPopup=!1,t.value!==e.modelValue&&(o("update:modelValue",t.value),o("change",t.value))}},{value:()=>{if(n)return(0,l.createVNode)(d.Icon,{class:p("icon"),color:a,name:"success"},null)}})},y=()=>{var{offset:t}=V,{autoLocate:o,zIndex:n,overlay:u,duration:i,direction:d,closeOnClickOverlay:h}=V.props,y=(0,a.getZIndexStyle)(n),k=t.value;if(o&&m.value){var S=(0,a.getContainingBlock)(m.value);S&&(k-=(0,r.useRect)(S).top)}return"down"===d?y.top="".concat(k,"px"):y.bottom="".concat(k,"px"),(0,l.withDirectives)((0,l.createVNode)("div",(0,l.mergeProps)({ref:m,style:y,class:p([d]),onClick:b},f),[(0,l.createVNode)(c.Popup,{show:v.showPopup,"onUpdate:show":e=>v.showPopup=e,role:"menu",class:p("content"),overlay:u,position:"down"===d?"top":"bottom",duration:v.transition?i:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":"".concat(V.id,"-").concat(g.value),closeOnClickOverlay:h,onOpen:w,onClose:N,onOpened:C,onClosed:x},{default:()=>{var t;return[e.options.map(P),null===(t=s.default)||void 0===t?void 0:t.call(s)]}})]),[[l.vShow,v.showWrapper]])};return(0,u.useExpose)({state:v,toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!v.showPopup,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e!==v.showPopup&&(v.showPopup=e,v.transition=!t.immediate,e&&(V.updateOffset(),v.showWrapper=!0))},renderTitle:()=>{if(s.title)return s.title();if(e.title)return e.title;var t=e.options.find(t=>t.value===e.modelValue);return t?t.text:""}}),()=>{if(e.teleport){var t,o;return(0,l.createVNode)(l.Teleport,{to:e.teleport},"function"!=typeof(o=t=y())&&("[object Object]"!==Object.prototype.toString.call(o)||(0,l.isVNode)(o))?{default:()=>[t]}:t)}return y()}}}})},47098:function(e,t,o){"use strict";o.r(t),o.d(t,{DROPDOWN_KEY:function(){return s},default:function(){return p}}),o("74366"),o("52400"),o("95818"),o("5574"),o("84691"),o("64667"),o("76959"),o("11057"),o("6868"),o("4331");var l=o("69298"),a=o("59633"),n=o("44699"),r=o("29067"),u=o("22300"),[i,d]=(0,a.createNamespace)("dropdown-menu"),c={overlay:a.truthProp,zIndex:a.numericProp,duration:(0,a.makeNumericProp)(.2),direction:(0,a.makeStringProp)("down"),activeColor:String,autoLocate:Boolean,closeOnClickOutside:a.truthProp,closeOnClickOverlay:a.truthProp,swipeThreshold:a.numericProp},s=Symbol(i),p=(0,l.defineComponent)({name:i,props:c,setup(e,t){var{slots:o}=t,i=(0,n.useId)(),c=(0,l.ref)(),p=(0,l.ref)(),f=(0,l.ref)(0),{children:v,linkChildren:m}=(0,u.useChildren)(s),V=(0,u.useScrollParent)(c),g=(0,l.computed)(()=>v.some(e=>e.state.showWrapper)),h=(0,l.computed)(()=>e.swipeThreshold&&v.length>+e.swipeThreshold),w=(0,l.computed)(()=>{if(g.value&&(0,a.isDef)(e.zIndex))return{zIndex:+e.zIndex+1}}),N=()=>{v.forEach(e=>{e.toggle(!1)})},C=()=>{if(p.value){var t=(0,u.useRect)(p);"down"===e.direction?f.value=t.bottom:f.value=a.windowHeight.value-t.top}},x=e=>{v.forEach((t,o)=>{o===e?t.toggle():t.state.showPopup&&t.toggle(!1,{immediate:!0})})},b=(t,o)=>{var{showPopup:n}=t.state,{disabled:r,titleClass:u}=t;return(0,l.createVNode)("div",{id:"".concat(i,"-").concat(o),role:"button",tabindex:r?void 0:0,class:[d("item",{disabled:r,grow:h.value}),{[a.HAPTICS_FEEDBACK]:!r}],onClick:()=>{!r&&x(o)}},[(0,l.createVNode)("span",{class:[d("title",{down:n===("down"===e.direction),active:n}),u],style:{color:n?e.activeColor:""}},[(0,l.createVNode)("div",{class:"van-ellipsis"},[t.renderTitle()])])])};return(0,r.useExpose)({close:N}),m({id:i,props:e,offset:f,updateOffset:C}),(0,u.useClickAway)(c,()=>{e.closeOnClickOutside&&N()}),(0,u.useEventListener)("scroll",()=>{g.value&&C()},{target:V,passive:!0}),()=>{var e;return(0,l.createVNode)("div",{ref:c,class:d()},[(0,l.createVNode)("div",{ref:p,style:w.value,class:d("bar",{opened:g.value,scrollable:h.value})},[v.map(b)]),null===(e=o.default)||void 0===e?void 0:e.call(o)])}}})},86512:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}}),o("74366"),o("52400"),o("6868"),o("4331");var l=o("69298"),a=o("59633"),[n,r]=(0,a.createNamespace)("loading"),u=Array(12).fill(null).map((e,t)=>(0,l.createVNode)("i",{class:r("line",String(t+1))},null)),i=(0,l.createVNode)("svg",{class:r("circular"),viewBox:"25 25 50 50"},[(0,l.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),d={size:a.numericProp,type:(0,a.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:a.numericProp,textColor:String},c=(0,l.defineComponent)({name:n,props:d,setup(e,t){var{slots:o}=t,n=(0,l.computed)(()=>(0,a.extend)({color:e.color},(0,a.getSizeStyle)(e.size))),d=()=>{var t="spinner"===e.type?u:i;return(0,l.createVNode)("span",{class:r("spinner",e.type),style:n.value},[o.icon?o.icon():t])},c=()=>{if(o.default){var t;return(0,l.createVNode)("span",{class:r("text"),style:{fontSize:(0,a.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[o.default()])}};return()=>{var{type:t,vertical:o}=e;return(0,l.createVNode)("div",{class:r([t,{vertical:o}]),"aria-live":"polite","aria-busy":!0},[d(),c()])}}})},91902:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}}),o("74366"),o("52400");var l=o("69298"),a=o("59633"),n=o("22300"),r=o("4341"),[u,i]=(0,a.createNamespace)("switch"),d={size:a.numericProp,loading:Boolean,disabled:Boolean,modelValue:a.unknownProp,activeColor:String,inactiveColor:String,activeValue:{type:a.unknownProp,default:!0},inactiveValue:{type:a.unknownProp,default:!1}},c=(0,l.defineComponent)({name:u,props:d,emits:["change","update:modelValue"],setup(e,t){var{emit:o,slots:u}=t,d=()=>e.modelValue===e.activeValue,c=()=>{if(!e.disabled&&!e.loading){var t=d()?e.inactiveValue:e.activeValue;o("update:modelValue",t),o("change",t)}},s=()=>{if(e.loading){var t=d()?e.activeColor:e.inactiveColor;return(0,l.createVNode)(r.Loading,{class:i("loading"),color:t},null)}if(u.node)return u.node()};return(0,n.useCustomFieldValue)(()=>e.modelValue),()=>{var t,{size:o,loading:n,disabled:r,activeColor:p,inactiveColor:f}=e,v=d(),m={fontSize:(0,a.addUnit)(o),backgroundColor:v?p:f};return(0,l.createVNode)("div",{role:"switch",class:i({on:v,loading:n,disabled:r}),style:m,tabindex:r?void 0:0,"aria-checked":v,onClick:c},[(0,l.createVNode)("div",{class:i("node")},[s()]),null===(t=u.background)||void 0===t?void 0:t.call(u)])}}})}}]);