import{V as n}from"./index-773ab3ce.js";import{a as F}from"./use-translate-bcc9285c.js";import{A as h,u as a,r as x,o as g,a as C,e as l,w as u,C as t,F as U}from"./vue-libs-b2a2f6f9.js";import"./utils-f7b14547.js";import"./Picker-71c38369.js";import"./use-expose-52ca271b.js";import"./index-2bd2daba.js";import"./with-install-c0de7835.js";import"./use-touch-8f92051d.js";import"./constant-a81ffd37.js";import"./index-2942c68e.js";import"./use-id-92cebd14.js";import"./use-route-efd4b866.js";import"./index-ce56f8fe.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-2274e31b.js";import"./index-3cdd9fde.js";import"./interceptor-e1e3c393.js";import"./index-c24b6ed2.js";const K=h({__name:"index",setup(_){const o=F({"zh-CN":{hour:"时",minute:"分",timeRange:"时间范围",chooseTime:"选择时间",columnsType:"选项类型",optionsFilter:"过滤选项",optionsFormatter:"格式化选项"},"en-US":{hour:"h",minute:"m",timeRange:"Time Range",chooseTime:"Choose Time",columnsType:"Columns Type",optionsFilter:"Options Filter",optionsFormatter:"Options Formatter"}}),s=a(["12","00"]),p=a(["12","00","00"]),d=a(["12","35"]),c=a(["12"," 00"]),f=a(["12","00"]),T=["hour","minute","second"],V=(r,e)=>r==="minute"?e.filter(i=>Number(i.value)%10===0):e,v=(r,e)=>(r==="hour"&&(e.text+=o("hour")),r==="minute"&&(e.text+=o("minute")),e);return(r,e)=>{const i=x("demo-block");return g(),C(U,null,[l(i,{card:"",title:t(o)("basicUsage")},{default:u(()=>[l(t(n),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=m=>s.value=m),title:t(o)("chooseTime")},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("columnsType")},{default:u(()=>[l(t(n),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=m=>p.value=m),title:t(o)("chooseTime"),"columns-type":T},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("timeRange")},{default:u(()=>[l(t(n),{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=m=>d.value=m),title:t(o)("chooseTime"),"min-hour":10,"max-hour":20,"min-minute":30,"max-minute":40},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("optionsFormatter")},{default:u(()=>[l(t(n),{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=m=>f.value=m),title:t(o)("chooseTime"),formatter:v},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("optionsFilter")},{default:u(()=>[l(t(n),{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=m=>c.value=m),title:t(o)("chooseTime"),filter:V},null,8,["modelValue","title"])]),_:1},8,["title"])],64)}}});export{K as default};
