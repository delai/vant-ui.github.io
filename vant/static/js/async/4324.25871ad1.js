/*! For license information please see 4324.25871ad1.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4324"],{9489:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r("22624");r.es(a,t),r("8956");var n=a.default},22624:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a.default}});var a=r("96670");r.es(a,t)},96670:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r("38613"),n=r("7416"),o=r("13820"),u=r("25486"),l=(0,a.defineComponent)({__name:"index",setup(e){var t=(0,u.useTranslate)({"zh-CN":{title2:"\u7B80\u5355\u6A21\u5F0F",title3:"\u663E\u793A\u7701\u7565\u53F7",title4:"\u81EA\u5B9A\u4E49\u6309\u94AE",prevText:"\u4E0A\u4E00\u9875",nextText:"\u4E0B\u4E00\u9875"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}}),r=(0,a.ref)(1),l=(0,a.ref)(1),i=(0,a.ref)(1),c=(0,a.ref)(1);return(e,u)=>{var d=(0,a.resolveComponent)("demo-block");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(d,{title:(0,a.unref)(t)("basicUsage")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=e=>r.value=e),"total-items":24,"items-per-page":5,"prev-text":(0,a.unref)(t)("prevText"),"next-text":(0,a.unref)(t)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),(0,a.createVNode)(d,{title:(0,a.unref)(t)("title2")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=e=>l.value=e),"page-count":12,"prev-text":(0,a.unref)(t)("prevText"),"next-text":(0,a.unref)(t)("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),(0,a.createVNode)(d,{title:(0,a.unref)(t)("title3")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=e=>i.value=e),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":(0,a.unref)(t)("prevText"),"next-text":(0,a.unref)(t)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),(0,a.createVNode)(d,{title:(0,a.unref)(t)("title4")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{modelValue:c.value,"onUpdate:modelValue":u[3]||(u[3]=e=>c.value=e),"total-items":125,"show-page-size":5},{"prev-text":(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{name:"arrow-left"})]),"next-text":(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{name:"arrow"})]),page:(0,a.withCtx)(e=>{var{text:t}=e;return[(0,a.createTextVNode)((0,a.toDisplayString)(t),1)]}),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}})},13453:function(e,t,r){"use strict";r.r(t),r.d(t,{Badge:function(){return o},default:function(){return u}});var a=r("96040"),n=r("33949"),o=(0,a.withInstall)(n.default),u=o},92324:function(e,t,r){"use strict";r.r(t),r.d(t,{useGlobalZIndex:function(){return n},setGlobalZIndex:function(){return o}});var a=2e3,n=()=>++a,o=e=>{a=e}},13820:function(e,t,r){"use strict";r.r(t),r.d(t,{Icon:function(){return o},default:function(){return u}});var a=r("96040"),n=r("28010"),o=(0,a.withInstall)(n.default),u=o},7416:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r("96040"),n=r("22279"),o=(0,a.withInstall)(n.default)},33949:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}}),r("97381"),r("8781"),r("53951"),r("28067"),r("75634");var a=r("38613"),n=r("96040"),[o,u]=(0,n.createNamespace)("badge"),l={dot:Boolean,max:n.numericProp,tag:(0,n.makeStringProp)("div"),color:String,offset:Array,content:n.numericProp,showZero:n.truthProp,position:(0,n.makeStringProp)("top-right")},i=(0,a.defineComponent)({name:o,props:l,setup(e,t){var{slots:r}=t,o=()=>{if(r.content)return!0;var{content:t,showZero:a}=e;return(0,n.isDef)(t)&&""!==t&&(a||0!==t&&"0"!==t)},l=()=>{var{dot:t,max:a,content:u}=e;if(!t&&o())return r.content?r.content():(0,n.isDef)(a)&&(0,n.isNumeric)(u)&&+u>+a?"".concat(a,"+"):u},i=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),c=(0,a.computed)(()=>{var t={background:e.color};if(e.offset){var[a,o]=e.offset,{position:u}=e,[l,c]=u.split("-");r.default?("number"==typeof o?t[l]=(0,n.addUnit)("top"===l?o:-o):t[l]="top"===l?(0,n.addUnit)(o):i(o),"number"==typeof a?t[c]=(0,n.addUnit)("left"===c?a:-a):t[c]="left"===c?(0,n.addUnit)(a):i(a)):(t.marginTop=(0,n.addUnit)(o),t.marginLeft=(0,n.addUnit)(a))}return t}),d=()=>{if(o()||e.dot)return(0,a.createVNode)("div",{class:u([e.position,{dot:e.dot,fixed:!!r.default}]),style:c.value},[l()])};return()=>{if(r.default){var{tag:t}=e;return(0,a.createVNode)(t,{class:u("wrapper")},{default:()=>[r.default(),d()]})}return d()}}})},58366:function(e,t,r){"use strict";r.r(t),r.d(t,{CONFIG_PROVIDER_KEY:function(){return i},default:function(){return s}}),r("97381"),r("8781"),r("25264"),r("53951"),r("28067"),r("63145"),r("68900"),r("45145");var a=r("38613"),n=r("96040"),o=r("92324"),[u,l]=(0,n.createNamespace)("config-provider"),i=Symbol(u),c={tag:(0,n.makeStringProp)("div"),theme:(0,n.makeStringProp)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,n.makeStringProp)("local"),iconPrefix:String};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(r=>{e[r]!==t[r]&&document.documentElement.style.setProperty(r,e[r])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}var s=(0,a.defineComponent)({name:u,props:c,setup(e,t){var{slots:r}=t,u=(0,a.computed)(()=>{var t,r;return t=(0,n.extend)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),r={},Object.keys(t).forEach(e=>{var a=(0,n.kebabCase)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");r["--van-".concat(a)]=t[e]}),r});if(n.inBrowser){var c=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,a.watch)(()=>e.theme,(e,t)=>{t&&s(t),c()},{immediate:!0}),(0,a.onActivated)(c),(0,a.onDeactivated)(s),(0,a.onBeforeUnmount)(s),(0,a.watch)(u,(t,r)=>{"global"===e.themeVarsScope&&d(t,r)}),(0,a.watch)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&d({},u.value),"global"===e&&d(u.value,{})}),"global"===e.themeVarsScope&&d(u.value,{})}return(0,a.provide)(i,e),(0,a.watchEffect)(()=>{void 0!==e.zIndex&&(0,o.setGlobalZIndex)(e.zIndex)}),()=>(0,a.createVNode)(e.tag,{class:l(),style:"local"===e.themeVarsScope?u.value:void 0},{default:()=>{var e;return[null===(e=r.default)||void 0===e?void 0:e.call(r)]}})}})},28010:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r("97381"),r("8781"),r("5737");var a=r("38613"),n=r("96040"),o=r("13453"),u=r("58366"),[l,i]=(0,n.createNamespace)("icon"),c=e=>null==e?void 0:e.includes("/"),d={dot:Boolean,tag:(0,n.makeStringProp)("i"),name:String,size:n.numericProp,badge:n.numericProp,color:String,badgeProps:Object,classPrefix:String},s=(0,a.defineComponent)({name:l,props:d,setup(e,t){var{slots:r}=t,l=(0,a.inject)(u.CONFIG_PROVIDER_KEY,null),d=(0,a.computed)(()=>e.classPrefix||(null==l?void 0:l.iconPrefix)||i());return()=>{var{tag:t,dot:u,name:l,size:s,badge:f,color:m}=e,p=c(l);return(0,a.createVNode)(o.Badge,(0,a.mergeProps)({dot:u,tag:t,class:[d.value,p?"":"".concat(d.value,"-").concat(l)],style:{color:m,fontSize:(0,n.addUnit)(s)},content:f},e.badgeProps),{default:()=>{var e;return[null===(e=r.default)||void 0===e?void 0:e.call(r),p&&(0,a.createVNode)("img",{class:i("image"),src:l},null)]}})}}})},22279:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r("97381"),r("8781"),r("82623"),r("72659"),r("90517"),r("54368");var a=r("38613"),n=r("96040"),[o,u,l]=(0,n.createNamespace)("pagination"),i=(e,t,r)=>({number:e,text:t,active:r}),c={mode:(0,n.makeStringProp)("multi"),prevText:String,nextText:String,pageCount:(0,n.makeNumericProp)(0),modelValue:(0,n.makeNumberProp)(0),totalItems:(0,n.makeNumericProp)(0),showPageSize:(0,n.makeNumericProp)(5),itemsPerPage:(0,n.makeNumericProp)(10),forceEllipses:Boolean,showPrevButton:n.truthProp,showNextButton:n.truthProp},d=(0,a.defineComponent)({name:o,props:c,emits:["change","update:modelValue"],setup(e,t){var{emit:r,slots:o}=t,c=(0,a.computed)(()=>{var{pageCount:t,totalItems:r,itemsPerPage:a}=e;return Math.max(1,+t||Math.ceil(+r/+a))}),d=(0,a.computed)(()=>{var t=[],r=c.value,a=+e.showPageSize,{modelValue:n,forceEllipses:o}=e,u=1,l=r,d=a<r;d&&(l=(u=Math.max(n-Math.floor(a/2),1))+a-1)>r&&(u=(l=r)-a+1);for(var s=u;s<=l;s++){var f=i(s,s,s===n);t.push(f)}if(d&&a>0&&o){if(u>1){var m=i(u-1,"...");t.unshift(m)}if(l<r){var p=i(l+1,"...");t.push(p)}}return t}),s=(t,a)=>{t=(0,n.clamp)(t,1,c.value),e.modelValue!==t&&(r("update:modelValue",t),a&&r("change",t))};(0,a.watchEffect)(()=>s(e.modelValue));var f=()=>(0,a.createVNode)("li",{class:u("page-desc")},[o.pageDesc?o.pageDesc():"".concat(e.modelValue,"/").concat(c.value)]),m=()=>{var{mode:t,modelValue:r,showPrevButton:i}=e;if(i){var c=o["prev-text"],d=1===r;return(0,a.createVNode)("li",{class:[u("item",{disabled:d,border:"simple"===t,prev:!0}),n.BORDER_SURROUND]},[(0,a.createVNode)("button",{type:"button",disabled:d,onClick:()=>s(r-1,!0)},[c?c():e.prevText||l("prev")])])}},p=()=>{var{mode:t,modelValue:r,showNextButton:i}=e;if(i){var d=o["next-text"],f=r===c.value;return(0,a.createVNode)("li",{class:[u("item",{disabled:f,border:"simple"===t,next:!0}),n.BORDER_SURROUND]},[(0,a.createVNode)("button",{type:"button",disabled:f,onClick:()=>s(r+1,!0)},[d?d():e.nextText||l("next")])])}},v=()=>d.value.map(e=>(0,a.createVNode)("li",{class:[u("item",{active:e.active,page:!0}),n.BORDER_SURROUND]},[(0,a.createVNode)("button",{type:"button","aria-current":e.active||void 0,onClick:()=>s(e.number,!0)},[o.page?o.page(e):e.text])]));return()=>(0,a.createVNode)("nav",{role:"navigation",class:u()},[(0,a.createVNode)("ul",{class:u("items")},[m(),"simple"===e.mode?f():v(),p()])])}})},8956:function(e,t,r){},74851:function(e,t,r){}}]);