import{b as e}from"./index.a884b23c.js";import{d as a,e as t,c as l,a9 as u,r}from"./element-plus.7ff29d1d.js";const n=a({name:"i18n",setup(){t("");const a=t(10),{t:n}=e(),p=t(1);return()=>l("div",null,[n("hello"),l("p",null,[u("element-plus 动态切换语言部分tag标记未正确替换为相应语言")]),l(r("vxe-pager"),{currentPage:p.value,"onUpdate:currentPage":e=>p.value=e,pageSize:a.value,"onUpdate:pageSize":e=>a.value=e,total:400,layouts:["PrevJump","PrevPage","JumpNumber","NextPage","NextJump","Sizes","Total"]},null)])}});export default n;