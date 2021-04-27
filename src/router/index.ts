import type { App } from 'vue';
import {createRouter, createWebHistory,RouteRecordRaw } from "vue-router";

const index = () => import( /* webpackChunkName: "dashboard" */"../views/index")
import type {AppRouteRecordRawT} from "./types"
const routes:Array<AppRouteRecordRawT> = [
  {
    path:"/",
    name:"index",
    component:index,
    meta:{
      title:"首页"
    }
  }
]
export const router = createRouter({
  history:createWebHistory(),
  routes:(routes as unknown) as RouteRecordRaw[]
})
export default function setupRouter (app:App<Element>) {
  app.use(router)
}