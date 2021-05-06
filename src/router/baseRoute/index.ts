import type {AppRouteRecordRawT} from "@router/types"
const pageNotFound = () => import(/* webpackChunkName: "errorPage" */"@views/errorPage/404")
const page403 = () => import(/* webpackChunkName: "errorPage" */"@views/errorPage/403")
const login = () => import(/* webpackChunkName: "login" */"@views/login/index")
export const baseRoutes:Array<AppRouteRecordRawT> = [
  {
    path:"/",
    name:"index",
    redirect:"/login",
    meta:{
      title:"replace"
    }
  },
  {
    path:"/login",
    name:"login",
    component:login,
    
    meta:{
      title:"登录"
    }
  },
  {
    path:"/403",
    name:"403",
    component:page403,
    meta:{
      title:"页面无权限"
    }
  },
  {
    path:"/404",
    name:"404",
    component:pageNotFound,
    meta:{
      title:"页面无权限"
    }
  }
]