import{d as e,a2 as l,M as a,e as t,c as n,r,a8 as d}from"./element-plus.57d62991.js";const s=e({name:"testTree",props:{nodeKey:{type:String,required:!0,default:()=>0}},setup(e,d){l(e);const s=a({children:"children",label:"label"}),o=t([[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]}],[{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]}]}],[{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]}]}]]);return()=>n(r("el-tree"),{data:o.value[e.nodeKey],props:s},null)}});const o=e({name:"gridTable",components:{testTree:s},setup(){const e=t("first_1");return()=>{let l;return n("div",null,[n(r("el-tabs"),{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l},(a=l=["0","1","2"].map((l=>n(r("el-tab-pane"),{label:l,name:"first_"+l},{default:()=>[e.value==="first_"+l?n(s,{nodeKey:l},null):""]}))),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?l:{default:()=>[l]}))]);var a}}});export default o;