import{z as me,A as he,f as be,v as ye,B as Ie,u as ve,h as j,n as Ce,c as Se,e as Ve,i as v,C as q,D as xe,l as H,E as Ee,F as Me}from"./use-translate-113fec30.js";import{C as ke,c as we}from"./index-8d1d1ed5.js";import{u as Te}from"./use-id-2cc12458.js";import{u as Ae}from"./use-expose-89a7ef05.js";import{I as L}from"./index-b61a6a2b.js";import{A as Le,H as Pe,y as P,D as C,P as Re,u as Be,q as M,M as Fe,e as u,B as De,g as Ne}from"./vue-libs-12a1683e.js";import{n as B,m as k,u as Oe,c as We,w as ze}from"./with-install-a70dfb01.js";import{F as _e}from"./constant-a81ffd37.js";function Y(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function $e(t,i){if(Y(t)){if(i.required)return!1;if(i.validateEmpty===!1)return!0}return!(i.pattern&&!i.pattern.test(String(t)))}function je(t,i){return new Promise(l=>{const f=i.validator(t,i);if(ye(f)){f.then(l);return}l(f)})}function K(t,i){const{message:l}=i;return Ie(l)?l(t,i):l||""}function qe({target:t}){t.composing=!0}function U({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function He(t,i){const l=me();t.style.height="auto";let f=t.scrollHeight;if(be(i)){const{maxHeight:r,minHeight:c}=i;r!==void 0&&(f=Math.min(f,r)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,he(l))}function Ke(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function y(t){return[...t].length}function R(t,i){return[...t].slice(0,i).join("")}const[Ue,m]=Se("field"),Ye={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:B,formatter:Function,clearIcon:k("clear"),modelValue:We(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:k("focus"),formatTrigger:k("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=Ve({},we,Ye,{rows:B,type:k("text"),rules:Array,autosize:[Boolean,Object],labelWidth:B,labelClass:Oe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),Ge=Le({name:Ue,props:Je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:i,slots:l}){const f=Te(),r=Pe({status:"unvalidated",focused:!1,validateMessage:""}),c=P(),F=P(),w=P(),{parent:h}=ve(_e),I=()=>String(t.modelValue??""),d=e=>{if(v(t[e]))return t[e];if(h&&v(h.props[e]))return h.props[e]},J=C(()=>{const e=d("readonly");if(t.clearable&&!e){const n=I()!=="",a=t.clearTrigger==="always"||t.clearTrigger==="focus"&&r.focused;return n&&a}return!1}),D=C(()=>w.value&&l.input?w.value():t.modelValue),G=e=>e.reduce((n,a)=>n.then(()=>{if(r.status==="failed")return;let{value:o}=D;if(a.formatter&&(o=a.formatter(o,a)),!$e(o,a)){r.status="failed",r.validateMessage=K(o,a);return}if(a.validator)return Y(o)&&a.validateEmpty===!1?void 0:je(o,a).then(s=>{s&&typeof s=="string"?(r.status="failed",r.validateMessage=s):s===!1&&(r.status="failed",r.validateMessage=K(o,a))})}),Promise.resolve()),S=()=>{r.status="unvalidated",r.validateMessage=""},N=()=>i("endValidate",{status:r.status,message:r.validateMessage}),O=(e=t.rules)=>new Promise(n=>{S(),e?(i("startValidate"),G(e).then(()=>{r.status==="failed"?(n({name:t.name,message:r.validateMessage}),N()):(r.status="passed",n(),N())})):n()}),T=e=>{if(h&&t.rules){const{validateTrigger:n}=h.props,a=q(n).includes(e),o=t.rules.filter(s=>s.trigger?q(s.trigger).includes(e):a);o.length&&O(o)}},Q=e=>{var a;const{maxlength:n}=t;if(v(n)&&y(e)>+n){const o=I();if(o&&y(o)===+n)return o;const s=(a=c.value)==null?void 0:a.selectionEnd;if(r.focused&&s){const g=[...e],b=g.length-+n;return g.splice(s-b,b),g.join("")}return R(e,+n)}return e},V=(e,n="onChange")=>{const a=e;e=Q(e);const o=y(a)-y(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=xe(e,g,g)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),v(b)&&y(e)>+b&&(e=R(e,+b)),c.value&&r.focused){const{selectionEnd:E}=c.value,$=R(a,E);s=y(g($))-y($)}}if(c.value&&c.value.value!==e)if(r.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,v(g)&&v(b)){const E=y(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,E),Math.min(b,E))}}else c.value.value=e;e!==t.modelValue&&i("update:modelValue",e)},X=e=>{e.target.composing||V(e.target.value)},A=()=>{var e;return(e=c.value)==null?void 0:e.blur()},Z=()=>{var e;return(e=c.value)==null?void 0:e.focus()},x=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&He(e,t.autosize)},p=e=>{r.focused=!0,i("focus",e),M(x),d("readonly")&&A()},ee=e=>{r.focused=!1,V(I(),"onBlur"),i("blur",e),!d("readonly")&&(T("onBlur"),M(x),Me())},W=e=>i("clickInput",e),te=e=>i("clickLeftIcon",e),ne=e=>i("clickRightIcon",e),ae=e=>{H(e),i("update:modelValue",""),i("clear",e)},z=C(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&r.status==="failed")return!0}),ie=C(()=>{const e=d("labelWidth"),n=d("labelAlign");if(e&&n!=="top")return{width:j(e)}}),re=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&H(e),t.type==="search"&&A()),i("keypress",e)},_=()=>t.id||`${f}-input`,le=()=>r.status,oe=()=>{const e=m("control",[d("inputAlign"),{error:z.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return u("div",{class:e,onClick:W},[l.input()]);const n={id:_(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:d("disabled"),readonly:d("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,enterkeyhint:t.enterkeyhint,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:ee,onFocus:p,onInput:X,onClick:W,onChange:U,onKeypress:re,onCompositionend:U,onCompositionstart:qe};return t.type==="textarea"?u("textarea",n,null):u("input",De(Ke(t.type),n),null)},se=()=>{const e=l["left-icon"];if(t.leftIcon||e)return u("div",{class:m("left-icon"),onClick:te},[e?e():u(L,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ce=()=>{const e=l["right-icon"];if(t.rightIcon||e)return u("div",{class:m("right-icon"),onClick:ne},[e?e():u(L,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{if(t.showWordLimit&&t.maxlength){const e=y(I());return u("div",{class:m("word-limit")},[u("span",{class:m("word-num")},[e]),Ne("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||r.validateMessage;if(e){const n=l["error-message"],a=d("errorMessageAlign");return u("div",{class:m("error-message",a)},[n?n({message:e}):e])}},de=()=>{const e=d("labelWidth"),n=d("labelAlign"),a=d("colon")?":":"";if(l.label)return[l.label(),a];if(t.label)return u("label",{id:`${f}-label`,for:_(),style:n==="top"&&e?{width:j(e)}:void 0},[t.label+a])},ge=()=>[u("div",{class:m("body")},[oe(),J.value&&u(L,{ref:F,name:t.clearIcon,class:m("clear")},null),ce(),l.button&&u("div",{class:m("button")},[l.button()])]),ue(),fe()];return Ae({blur:A,focus:Z,validate:O,formValue:D,resetValidation:S,getValidationStatus:le}),Re(Ee,{customValue:w,resetValidation:S,validateWithTrigger:T}),Be(()=>t.modelValue,()=>{V(I()),S(),T("onChange"),M(x)}),Fe(()=>{V(I(),t.formatTrigger),M(x)}),Ce("touchstart",ae,{target:C(()=>{var e;return(e=F.value)==null?void 0:e.$el})}),()=>{const e=d("disabled"),n=d("labelAlign"),a=se(),o=()=>{const s=de();return n==="top"?[a,s].filter(Boolean):s||[]};return u(ke,{size:t.size,class:m({error:z.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:t.required}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:ge,extra:l.extra})}}}),Qe=ze(Ge),rt=Qe;export{Qe as F,rt as V,Ye as f};