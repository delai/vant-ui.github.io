import{c as _,T as me,h as he,s as ee,M as ge,p as L,o as ye,U as te,K as Z,L as ve}from"./use-translate-bcc9285c.js";import{u as De}from"./use-refs-06cfd58f.js";import{u as fe}from"./use-expose-52ca271b.js";import{P as we}from"./index-4a7db624.js";import{B as be}from"./index-8ce4e927.js";import{g as ke}from"./utils-f7b14547.js";import{u as Se}from"./use-height-2f5d7c62.js";import{A as G,D as M,e as c,u as V,x as p,B as Te}from"./vue-libs-b2a2f6f9.js";import{d as q,a as xe,n as ne,m as se,t as H,c as Me,w as Re}from"./with-install-c0de7835.js";import{s as ce}from"./function-call-57778d4c.js";const[Ce,f,W]=_("calendar"),Oe=e=>W("monthTitle",e.getFullYear(),e.getMonth()+1);function ae(e,i){const r=e.getFullYear(),d=i.getFullYear();if(r===d){const b=e.getMonth(),x=i.getMonth();return b===x?0:b>x?1:-1}return r>d?1:-1}function R(e,i){const r=ae(e,i);if(r===0){const d=e.getDate(),b=i.getDate();return d===b?0:d>b?1:-1}return r}const K=e=>new Date(e),ue=e=>Array.isArray(e)?e.map(K):K(e);function le(e,i){const r=K(e);return r.setDate(r.getDate()+i),r}const oe=e=>le(e,-1),de=e=>le(e,1),re=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function Pe(e){const i=e[0].getTime();return(e[1].getTime()-i)/(1e3*60*60*24)+1}const[Be]=_("calendar-day"),Ae=G({name:Be,props:{item:q(Object),color:String,index:Number,offset:xe(0),rowHeight:String},emits:["click"],setup(e,{emit:i,slots:r}){const d=M(()=>{var N;const{item:a,index:g,color:k,offset:I,rowHeight:O}=e,S={height:O};if(a.type==="placeholder")return S.width="100%",S;if(g===0&&(S.marginLeft=`${100*I/7}%`),k)switch(a.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":S.background=k;break;case"middle":S.color=k;break}return I+(((N=a.date)==null?void 0:N.getDate())||1)>28&&(S.marginBottom=0),S}),b=()=>{e.item.type!=="disabled"&&i("click",e.item)},x=()=>{const{topInfo:a}=e.item;if(a||r["top-info"])return c("div",{class:f("top-info")},[r["top-info"]?r["top-info"](e.item):a])},C=()=>{const{bottomInfo:a}=e.item;if(a||r["bottom-info"])return c("div",{class:f("bottom-info")},[r["bottom-info"]?r["bottom-info"](e.item):a])},w=()=>{const{item:a,color:g,rowHeight:k}=e,{type:I,text:O}=a,S=[x(),O,C()];return I==="selected"?c("div",{class:f("selected-day"),style:{width:k,height:k,background:g}},[S]):S};return()=>{const{type:a,className:g}=e.item;return a==="placeholder"?c("div",{class:f("day"),style:d.value},null):c("div",{role:"gridcell",style:d.value,class:[f("day",a),g],tabindex:a==="disabled"?void 0:-1,onClick:b},[w()])}}}),[He]=_("calendar-month"),Ie={date:q(Date),type:String,color:String,minDate:q(Date),maxDate:q(Date),showMark:Boolean,rowHeight:ne,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number},We=G({name:He,props:Ie,emits:["click"],setup(e,{emit:i,slots:r}){const[d,b]=me(),x=V(),C=V(),w=Se(C),a=M(()=>Oe(e.date)),g=M(()=>he(e.rowHeight)),k=M(()=>{const o=e.date.getDay();return e.firstDayOfWeek?(o+7-e.firstDayOfWeek)%7:o}),I=M(()=>ke(e.date.getFullYear(),e.date.getMonth()+1)),O=M(()=>d.value||!e.lazyRender),S=()=>a.value,N=o=>{const m=y=>e.currentDate.some(u=>R(u,y)===0);if(m(o)){const y=oe(o),u=de(o),v=m(y),t=m(u);return v&&t?"multiple-middle":v?"end":t?"start":"multiple-selected"}return""},F=o=>{const[m,y]=e.currentDate;if(!m)return"";const u=R(o,m);if(!y)return u===0?"start":"";const v=R(o,y);return e.allowSameDay&&u===0&&v===0?"start-end":u===0?"start":v===0?"end":u>0&&v<0?"middle":""},z=o=>{const{type:m,minDate:y,maxDate:u,currentDate:v}=e;if(R(o,y)<0||R(o,u)>0)return"disabled";if(v===null)return"";if(Array.isArray(v)){if(m==="multiple")return N(o);if(m==="range")return F(o)}else if(m==="single")return R(o,v)===0?"selected":"";return""},Y=o=>{if(e.type==="range"){if(o==="start"||o==="end")return W(o);if(o==="start-end")return`${W("start")}/${W("end")}`}},E=()=>{if(e.showMonthTitle)return c("div",{class:f("month-title")},[r["month-title"]?r["month-title"]({date:e.date,text:a.value}):a.value])},U=()=>{if(e.showMark&&O.value)return c("div",{class:f("month-mark")},[e.date.getMonth()+1])},j=M(()=>{const o=Math.ceil((I.value+k.value)/7);return Array(o).fill({type:"placeholder"})}),$=M(()=>{const o=[],m=e.date.getFullYear(),y=e.date.getMonth();for(let u=1;u<=I.value;u++){const v=new Date(m,y,u),t=z(v);let n={date:v,type:t,text:u,bottomInfo:Y(t)};e.formatter&&(n=e.formatter(n)),o.push(n)}return o}),P=M(()=>$.value.filter(o=>o.type==="disabled")),J=(o,m)=>{if(x.value){const y=ee(x.value),u=j.value.length,t=(Math.ceil((m.getDate()+k.value)/7)-1)*y.height/u;ge(o,y.top+t+o.scrollTop-ee(o).top)}},Q=(o,m)=>c(Ae,{item:o,index:m,color:e.color,offset:k.value,rowHeight:g.value,onClick:y=>i("click",y)},L(r,["top-info","bottom-info"])),X=()=>c("div",{ref:x,role:"grid",class:f("days")},[U(),(O.value?$:j).value.map(Q)]);return fe({getTitle:S,getHeight:()=>w.value,setVisible:b,scrollToDate:J,disabledDays:P}),()=>c("div",{class:f("month"),ref:C},[E(),X()])}}),[Ne]=_("calendar-header"),Fe=G({name:Ne,props:{date:Date,title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["clickSubtitle"],setup(e,{slots:i,emit:r}){const d=()=>{if(e.showTitle){const w=e.title||W("title"),a=i.title?i.title():w;return c("div",{class:f("header-title")},[a])}},b=w=>r("clickSubtitle",w),x=()=>{if(e.showSubtitle){const w=i.subtitle?i.subtitle({date:e.date,text:e.subtitle}):e.subtitle;return c("div",{class:f("header-subtitle"),onClick:b},[w])}},C=()=>{const{firstDayOfWeek:w}=e,a=W("weekdays"),g=[...a.slice(w,7),...a.slice(0,w)];return c("div",{class:f("weekdays")},[g.map(k=>c("span",{class:f("weekday")},[k]))])};return()=>c("div",{class:f("header")},[d(),x(),C()])}}),Ye={show:Boolean,type:se("single"),title:String,color:String,round:H,readonly:Boolean,poppable:H,maxRange:Me(null),position:se("bottom"),teleport:[String,Object],showMark:H,showTitle:H,formatter:Function,rowHeight:ne,confirmText:String,rangePrompt:String,lazyRender:H,showConfirm:H,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:H,closeOnPopstate:H,showRangePrompt:H,confirmDisabledText:String,closeOnClickOverlay:H,safeAreaInsetTop:Boolean,safeAreaInsetBottom:H,minDate:{type:Date,validator:te,default:re},maxDate:{type:Date,validator:te,default:()=>{const e=re();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:ne,default:0,validator:e=>e>=0&&e<=6}},$e=G({name:Ce,props:Ye,emits:["select","confirm","unselect","monthShow","overRange","update:show","clickSubtitle"],setup(e,{emit:i,slots:r}){const d=(t,n=e.minDate,l=e.maxDate)=>R(t,n)===-1?n:R(t,l)===1?l:t,b=(t=e.defaultDate)=>{const{type:n,minDate:l,maxDate:s,allowSameDay:T}=e;if(t===null)return t;const D=re();if(n==="range"){Array.isArray(t)||(t=[]);const B=d(t[0]||D,l,T?s:oe(s)),h=d(t[1]||D,T?l:de(l));return[B,h]}return n==="multiple"?Array.isArray(t)?t.map(B=>d(B)):[d(D)]:((!t||Array.isArray(t))&&(t=D),d(t))};let x;const C=V(),w=V({text:"",date:void 0}),a=V(b()),[g,k]=De(),I=M(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),O=M(()=>{const t=[],n=new Date(e.minDate);n.setDate(1);do t.push(new Date(n)),n.setMonth(n.getMonth()+1);while(ae(n,e.maxDate)!==1);return t}),S=M(()=>{if(a.value){if(e.type==="range")return!a.value[0]||!a.value[1];if(e.type==="multiple")return!a.value.length}return!a.value}),N=()=>a.value,F=()=>{const t=ve(C.value),n=t+x,l=O.value.map((h,A)=>g.value[A].getHeight()),s=l.reduce((h,A)=>h+A,0);if(n>s&&t>0)return;let T=0,D;const B=[-1,-1];for(let h=0;h<O.value.length;h++){const A=g.value[h];T<=n&&T+l[h]>=t&&(B[1]=h,D||(D=A,B[0]=h),g.value[h].showed||(g.value[h].showed=!0,i("monthShow",{date:A.date,title:A.getTitle()}))),T+=l[h]}O.value.forEach((h,A)=>{const ie=A>=B[0]-1&&A<=B[1]+1;g.value[A].setVisible(ie)}),D&&(w.value={text:D.getTitle(),date:D.date})},z=t=>{Z(()=>{O.value.some((n,l)=>ae(n,t)===0?(C.value&&g.value[l].scrollToDate(C.value,t),!0):!1),F()})},Y=()=>{if(!(e.poppable&&!e.show))if(a.value){const t=e.type==="single"?a.value:a.value[0];te(t)&&z(t)}else Z(F)},E=()=>{e.poppable&&!e.show||(Z(()=>{x=Math.floor(ee(C).height)}),Y())},U=(t=b())=>{a.value=t,Y()},j=t=>{const{maxRange:n,rangePrompt:l,showRangePrompt:s}=e;return n&&Pe(t)>n?(s&&ce(l||W("rangePrompt",n)),i("overRange"),!1):!0},$=()=>i("confirm",a.value??ue(a.value)),P=(t,n)=>{const l=s=>{a.value=s,i("select",ue(s))};if(n&&e.type==="range"&&!j(t)){l([t[0],le(t[0],+e.maxRange-1)]);return}l(t),n&&!e.showConfirm&&$()},J=(t,n,l)=>{var s;return(s=t.find(T=>R(n,T.date)===-1&&R(T.date,l)===-1))==null?void 0:s.date},Q=M(()=>g.value.reduce((t,n)=>{var l;return t.push(...((l=n.disabledDays)==null?void 0:l.value)??[]),t},[])),X=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:l}=e;if(l==="range"){if(!a.value){P([n]);return}const[s,T]=a.value;if(s&&!T){const D=R(n,s);if(D===1){const B=J(Q.value,s,n);if(B){const h=oe(B);R(s,h)===-1?P([s,h]):P([n])}else P([s,n],!0)}else D===-1?P([n]):e.allowSameDay&&P([n,n],!0)}else P([n])}else if(l==="multiple"){if(!a.value){P([n]);return}const s=a.value,T=s.findIndex(D=>R(D,n)===0);if(T!==-1){const[D]=s.splice(T,1);i("unselect",K(D))}else e.maxRange&&s.length>=e.maxRange?ce(e.rangePrompt||W("rangePrompt",e.maxRange)):P([...s,n])}else P(n,!0)},o=t=>i("update:show",t),m=(t,n)=>{const l=n!==0||!e.showSubtitle;return c(We,Te({ref:k(n),date:t,currentDate:a.value,showMonthTitle:l,firstDayOfWeek:I.value},L(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:X}),L(r,["top-info","bottom-info","month-title"]))},y=()=>{if(r.footer)return r.footer();if(e.showConfirm){const t=r["confirm-text"],n=S.value,l=n?e.confirmDisabledText:e.confirmText;return c(be,{round:!0,block:!0,type:"primary",color:e.color,class:f("confirm"),disabled:n,nativeType:"button",onClick:$},{default:()=>[t?t({disabled:n}):l||W("confirm")]})}},u=()=>c("div",{class:[f("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[y()]),v=()=>c("div",{class:f()},[c(Fe,{date:w.value.date,title:e.title,subtitle:w.value.text,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:I.value,onClickSubtitle:t=>i("clickSubtitle",t)},L(r,["title","subtitle"])),c("div",{ref:C,class:f("body"),onScroll:F},[O.value.map(m)]),u()]);return p(()=>e.show,E),p(()=>[e.type,e.minDate,e.maxDate],()=>U(b(a.value))),p(()=>e.defaultDate,(t=null)=>{a.value=t,Y()}),fe({reset:U,scrollToDate:z,getSelectedDate:N}),ye(E),()=>e.poppable?c(we,{show:e.show,class:f("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":o},{default:v}):v()}}),Ve=Re($e),Qe=Ve;export{Qe as V};
