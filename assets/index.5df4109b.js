import{s as oe,x as le,y as se,z as ce,f as ue,c as de,e as fe,u as ge,h as me,i as V,A as F,B as he,C as be,l as O,D as ye}from"./use-translate.7cc2bd20.js";import{n as E,m as x,u as Ce,c as ve,w as Ie}from"./with-install.aa1bd6cb.js";import{F as xe}from"./constant.80c6de18.js";import{c as Se,C as ke}from"./index.ba00e17d.js";import{u as we}from"./use-id.22c16a33.js";import{u as Ve}from"./use-expose.094a1223.js";import{I as T}from"./index.7e3bafa8.js";import{z as Te,H as Me,C as z,D as v,I as Ee,x as Pe,q as I,N as Ae,e as l,A as Be,h as Le}from"./vue-libs.baee7c1f.js";function Re(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Ne(e,a){return!(a.required&&Re(e)||a.pattern&&!a.pattern.test(String(e)))}function Fe(e,a){return new Promise(o=>{const s=a.validator(e,a);if(oe(s)){s.then(o);return}o(s)})}function D(e,a){const{message:o}=a;return le(o)?o(e,a):o||""}function Oe({target:e}){e.composing=!0}function W({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ze(e,a){const o=se();e.style.height="auto";let s=e.scrollHeight;if(ue(a)){const{maxHeight:i,minHeight:g}=a;i!==void 0&&(s=Math.min(s,i)),g!==void 0&&(s=Math.max(s,g))}s&&(e.style.height=`${s}px`,ce(o))}function De(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function M(e){return[...e].length}function We(e,a){return[...e].slice(0,a).join("")}const[_e,u]=de("field"),$e={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:E,formatter:Function,clearIcon:x("clear"),modelValue:ve(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:x("focus"),formatTrigger:x("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},je=fe({},Se,$e,{rows:E,type:x("text"),rules:Array,autosize:[Boolean,Object],labelWidth:E,labelClass:Ce,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var qe=Te({name:_e,props:je,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:a,slots:o}){const s=we(),i=Me({status:"unvalidated",focused:!1,validateMessage:""}),g=z(),S=z(),{parent:d}=ge(xe),h=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(V(e[t]))return e[t];if(d&&V(d.props[t]))return d.props[t]},_=v(()=>{const t=f("readonly");if(e.clearable&&!t){const n=h()!=="",r=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return n&&r}return!1}),P=v(()=>S.value&&o.input?S.value():e.modelValue),$=t=>t.reduce((n,r)=>n.then(()=>{if(i.status==="failed")return;let{value:c}=P;if(r.formatter&&(c=r.formatter(c,r)),!Ne(c,r)){i.status="failed",i.validateMessage=D(c,r);return}if(r.validator)return Fe(c,r).then(m=>{m&&typeof m=="string"?(i.status="failed",i.validateMessage=m):m===!1&&(i.status="failed",i.validateMessage=D(c,r))})}),Promise.resolve()),b=()=>{i.status="unvalidated",i.validateMessage=""},A=()=>a("end-validate",{status:i.status}),B=(t=e.rules)=>new Promise(n=>{b(),t?(a("start-validate"),$(t).then(()=>{i.status==="failed"?(n({name:e.name,message:i.validateMessage}),A()):(i.status="passed",n(),A())})):n()}),k=t=>{if(d&&e.rules){const{validateTrigger:n}=d.props,r=F(n).includes(t),c=e.rules.filter(m=>m.trigger?F(m.trigger).includes(t):r);c.length&&B(c)}},j=t=>{const{maxlength:n}=e;if(V(n)&&M(t)>n){const r=h();return r&&M(r)===+n?r:We(t,+n)}return t},y=(t,n="onChange")=>{if(t=j(t),e.type==="number"||e.type==="digit"){const r=e.type==="number";t=he(t,r,r)}e.formatter&&n===e.formatTrigger&&(t=e.formatter(t)),g.value&&g.value.value!==t&&(g.value.value=t),t!==e.modelValue&&a("update:modelValue",t)},q=t=>{t.target.composing||y(t.target.value)},w=()=>{var t;return(t=g.value)==null?void 0:t.blur()},H=()=>{var t;return(t=g.value)==null?void 0:t.focus()},C=()=>{const t=g.value;e.type==="textarea"&&e.autosize&&t&&ze(t,e.autosize)},K=t=>{i.focused=!0,a("focus",t),I(C),f("readonly")&&w()},U=t=>{f("readonly")||(i.focused=!1,y(h(),"onBlur"),a("blur",t),k("onBlur"),I(C),ye())},L=t=>a("click-input",t),Y=t=>a("click-left-icon",t),J=t=>a("click-right-icon",t),G=t=>{O(t),a("update:modelValue",""),a("clear",t)},R=v(()=>{if(typeof e.error=="boolean")return e.error;if(d&&d.props.showError&&i.status==="failed")return!0}),Q=v(()=>{const t=f("labelWidth");if(t)return{width:me(t)}}),X=t=>{t.keyCode===13&&(!(d&&d.props.submitOnEnter)&&e.type!=="textarea"&&O(t),e.type==="search"&&w()),a("keypress",t)},N=()=>e.id||`${s}-input`,Z=()=>i.status,p=()=>{const t=u("control",[f("inputAlign"),{error:R.value,custom:!!o.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(o.input)return l("div",{class:t,onClick:L},[o.input()]);const n={id:N(),ref:g,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${s}-label`:void 0,onBlur:U,onFocus:K,onInput:q,onClick:L,onChange:W,onKeypress:X,onCompositionend:W,onCompositionstart:Oe};return e.type==="textarea"?l("textarea",n,null):l("input",Be(De(e.type),n),null)},ee=()=>{const t=o["left-icon"];if(e.leftIcon||t)return l("div",{class:u("left-icon"),onClick:Y},[t?t():l(T,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},te=()=>{const t=o["right-icon"];if(e.rightIcon||t)return l("div",{class:u("right-icon"),onClick:J},[t?t():l(T,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ne=()=>{if(e.showWordLimit&&e.maxlength){const t=M(h());return l("div",{class:u("word-limit")},[l("span",{class:u("word-num")},[t]),Le("/"),e.maxlength])}},ae=()=>{if(d&&d.props.showErrorMessage===!1)return;const t=e.errorMessage||i.validateMessage;if(t){const n=o["error-message"],r=f("errorMessageAlign");return l("div",{class:u("error-message",r)},[n?n({message:t}):t])}},re=()=>{const t=f("colon")?":":"";if(o.label)return[o.label(),t];if(e.label)return l("label",{id:`${s}-label`,for:N()},[e.label+t])},ie=()=>[l("div",{class:u("body")},[p(),_.value&&l(T,{name:e.clearIcon,class:u("clear"),onTouchstart:G},null),te(),o.button&&l("div",{class:u("button")},[o.button()])]),ne(),ae()];return Ve({blur:w,focus:H,validate:B,formValue:P,resetValidation:b,getValidationStatus:Z}),Ee(be,{customValue:S,resetValidation:b,validateWithTrigger:k}),Pe(()=>e.modelValue,()=>{y(h()),b(),k("onChange"),I(C)}),Ae(()=>{y(h(),e.formatTrigger),I(C)}),()=>{const t=f("disabled"),n=f("labelAlign"),r=re(),c=ee();return l(ke,{size:e.size,icon:e.leftIcon,class:u({error:R.value,disabled:t,[`label-${n}`]:n}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Q.value,valueClass:u("value"),titleClass:[u("label",[n,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:c?()=>c:null,title:r?()=>r:null,value:ie,extra:o.extra})}}});const Ze=Ie(qe);export{Ze as F,$e as f};
