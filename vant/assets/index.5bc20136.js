import{V as i}from"./index.fd5fe6e1.js";import{V as C}from"./index.bbd81525.js";import{a as f}from"./index.b70c9b40.js";import{a as _}from"./use-translate.d2900b8c.js";import{D as g}from"./function-call.88939e57.js";import{z as F,C as d,r as U,o as A,a as k,e as l,w as a,B as e,d as w,F as z}from"./vue-libs.b44bc779.js";import"./with-install.19a35764.js";import"./index.4e4daaac.js";import"./use-route.82f2be69.js";import"./mount-component.f3744995.js";import"./use-expose.c942d5f8.js";import"./constant.80c6de18.js";import"./interceptor.f0c85874.js";import"./index.e6e790ed.js";import"./use-touch.04ca7093.js";import"./use-lazy-render.f712e85e.js";import"./on-popup-reopen.138c77eb.js";import"./index.d46e53a8.js";import"./index.8e37fe56.js";import"./index.1e164870.js";import"./use-placeholder.7306f9cf.js";import"./use-height.f6deaa0a.js";const B={class:"icon-wrapper"},X=F({__name:"index",setup(E){const u=_({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customNode:"\u81EA\u5B9A\u4E49\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customNode:"Custom Node",customColor:"Custom Color",asyncControl:"Async Control"}}),n=d(!0),r=d(!0),s=d(!0),p=d(!0),c=d(!0),v=V=>{g.confirm({title:u("title"),message:u("message")}).then(()=>{p.value=V})};return(V,t)=>{const m=U("demo-block");return A(),k(z,null,[l(m,{title:e(u)("basicUsage")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("disabled")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("loadingStatus")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=o=>n.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customSize")},{default:a(()=>[l(e(i),{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=o=>r.value=o),size:"24px"},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customColor")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=o=>s.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customNode")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[5]||(t[5]=o=>s.value=o)},{node:a(()=>[w("div",B,[l(e(f),{name:s.value?"success":"cross"},null,8,["name"])])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("asyncControl")},{default:a(()=>[l(e(i),{"model-value":p.value,"onUpdate:modelValue":v},null,8,["model-value"])]),_:1},8,["title"]),l(m,{title:e(u)("withCell")},{default:a(()=>[l(e(C),{center:"",title:e(u)("title")},{"right-icon":a(()=>[l(e(i),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=o=>c.value=o),size:"24"},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{X as default};