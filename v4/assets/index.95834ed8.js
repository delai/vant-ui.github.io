import{S as i}from"./index.bc6fa6ce.js";import{C as V}from"./index.fa39f2fa.js";import{I as f}from"./index.17b6eda3.js";import{a as _}from"./use-translate.2660019b.js";import{D as g}from"./function-call.1b1d8310.js";import{A,x as d,r as F,o as U,a as k,e as l,w as a,C as e,d as w,F as x}from"./vue-libs.df86f395.js";import"./with-install.87cec8a5.js";import"./index.c5042094.js";import"./use-route.f401cb95.js";import"./mount-component.eae8658d.js";import"./use-expose.7d65f428.js";import"./constant.80c6de18.js";import"./interceptor.bb19cb80.js";import"./index.721124a6.js";import"./use-touch.d1be10ec.js";import"./use-lazy-render.75150313.js";import"./on-popup-reopen.e1d5c0c5.js";import"./index.6d40715e.js";import"./index.e048a5cb.js";import"./index.41b1f8d5.js";const E={class:"icon-wrapper"},R=A({name:"index",setup(S){const u=_({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customNode:"\u81EA\u5B9A\u4E49\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customNode:"Custom Node",customColor:"Custom Color",asyncControl:"Async Control"}}),s=d(!0),r=d(!0),n=d(!0),p=d(!0),c=d(!0),C=v=>{g.confirm({title:u("title"),message:u("message")}).then(()=>{p.value=v})};return(v,t)=>{const m=F("demo-block");return U(),k(x,null,[l(m,{title:e(u)("basicUsage")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("disabled")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("loadingStatus")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=o=>s.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customSize")},{default:a(()=>[l(e(i),{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=o=>r.value=o),size:"22px"},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customColor")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[4]||(t[4]=o=>n.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customNode")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[5]||(t[5]=o=>n.value=o)},{node:a(()=>[w("div",E,[l(e(f),{name:n.value?"success":"cross"},null,8,["name"])])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("asyncControl")},{default:a(()=>[l(e(i),{"model-value":p.value,"onUpdate:modelValue":C},null,8,["model-value"])]),_:1},8,["title"]),l(m,{title:e(u)("withCell")},{default:a(()=>[l(e(V),{center:"",title:e(u)("title")},{"right-icon":a(()=>[l(e(i),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=o=>c.value=o)},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{R as default};
