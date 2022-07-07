import{c as P,e as y,H as C,p as U,a as w}from"./use-translate.22943ac9.js";import{c as s,w as S}from"./with-install.c6b01ca2.js";import{s as b,a as x,p as B}from"./utils.9a198e26.js";import{P as E}from"./index.71f02c4b.js";import{A as k,x as c,D as H,y as g,e as n,B as N,r as _,o as M,a as R,w as f,C as u,F as O}from"./vue-libs.df86f395.js";import"./Picker.e13d0a59.js";import"./constant.80c6de18.js";import"./use-expose.e6b8a577.js";import"./index.f8de354f.js";import"./use-touch.d1be10ec.js";const[A]=P("time-picker"),D=y({},b,{minHour:s(0),maxHour:s(23),minMinute:s(0),maxMinute:s(59),minSecond:s(0),maxSecond:s(59),columnsType:{type:Array,default:()=>["hour","minute"]}});var I=k({name:A,props:D,emits:["confirm","cancel","change","update:modelValue"],setup(a,{emit:t,slots:T}){const i=c(a.modelValue),V=H(()=>a.columnsType.map(e=>{const{filter:d,formatter:l}=a;switch(e){case"hour":return x(+a.minHour,+a.maxHour,e,l,d);case"minute":return x(+a.minMinute,+a.maxMinute,e,l,d);case"second":return x(+a.minSecond,+a.maxSecond,e,l,d);default:throw new Error(`[Vant] DatePicker: unsupported columns type: ${e}`)}}));g(i,e=>{C(e,a.modelValue)||t("update:modelValue",e)},{immediate:!0}),g(()=>a.modelValue,e=>{C(e,i.value)||(i.value=e)});const h=(...e)=>t("change",...e),F=(...e)=>t("cancel",...e),v=(...e)=>t("confirm",...e);return()=>n(E,N({modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,columns:V.value,onChange:h,onCancel:F,onConfirm:v},U(a,B)),T)}});const p=S(I),X=k({name:"index",setup(a){const t=w({"zh-CN":{hour:"\u65F6",minute:"\u5206",timeRange:"\u65F6\u95F4\u8303\u56F4",chooseTime:"\u9009\u62E9\u65F6\u95F4",columnsType:"\u9009\u9879\u7C7B\u578B",optionsFilter:"\u8FC7\u6EE4\u9009\u9879",optionsFormatter:"\u683C\u5F0F\u5316\u9009\u9879"},"en-US":{hour:"h",minute:"m",timeRange:"Time Range",chooseTime:"Choose Time",columnsType:"Columns Type",optionsFilter:"Options Filter",optionsFormatter:"Options Formatter"}}),T=c(["12","00"]),i=c(["12","00","00"]),V=c(["12","35"]),h=c(["12"," 00"]),F=c(["12","00"]),v=["hour","minute","second"],e=(l,o)=>l==="minute"?o.filter(r=>Number(r.value)%10===0):o,d=(l,o)=>(l==="hour"&&(o.text+=t("hour")),l==="minute"&&(o.text+=t("minute")),o);return(l,o)=>{const r=_("demo-block");return M(),R(O,null,[n(r,{card:"",title:u(t)("basicUsage")},{default:f(()=>[n(u(p),{modelValue:T.value,"onUpdate:modelValue":o[0]||(o[0]=m=>T.value=m),title:u(t)("chooseTime")},null,8,["modelValue","title"])]),_:1},8,["title"]),n(r,{card:"",title:u(t)("columnsType")},{default:f(()=>[n(u(p),{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=m=>i.value=m),title:u(t)("chooseTime"),"columns-type":v},null,8,["modelValue","title"])]),_:1},8,["title"]),n(r,{card:"",title:u(t)("timeRange")},{default:f(()=>[n(u(p),{modelValue:V.value,"onUpdate:modelValue":o[2]||(o[2]=m=>V.value=m),title:u(t)("chooseTime"),"min-hour":10,"max-hour":20,"min-minute":30,"max-minute":40},null,8,["modelValue","title"])]),_:1},8,["title"]),n(r,{card:"",title:u(t)("optionsFormatter")},{default:f(()=>[n(u(p),{modelValue:F.value,"onUpdate:modelValue":o[3]||(o[3]=m=>F.value=m),title:u(t)("chooseTime"),formatter:d},null,8,["modelValue","title"])]),_:1},8,["title"]),n(r,{card:"",title:u(t)("optionsFilter")},{default:f(()=>[n(u(p),{modelValue:h.value,"onUpdate:modelValue":o[4]||(o[4]=m=>h.value=m),title:u(t)("chooseTime"),filter:e},null,8,["modelValue","title"])]),_:1},8,["title"])],64)}}});export{X as default};
