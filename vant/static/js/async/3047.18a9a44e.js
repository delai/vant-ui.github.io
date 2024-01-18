/*! For license information please see 3047.18a9a44e.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3047"],{43675:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r("89338");r.es(a,t),r("33303");var n=a.default},89338:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a.default}});var a=r("85244");r.es(a,t)},85244:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r("69298"),n=r("1066"),o=r("54991"),i=r("70656"),u=r("60132"),l=r("53890"),c={style:{}},d={style:{"margin-top":"10px"}},s={style:{"margin-top":"10px"}},f={style:{"margin-top":"10px"}},p={style:{"margin-top":"10px"}},m=(0,a.defineComponent)({__name:"index",setup(e){var t=(0,i.useTranslate)({"zh-CN":{direction:"\u8BBE\u7F6E\u7FFB\u6EDA\u65B9\u5411",stopOrder:"\u8BBE\u7F6E\u5404\u6570\u4F4D\u505C\u6B62\u987A\u5E8F",rollDown:"\u5411\u4E0B\u7FFB\u6EDA",rollUp:"\u5411\u4E0A\u7FFB\u6EDA",stopFrom:"\u4ECE\u4E2A\u4F4D\u505C\u6B62",manualControl:"\u624B\u52A8\u63A7\u5236",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",noNumberType:"\u7FFB\u8F6C\u975E\u6570\u5B57\u5185\u5BB9",start:"\u5F00\u59CB",reset:"\u91CD\u7F6E"},"en-US":{direction:"Set Rolling Direction",stopOrder:"Set Stop Order",rollDown:"Roll Down",rollUp:"Roll Up",stopFrom:"Right Side Stop First",manualControl:"Manual Control",customStyle:"Custom Style",noNumberType:"Roll Non-numeric Text",start:"Start",reset:"Reset"}}),r=(0,a.ref)(!1),m=(0,a.ref)(!1),v=(0,a.ref)(!1),g=(0,a.ref)(!1),h=(0,a.ref)(!1),N=(0,a.ref)(["aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg"]),x=(0,a.ref)(),y=()=>{var e;null===(e=x.value)||void 0===e||e.start()},S=()=>{var e;null===(e=x.value)||void 0===e||e.reset()};return(e,i)=>{var b=(0,a.resolveComponent)("demo-block");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(b,{title:(0,a.unref)(t)("basicUsage")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",c,[(0,a.createVNode)((0,a.unref)(n.default),{"start-num":0,"target-num":123,"auto-start":r.value},null,8,["auto-start"]),(0,a.createElementVNode)("div",d,[(0,a.createVNode)((0,a.unref)(o.default),{onClick:i[0]||(i[0]=()=>r.value=!0),type:"primary"},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("rollDown")),1)]),_:1})])])]),_:1},8,["title"]),(0,a.createVNode)(b,{title:(0,a.unref)(t)("direction")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",null,[(0,a.createVNode)((0,a.unref)(n.default),{"start-num":0,"target-num":432,"auto-start":m.value,direction:"up"},null,8,["auto-start"]),(0,a.createElementVNode)("div",s,[(0,a.createVNode)((0,a.unref)(o.default),{onClick:i[1]||(i[1]=()=>m.value=!0),type:"primary"},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("rollUp")),1)]),_:1})])])]),_:1},8,["title"]),(0,a.createVNode)(b,{title:(0,a.unref)(t)("stopOrder")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",null,[(0,a.createVNode)((0,a.unref)(n.default),{"start-num":0,"target-num":54321,"auto-start":v.value,"stop-order":"rtl"},null,8,["auto-start"]),(0,a.createElementVNode)("div",f,[(0,a.createVNode)((0,a.unref)(o.default),{onClick:i[2]||(i[2]=()=>v.value=!0),type:"primary"},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("stopFrom")),1)]),_:1})])])]),_:1},8,["title"]),(0,a.createVNode)(b,{title:(0,a.unref)(t)("noNumberType")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",null,[(0,a.createVNode)((0,a.unref)(n.default),{"text-list":N.value,duration:1,"auto-start":h.value},null,8,["text-list","auto-start"]),(0,a.createElementVNode)("div",p,[(0,a.createVNode)((0,a.unref)(o.default),{onClick:i[3]||(i[3]=()=>h.value=!0),type:"primary"},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("start")),1)]),_:1})])])]),_:1},8,["title"]),(0,a.createVNode)(b,{title:(0,a.unref)(t)("customStyle")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",null,[(0,a.createVNode)((0,a.unref)(n.default),{class:"my-rolling-text","start-num":12345,"target-num":54321,"auto-start":g.value,height:54},null,8,["auto-start"])])]),_:1},8,["title"]),(0,a.createVNode)(b,{title:(0,a.unref)(t)("manualControl")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",null,[(0,a.createVNode)((0,a.unref)(n.default),{class:"my-rolling-text",ref_key:"rollingTextRef",ref:x,"start-num":0,"target-num":54321,"auto-start":!1,height:54},null,512),(0,a.createVNode)((0,a.unref)(u.default),{clickable:"","column-num":2,style:{"margin-top":"10px"}},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(l.default),{icon:"play-circle-o",text:(0,a.unref)(t)("start"),onClick:y},null,8,["text"]),(0,a.createVNode)((0,a.unref)(l.default),{icon:"replay",text:(0,a.unref)(t)("reset"),onClick:S},null,8,["text"])]),_:1})])]),_:1},8,["title"])],64)}}})},3042:function(e,t,r){"use strict";r.r(t),r.d(t,{Badge:function(){return o},default:function(){return i}});var a=r("59633"),n=r("14733"),o=(0,a.withInstall)(n.default),i=o},54991:function(e,t,r){"use strict";r.r(t),r.d(t,{Button:function(){return o},default:function(){return i}});var a=r("59633"),n=r("34396"),o=(0,a.withInstall)(n.default),i=o},29067:function(e,t,r){"use strict";r.r(t),r.d(t,{useExpose:function(){return o}});var a=r("69298"),n=r("59633");function o(e){var t=(0,a.getCurrentInstance)();t&&(0,n.extend)(t.proxy,e)}},15057:function(e,t,r){"use strict";r.r(t),r.d(t,{setGlobalZIndex:function(){return o},useGlobalZIndex:function(){return n}});var a=2e3,n=()=>++a,o=e=>{a=e}},3578:function(e,t,r){"use strict";r.r(t),r.d(t,{route:function(){return o},routeProps:function(){return n},useRoute:function(){return i}}),r("56821"),r("5780");var a=r("69298"),n={to:[String,Object],url:String,replace:Boolean};function o(e){var{to:t,url:r,replace:a,$router:n}=e;t&&n?n[a?"replace":"push"](t):r&&(a?location.replace(r):location.href=r)}function i(){var e=(0,a.getCurrentInstance)().proxy;return()=>o(e)}},53890:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r("59633"),n=r("65597"),o=(0,a.withInstall)(n.default)},60132:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r("59633"),n=r("99551"),o=(0,a.withInstall)(n.default)},57739:function(e,t,r){"use strict";r.r(t),r.d(t,{Icon:function(){return o},default:function(){return i}});var a=r("59633"),n=r("43051"),o=(0,a.withInstall)(n.default),i=o},4341:function(e,t,r){"use strict";r.r(t),r.d(t,{Loading:function(){return o},default:function(){return i}});var a=r("59633"),n=r("86512"),o=(0,a.withInstall)(n.default),i=o},1066:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r("59633"),n=r("78940"),o=(0,a.withInstall)(n.default)},14733:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}}),r("74366"),r("52400"),r("56821"),r("5780"),r("22584");var a=r("69298"),n=r("59633"),[o,i]=(0,n.createNamespace)("badge"),u={dot:Boolean,max:n.numericProp,tag:(0,n.makeStringProp)("div"),color:String,offset:Array,content:n.numericProp,showZero:n.truthProp,position:(0,n.makeStringProp)("top-right")},l=(0,a.defineComponent)({name:o,props:u,setup(e,t){var{slots:r}=t,o=()=>{if(r.content)return!0;var{content:t,showZero:a}=e;return(0,n.isDef)(t)&&""!==t&&(a||0!==t&&"0"!==t)},u=()=>{var{dot:t,max:a,content:i}=e;if(!t&&o())return r.content?r.content():(0,n.isDef)(a)&&(0,n.isNumeric)(i)&&+i>+a?"".concat(a,"+"):i},l=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),c=(0,a.computed)(()=>{var t={background:e.color};if(e.offset){var[a,o]=e.offset,{position:i}=e,[u,c]=i.split("-");r.default?("number"==typeof o?t[u]=(0,n.addUnit)("top"===u?o:-o):t[u]="top"===u?(0,n.addUnit)(o):l(o),"number"==typeof a?t[c]=(0,n.addUnit)("left"===c?a:-a):t[c]="left"===c?(0,n.addUnit)(a):l(a)):(t.marginTop=(0,n.addUnit)(o),t.marginLeft=(0,n.addUnit)(a))}return t}),d=()=>{if(o()||e.dot)return(0,a.createVNode)("div",{class:i([e.position,{dot:e.dot,fixed:!!r.default}]),style:c.value},[u()])};return()=>{if(r.default){var{tag:t}=e;return(0,a.createVNode)(t,{class:i("wrapper")},{default:()=>[r.default(),d()]})}return d()}}})},34396:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("74366"),r("52400"),r("20964");var a=r("69298"),n=r("59633"),o=r("3578"),i=r("57739"),u=r("4341"),[l,c]=(0,n.createNamespace)("button"),d=(0,n.extend)({},o.routeProps,{tag:(0,n.makeStringProp)("button"),text:String,icon:String,type:(0,n.makeStringProp)("default"),size:(0,n.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,n.makeStringProp)("button"),loadingSize:n.numericProp,loadingText:String,loadingType:String,iconPosition:(0,n.makeStringProp)("left")}),s=(0,a.defineComponent)({name:l,props:d,emits:["click"],setup(e,t){var{emit:r,slots:l}=t,d=(0,o.useRoute)(),s=()=>l.loading?l.loading():(0,a.createVNode)(u.Loading,{size:e.loadingSize,type:e.loadingType,class:c("loading")},null),f=()=>e.loading?s():l.icon?(0,a.createVNode)("div",{class:c("icon")},[l.icon()]):e.icon?(0,a.createVNode)(i.Icon,{name:e.icon,class:c("icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{var t;if(t=e.loading?e.loadingText:l.default?l.default():e.text)return(0,a.createVNode)("span",{class:c("text")},[t])},m=()=>{var{color:t,plain:r}=e;if(t){var a={color:r?t:"white"};return!r&&(a.background=t),t.includes("gradient")?a.border=0:a.borderColor=t,a}},v=t=>{e.loading?(0,n.preventDefault)(t):!e.disabled&&(r("click",t),d())};return()=>{var{tag:t,type:r,size:o,block:i,round:u,plain:l,square:d,loading:s,disabled:g,hairline:h,nativeType:N,iconPosition:x}=e,y=[c([r,o,{plain:l,block:i,round:u,square:d,loading:s,disabled:g,hairline:h}]),{[n.BORDER_SURROUND]:h}];return(0,a.createVNode)(t,{type:N,class:y,style:m(),disabled:g,onClick:v},{default:()=>[(0,a.createVNode)("div",{class:c("content")},["left"===x&&f(),p(),"right"===x&&f()])]})}}})},95198:function(e,t,r){"use strict";r.r(t),r.d(t,{CONFIG_PROVIDER_KEY:function(){return l},default:function(){return s}}),r("74366"),r("52400"),r("95818"),r("56821"),r("5780"),r("76959"),r("11057"),r("64667");var a=r("69298"),n=r("59633"),o=r("15057"),[i,u]=(0,n.createNamespace)("config-provider"),l=Symbol(i),c={tag:(0,n.makeStringProp)("div"),theme:(0,n.makeStringProp)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,n.makeStringProp)("local"),iconPrefix:String};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(r=>{e[r]!==t[r]&&document.documentElement.style.setProperty(r,e[r])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}var s=(0,a.defineComponent)({name:i,props:c,setup(e,t){var{slots:r}=t,i=(0,a.computed)(()=>{var t,r;return t=(0,n.extend)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),r={},Object.keys(t).forEach(e=>{var a=(0,n.kebabCase)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");r["--van-".concat(a)]=t[e]}),r});if(n.inBrowser){var c=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,a.watch)(()=>e.theme,(e,t)=>{t&&s(t),c()},{immediate:!0}),(0,a.onActivated)(c),(0,a.onDeactivated)(s),(0,a.onBeforeUnmount)(s),(0,a.watch)(i,(t,r)=>{"global"===e.themeVarsScope&&d(t,r)}),(0,a.watch)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&d({},i.value),"global"===e&&d(i.value,{})}),"global"===e.themeVarsScope&&d(i.value,{})}return(0,a.provide)(l,e),(0,a.watchEffect)(()=>{void 0!==e.zIndex&&(0,o.setGlobalZIndex)(e.zIndex)}),()=>(0,a.createVNode)(e.tag,{class:u(),style:"local"===e.themeVarsScope?i.value:void 0},{default:()=>{var e;return[null===(e=r.default)||void 0===e?void 0:e.call(r)]}})}})},65597:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}}),r("74366"),r("52400"),r("92271");var a=r("69298"),n=r("59633"),o=r("99551"),i=r("22300"),u=r("3578"),l=r("57739"),c=r("3042"),[d,s]=(0,n.createNamespace)("grid-item"),f=(0,n.extend)({},u.routeProps,{dot:Boolean,text:String,icon:String,badge:n.numericProp,iconColor:String,iconPrefix:String,badgeProps:Object}),p=(0,a.defineComponent)({name:d,props:f,setup(e,t){var{slots:r}=t,{parent:d,index:f}=(0,i.useParent)(o.GRID_KEY),p=(0,u.useRoute)();if(d){var m=(0,a.computed)(()=>{var{square:e,gutter:t,columnNum:r}=d.props,a="".concat(100/+r,"%"),o={flexBasis:a};if(e)o.paddingTop=a;else if(t){var i=(0,n.addUnit)(t);o.paddingRight=i,f.value>=+r&&(o.marginTop=i)}return o}),v=(0,a.computed)(()=>{var{square:e,gutter:t}=d.props;if(e&&t){var r=(0,n.addUnit)(t);return{right:r,bottom:r,height:"auto"}}}),g=()=>r.icon?(0,a.createVNode)(c.Badge,(0,a.mergeProps)({dot:e.dot,content:e.badge},e.badgeProps),{default:r.icon}):e.icon?(0,a.createVNode)(l.Icon,{dot:e.dot,name:e.icon,size:d.props.iconSize,badge:e.badge,class:s("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,h=()=>r.text?r.text():e.text?(0,a.createVNode)("span",{class:s("text")},[e.text]):void 0,N=()=>r.default?r.default():[g(),h()];return()=>{var{center:e,border:t,square:r,gutter:o,reverse:i,direction:u,clickable:l}=d.props,c=[s("content",[u,{center:e,square:r,reverse:i,clickable:l,surround:t&&o}]),{[n.BORDER]:t}];return(0,a.createVNode)("div",{class:[s({square:r})],style:m.value},[(0,a.createVNode)("div",{role:l?"button":void 0,class:c,style:v.value,tabindex:l?0:void 0,onClick:p},[N()])])}}}})},99551:function(e,t,r){"use strict";r.r(t),r.d(t,{GRID_KEY:function(){return d},default:function(){return s}}),r("74366"),r("52400"),r("95818");var a=r("69298"),n=r("59633"),o=r("70963"),i=r("22300"),[u,l]=(0,n.createNamespace)("grid"),c={square:Boolean,center:n.truthProp,border:n.truthProp,gutter:n.numericProp,reverse:Boolean,iconSize:n.numericProp,direction:String,clickable:Boolean,columnNum:(0,n.makeNumericProp)(4)},d=Symbol(u),s=(0,a.defineComponent)({name:u,props:c,setup(e,t){var{slots:r}=t,{linkChildren:u}=(0,i.useChildren)(d);return u({props:e}),()=>{var t;return(0,a.createVNode)("div",{style:{paddingLeft:(0,n.addUnit)(e.gutter)},class:[l(),{[o.BORDER_TOP]:e.border&&!e.gutter}]},[null===(t=r.default)||void 0===t?void 0:t.call(r)])}}})},43051:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("74366"),r("52400"),r("20964");var a=r("69298"),n=r("59633"),o=r("3042"),i=r("95198"),[u,l]=(0,n.createNamespace)("icon"),c=e=>null==e?void 0:e.includes("/"),d={dot:Boolean,tag:(0,n.makeStringProp)("i"),name:String,size:n.numericProp,badge:n.numericProp,color:String,badgeProps:Object,classPrefix:String},s=(0,a.defineComponent)({name:u,props:d,setup(e,t){var{slots:r}=t,u=(0,a.inject)(i.CONFIG_PROVIDER_KEY,null),d=(0,a.computed)(()=>e.classPrefix||(null==u?void 0:u.iconPrefix)||l());return()=>{var{tag:t,dot:i,name:u,size:s,badge:f,color:p}=e,m=c(u);return(0,a.createVNode)(o.Badge,(0,a.mergeProps)({dot:i,tag:t,class:[d.value,m?"":"".concat(d.value,"-").concat(u)],style:{color:p,fontSize:(0,n.addUnit)(s)},content:f},e.badgeProps),{default:()=>{var e;return[null===(e=r.default)||void 0===e?void 0:e.call(r),m&&(0,a.createVNode)("img",{class:l("image"),src:u},null)]}})}}})},86512:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r("74366"),r("52400"),r("6868"),r("4331");var a=r("69298"),n=r("59633"),[o,i]=(0,n.createNamespace)("loading"),u=Array(12).fill(null).map((e,t)=>(0,a.createVNode)("i",{class:i("line",String(t+1))},null)),l=(0,a.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,a.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),c={size:n.numericProp,type:(0,n.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:n.numericProp,textColor:String},d=(0,a.defineComponent)({name:o,props:c,setup(e,t){var{slots:r}=t,o=(0,a.computed)(()=>(0,n.extend)({color:e.color},(0,n.getSizeStyle)(e.size))),c=()=>{var t="spinner"===e.type?u:l;return(0,a.createVNode)("span",{class:i("spinner",e.type),style:o.value},[r.icon?r.icon():t])},d=()=>{if(r.default){var t;return(0,a.createVNode)("span",{class:i("text"),style:{fontSize:(0,n.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[r.default()])}};return()=>{var{type:t,vertical:r}=e;return(0,a.createVNode)("div",{class:i([t,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[c(),d()])}}})},78940:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("74366"),r("52400"),r("14078"),r("22584"),r("5780"),r("6868"),r("4331");var a=r("69298"),n=r("22300"),o=r("59633"),i=r("29067"),u=r("28279"),[l,c]=(0,o.createNamespace)("rolling-text"),d={startNum:(0,o.makeNumberProp)(0),targetNum:Number,textList:(0,o.makeArrayProp)(),duration:(0,o.makeNumberProp)(2),autoStart:o.truthProp,direction:(0,o.makeStringProp)("down"),stopOrder:(0,o.makeStringProp)("ltr"),height:(0,o.makeNumberProp)(40)},s=(0,a.defineComponent)({name:l,props:d,setup(e){var t=(0,a.computed)(()=>Array.isArray(e.textList)&&e.textList.length),r=(0,a.computed)(()=>t.value?e.textList[0].length:"".concat(Math.max(e.startNum,e.targetNum)).length),l=t=>{for(var r=[],a=0;a<e.textList.length;a++)r.push(e.textList[a][t]);return r},d=(0,a.computed)(()=>t.value?Array(r.value).fill(""):(0,o.padZero)(e.targetNum,r.value).split("")),s=(0,a.computed)(()=>(0,o.padZero)(e.startNum,r.value).split("")),f=e=>{for(var t=+s.value[e],r=+d.value[e],a=[],n=t;n<=9;n++)a.push(n);for(var o=0;o<=2;o++)for(var i=0;i<=9;i++)a.push(i);for(var u=0;u<=r;u++)a.push(u);return a},p=(t,r)=>"ltr"===e.stopOrder?.2*t:.2*(r-1-t),m=(0,a.ref)(e.autoStart),v=()=>{m.value=!0};return(0,a.watch)(()=>e.autoStart,e=>{e&&v()}),(0,i.useExpose)({start:v,reset:()=>{m.value=!1,e.autoStart&&(0,n.raf)(()=>v())}}),()=>(0,a.createVNode)("div",{class:c()},[d.value.map((n,o)=>(0,a.createVNode)(u.default,{figureArr:t.value?l(o):f(o),duration:e.duration,direction:e.direction,isStart:m.value,height:e.height,delay:p(o,r.value)},null))])}})},28279:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}}),r("74366"),r("52400"),r("92271"),r("6868"),r("4331");var a=r("69298"),n=r("59633"),o={figureArr:(0,n.makeArrayProp)(),delay:Number,duration:(0,n.makeNumberProp)(2),isStart:Boolean,direction:(0,n.makeStringProp)("down"),height:(0,n.makeNumberProp)(40)},[i,u]=(0,n.createNamespace)("rolling-text-item"),l=(0,a.defineComponent)({name:i,props:o,setup(e){var t=(0,a.computed)(()=>"down"===e.direction?e.figureArr.slice().reverse():e.figureArr),r=(0,a.computed)(()=>{var t=e.height*(e.figureArr.length-1);return"-".concat(t,"px")}),o=(0,a.computed)(()=>({lineHeight:(0,n.addUnit)(e.height)})),i=(0,a.computed)(()=>({height:(0,n.addUnit)(e.height),"--van-translate":r.value,"--van-duration":e.duration+"s","--van-delay":e.delay+"s"}));return()=>(0,a.createVNode)("div",{class:u([e.direction]),style:i.value},[(0,a.createVNode)("div",{class:u("box",{animate:e.isStart})},[Array.isArray(t.value)&&t.value.map(e=>(0,a.createVNode)("div",{class:u("item"),style:o.value},[e]))])])}})},33303:function(e){},63397:function(e){}}]);