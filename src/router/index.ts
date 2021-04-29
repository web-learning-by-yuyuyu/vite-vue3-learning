import type { App } from 'vue';
//@ts-ignore
import {createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import {baseRoutes} from "./baseRoute/index";
export const router = createRouter({
  history:createWebHistory(),
  routes:(baseRoutes as unknown) as RouteRecordRaw[]
})
export default function setupRouter (app:App<Element>) {
  app.use(router)
}