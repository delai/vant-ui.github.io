import{a as T,f as M,s as p,p as A}from"./utils-b749147f.js";import{P as N}from"./index-15bfa333.js";import{A as I,y as B,D,u as P,e as E,B as F}from"./vue-libs-dcfba01b.js";import{J as V,p as J,c as K,e as L}from"./use-translate-00443182.js";import{c,w as O}from"./with-install-dbef9c21.js";const[R]=K("time-picker"),k=n=>/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(n),U=["hour","minute","second"],_=L({},p,{minHour:c(0),maxHour:c(23),minMinute:c(0),maxMinute:c(59),minSecond:c(0),maxSecond:c(59),minTime:{type:String,validator:k},maxTime:{type:String,validator:k},columnsType:{type:Array,default:()=>["hour","minute"]},filter:Function}),$=I({name:R,props:_,emits:["confirm","cancel","change","update:modelValue"],setup(n,{emit:d,slots:S}){const a=B(n.modelValue),h=e=>{const t=e.split(":");return U.map((u,r)=>n.columnsType.includes(u)?t[r]:"00")},x=D(()=>{let{minHour:e,maxHour:t,minMinute:u,maxMinute:r,minSecond:v,maxSecond:g}=n;if(n.minTime||n.maxTime){const i={hour:0,minute:0,second:0};n.columnsType.forEach((l,s)=>{i[l]=a.value[s]??0});const{hour:m,minute:o}=i;if(n.minTime){const[l,s,f]=h(n.minTime);e=l,u=+m<=+e?s:"00",v=+m<=+e&&+o<=+u?f:"00"}if(n.maxTime){const[l,s,f]=h(n.maxTime);t=l,r=+m>=+t?s:"59",g=+m>=+t&&+o>=+r?f:"59"}}return n.columnsType.map(i=>{const{filter:m,formatter:o}=n;switch(i){case"hour":return T(+e,+t,i,o,m,a.value);case"minute":return T(+u,+r,i,o,m,a.value);case"second":return T(+v,+g,i,o,m,a.value);default:return[]}})});P(a,e=>{V(e,n.modelValue)||d("update:modelValue",e)}),P(()=>n.modelValue,e=>{e=M(e,x.value),V(e,a.value)||(a.value=e)},{immediate:!0});const C=(...e)=>d("change",...e),y=(...e)=>d("cancel",...e),H=(...e)=>d("confirm",...e);return()=>E(N,F({modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,columns:x.value,onChange:C,onCancel:y,onConfirm:H},J(n,A)),S)}}),b=O($),Q=b;export{Q as V};