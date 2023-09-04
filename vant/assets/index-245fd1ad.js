import{B as S}from"./index-7adfa50f.js";import{R as C,a as I}from"./index-88729338.js";import{T as y}from"./index-499fb192.js";import{I as L}from"./index-f96e8fc9.js";import{C as v}from"./index-ba3884dc.js";import{A as g,e as s,Q as h,y as A,r as B,o as V,c as D,w as j,C as c}from"./vue-libs-19c20d28.js";import{d as P,m as k,b as T,n as $,t as p,w as N}from"./with-install-560d59bf.js";import{e as O,c as _,a as R}from"./use-translate-71d4880c.js";import{s as x}from"./function-call-976f76a9.js";import"./use-route-751feeeb.js";import"./index-2b75ebd8.js";import"./constant-ee6e27d7.js";import"./Checker-18cdaafb.js";import"./index-8bc2514f.js";import"./mount-component-b555bf78.js";import"./use-expose-80cfd2b2.js";import"./index-51f5d3c5.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-cd342d67.js";import"./interceptor-07dc6e0f.js";function E(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!h(e)}const[U,u]=_("address-item"),z=g({name:U,props:{address:P(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String,rightIcon:k("edit")},emits:["edit","click","select"],setup(e,{slots:t,emit:o}){const m=()=>{e.switchable&&o("select"),o("click")},l=()=>s(L,{name:e.rightIcon,class:u("edit"),onClick:d=>{d.stopPropagation(),o("edit"),o("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return s(y,{type:"primary",round:!0,class:u("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:i,switchable:r}=e,n=[s("div",{class:u("name")},[`${d.name} ${d.tel}`,f()]),s("div",{class:u("address")},[d.address])];return r&&!i?s(C,{name:d.id,iconSize:18},E(n)?n:{default:()=>[n]}):n};return()=>{var i;const{disabled:d}=e;return s("div",{class:u({disabled:d}),onClick:m},[s(v,{border:!1,titleClass:u("title")},{title:a,"right-icon":l}),(i=t.bottom)==null?void 0:i.call(t,O({},e.address,{disabled:d}))])}}});function q(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!h(e)}const[G,b,J]=_("address-list"),Q={list:T(),modelValue:$,switchable:p,disabledText:String,disabledList:T(),showAddButton:p,addButtonText:String,defaultTagText:String,rightIcon:k("edit")},F=g({name:G,props:Q,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:t,emit:o}){const m=(a,d,i)=>{const r=()=>o(i?"editDisabled":"edit",a,d),n=()=>o("clickItem",a,d),w=()=>{o(i?"selectDisabled":"select",a,d),i||o("update:modelValue",a.id)};return s(z,{key:a.id,address:a,disabled:i,switchable:e.switchable,defaultTagText:e.defaultTagText,rightIcon:e.rightIcon,onEdit:r,onClick:n,onSelect:w},{bottom:t["item-bottom"],tag:t.tag})},l=(a,d)=>{if(a)return a.map((i,r)=>m(i,r,d))},f=()=>e.showAddButton?s("div",{class:[b("bottom"),"van-safe-area-bottom"]},[s(S,{round:!0,block:!0,type:"primary",text:e.addButtonText||J("add"),class:b("add"),onClick:()=>o("add")},null)]):void 0;return()=>{var r,n;const a=l(e.list),d=l(e.disabledList,!0),i=e.disabledText&&s("div",{class:b("disabled-text")},[e.disabledText]);return s("div",{class:b()},[(r=t.top)==null?void 0:r.call(t),s(I,{modelValue:e.modelValue},q(a)?a:{default:()=>[a]}),i,d,(n=t.default)==null?void 0:n.call(t),f()])}}}),H=N(F),K=H,xe=g({__name:"index",setup(e){const t=R({"zh-CN":{list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",isDefault:!0},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}],add:"新增地址",edit:"编辑地址",disabledText:"以下地址超出配送范围",defaultTagText:"默认"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),o=A("1"),m=()=>{x(t("add"))},l=(f,a)=>{x(`${t("edit")}:${a}`)};return(f,a)=>{const d=B("demo-block");return V(),D(d,{title:c(t)("basicUsage")},{default:j(()=>[s(c(K),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),list:c(t)("list"),"disabled-list":c(t)("disabledList"),"disabled-text":c(t)("disabledText"),"default-tag-text":c(t)("defaultTagText"),onAdd:m,onEdit:l},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{xe as default};