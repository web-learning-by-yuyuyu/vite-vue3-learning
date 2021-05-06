import { baseConfig } from '@config/base.config';
import type { App } from 'vue';
//@ts-ignore
import {createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router";
import { baseRoutes } from "./baseRoute";

export const router = createRouter({
  history:createWebHashHistory(baseConfig.routerPreDir),
  routes:(baseRoutes as unknown) as RouteRecordRaw[]
})
export default function setupRouter (app:App<Element>) {
  app.use(router)
}