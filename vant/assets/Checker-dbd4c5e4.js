import{I as S}from"./index-b2bd89b1.js";import{A as x,y,D as s,e as i}from"./vue-libs-dcfba01b.js";import{e as z,h as u}from"./use-translate-00443182.js";import{d as D,m as B,t as G,u as g,n as I}from"./with-install-dbef9c21.js";const V={name:g,disabled:Boolean,iconSize:I,modelValue:g,checkedColor:String,labelPosition:String,labelDisabled:Boolean},q=x({props:z({},V,{bem:D(Function),role:String,shape:B("round"),parent:Object,checked:Boolean,bindGroup:G}),emits:["click","toggle"],setup(e,{emit:b,slots:d}){const k=y(),t=o=>{if(e.parent&&e.bindGroup)return e.parent.props[o]},l=s(()=>{if(e.parent&&e.bindGroup){const o=t("disabled")||e.disabled;if(e.role==="checkbox"){const c=t("modelValue").length,n=t("max"),a=n&&c>=+n;return o||a&&!e.checked}return o}return e.disabled}),v=s(()=>t("direction")),r=s(()=>{const o=e.checkedColor||t("checkedColor");if(o&&e.checked&&!l.value)return{borderColor:o,backgroundColor:o}}),P=o=>{const{target:c}=o,n=k.value,a=n===c||(n==null?void 0:n.contains(c));!l.value&&(a||!e.labelDisabled)&&b("toggle"),b("click",o)},m=()=>{var f,C;const{bem:o,shape:c,checked:n}=e,a=e.iconSize||t("iconSize");return i("div",{ref:k,class:o("icon",[c,{disabled:l.value,checked:n}]),style:c!=="dot"?{fontSize:u(a)}:{width:u(a),height:u(a),borderColor:(f=r.value)==null?void 0:f.borderColor}},[d.icon?d.icon({checked:n,disabled:l.value}):c!=="dot"?i(S,{name:"success",style:r.value},null):i("div",{class:o("icon--dot__icon"),style:{backgroundColor:(C=r.value)==null?void 0:C.backgroundColor}},null)])},h=()=>{if(d.default)return i("span",{class:e.bem("label",[e.labelPosition,{disabled:l.value}])},[d.default()])};return()=>{const o=e.labelPosition==="left"?[h(),m()]:[m(),h()];return i("div",{role:e.role,class:e.bem([{disabled:l.value,"label-disabled":e.labelDisabled},v.value]),tabindex:l.value?void 0:0,"aria-checked":e.checked,onClick:P},[o])}}});export{q as C,V as c};
