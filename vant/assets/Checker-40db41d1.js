import{I as x}from"./index-1ea87eb6.js";import{A as y,y as z,D as r,e as i}from"./vue-libs-19c20d28.js";import{e as B,h as b}from"./use-translate-71d4880c.js";import{d as D,t as G,u as g,n as I}from"./with-install-560d59bf.js";const V={name:g,disabled:Boolean,iconSize:I,modelValue:g,checkedColor:String,labelPosition:String,labelDisabled:Boolean},q=y({props:B({},V,{bem:D(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:G,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:m,slots:d}){const h=z(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=r(()=>{if(e.parent&&e.bindGroup){const n=l("disabled")||e.disabled;if(e.role==="checkbox"){const c=l("modelValue").length,o=l("max"),t=o&&c>=+o;return n||t&&!e.checked}return n}return e.disabled}),P=r(()=>l("direction")),s=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),u=r(()=>e.shape||l("shape")||"round"),S=n=>{const{target:c}=n,o=h.value,t=o===c||(o==null?void 0:o.contains(c));!a.value&&(t||!e.labelDisabled)&&m("toggle"),m("click",n)},k=()=>{var v,C;const{bem:n,checked:c,indeterminate:o}=e,t=e.iconSize||l("iconSize");return i("div",{ref:h,class:n("icon",[u.value,{disabled:a.value,checked:c,indeterminate:o}]),style:u.value!=="dot"?{fontSize:b(t)}:{width:b(t),height:b(t),borderColor:(v=s.value)==null?void 0:v.borderColor}},[d.icon?d.icon({checked:c,disabled:a.value}):u.value!=="dot"?i(x,{name:o?"minus":"success",style:s.value},null):i("div",{class:n("icon--dot__icon"),style:{backgroundColor:(C=s.value)==null?void 0:C.backgroundColor}},null)])},f=()=>{if(d.default)return i("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[d.default()])};return()=>{const n=e.labelPosition==="left"?[f(),k()]:[k(),f()];return i("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},P.value]),tabindex:a.value?void 0:0,"aria-checked":e.checked,onClick:S},[n])}}});export{q as C,V as c};
