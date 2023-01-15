import{V as i}from"./index-b6f3b2ba.js";import{V as x}from"./index-fbad952d.js";import{V as S}from"./index-4a7db624.js";import{b as C,d as b,c as _,a as V,e as y}from"./data-67c16a28.js";import{a as v}from"./use-translate-bcc9285c.js";import{A as w,u as f,r as k,o as N,c as z,w as a,e as l,C as t,a as P,F as g}from"./vue-libs-b2a2f6f9.js";import{s as h}from"./function-call-57778d4c.js";import"./Picker-6adcd3e8.js";import"./use-expose-52ca271b.js";import"./index-2bd2daba.js";import"./with-install-c0de7835.js";import"./use-touch-8f92051d.js";import"./constant-a81ffd37.js";import"./index-b3b7a677.js";import"./use-id-92cebd14.js";import"./use-route-efd4b866.js";import"./index-48ea421e.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-2274e31b.js";import"./index-3cdd9fde.js";import"./interceptor-e1e3c393.js";import"./index-95093031.js";import"./index-13130ea7.js";import"./use-lazy-render-927fe2b4.js";import"./index-e11a9c16.js";import"./mount-component-23f5a3b8.js";const F=w({__name:"WithPopup",setup(U){const e=v({"zh-CN":{city:"城市",withPopup:"搭配弹出层使用",chooseCity:"选择城市",basicColumns:C["zh-CN"]},"en-US":{city:"City",withPopup:"With Popup",chooseCity:"Choose City",basicColumns:C["en-US"]}}),u=f(!1),m=f(""),p=()=>{u.value=!0},d=()=>{u.value=!1},r=({selectedOptions:o})=>{u.value=!1,m.value=o[0].text};return(o,s)=>{const n=k("demo-block");return N(),z(n,{card:"",title:t(e)("withPopup")},{default:a(()=>[l(t(x),{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=c=>m.value=c),"is-link":"",readonly:"",label:t(e)("city"),placeholder:t(e)("chooseCity"),onClick:p},null,8,["modelValue","label","placeholder"]),l(t(S),{show:u.value,"onUpdate:show":s[1]||(s[1]=c=>u.value=c),round:"",position:"bottom"},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("basicColumns"),onCancel:d,onConfirm:r},null,8,["title","columns"])]),_:1},8,["show"])]),_:1},8,["title"])}}}),nt=w({__name:"index",setup(U){const e=v({"zh-CN":{cascade:"级联选择",modelValue:"双向绑定",showToolbar:"展示顶部栏",dateColumns:b["zh-CN"],basicColumns:C["zh-CN"],defaultIndex:"默认选中项",disableOption:"禁用选项",cascadeColumns:_["zh-CN"],disabledColumns:V["zh-CN"],multipleColumns:"多列选择",customChildrenKey:"自定义 Columns 结构",customChildrenColumns:y["zh-CN"],toastContent:o=>`当前值：${o}`},"en-US":{cascade:"Cascade",modelValue:"v-model",showToolbar:"Show Toolbar",dateColumns:b["en-US"],basicColumns:C["en-US"],defaultIndex:"Default Index",disableOption:"Disable Option",cascadeColumns:_["en-US"],disabledColumns:V["en-US"],multipleColumns:"Multiple Columns",customChildrenKey:"Custom Columns Fields",customChildrenColumns:y["en-US"],toastContent:(o,s)=>`Value: ${o}, Index：${s}`}}),u={text:"cityName",value:"cityName",children:"cities"},m=f(["Wenzhou"]),p=({selectedValues:o})=>{h(e("toastContent",o.join(",")))},d=({selectedValues:o})=>{h(e("toastContent",o.join(",")))},r=()=>h(e("cancel"));return(o,s)=>{const n=k("demo-block");return N(),P(g,null,[l(n,{card:"",title:t(e)("basicUsage")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("basicColumns"),onChange:p,onCancel:r,onConfirm:d},null,8,["title","columns"])]),_:1},8,["title"]),l(F),l(n,{card:"",title:t(e)("modelValue")},{default:a(()=>[l(t(i),{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=c=>m.value=c),title:t(e)("title"),columns:t(e)("basicColumns")},null,8,["modelValue","title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("multipleColumns")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("dateColumns"),onCancel:r,onConfirm:d},null,8,["title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("cascade")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("cascadeColumns")},null,8,["title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("disableOption")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("disabledColumns")},null,8,["title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("loadingStatus")},{default:a(()=>[l(t(i),{loading:"",title:t(e)("title")},null,8,["title"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("customChildrenKey")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("customChildrenColumns"),"columns-field-names":u},null,8,["title","columns"])]),_:1},8,["title"])],64)}}});export{nt as default};
