import{n as u,m,t as B,w}from"./with-install-a78877b5.js";import{c as x,h as a,i as g,j as P}from"./use-translate-0400f29b.js";import{A as C,D as N,e as l}from"./vue-libs-83dbabed.js";const[S,h]=x("badge"),V={dot:Boolean,max:u,tag:m("div"),color:String,offset:Array,content:u,showZero:B,position:m("top-right")},k=C({name:S,props:V,setup(n,{slots:r}){const f=()=>{if(r.content)return!0;const{content:t,showZero:e}=n;return g(t)&&t!==""&&(e||t!==0&&t!=="0")},p=()=>{const{dot:t,max:e,content:o}=n;if(!t&&f())return r.content?r.content():g(e)&&P(o)&&+o>+e?`${e}+`:o},c=t=>t.startsWith("-")?t.replace("-",""):`-${t}`,y=N(()=>{const t={background:n.color};if(n.offset){const[e,o]=n.offset,{position:b}=n,[s,i]=b.split("-");r.default?(typeof o=="number"?t[s]=a(s==="top"?o:-o):t[s]=s==="top"?a(o):c(o),typeof e=="number"?t[i]=a(i==="left"?e:-e):t[i]=i==="left"?a(e):c(e)):(t.marginTop=a(o),t.marginLeft=a(e))}return t}),d=()=>{if(f()||n.dot)return l("div",{class:h([n.position,{dot:n.dot,fixed:!!r.default}]),style:y.value},[p()])};return()=>{if(r.default){const{tag:t}=n;return l(t,{class:h("wrapper")},{default:()=>[r.default(),d()]})}return d()}}}),A=w(k),$=A;export{A as B,$ as V};