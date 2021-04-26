import type { RouteRecordRaw,RouteMeta } from "vue-router";
import type { Component } from "./index";
export interface RouteMetaT {
  // title
  title: string;
  // 无需认证
  ignoreAuth?: boolean;
  // 权限
  permissions?: string[];
  // 无需缓存
  ignoreKeepAlive?: boolean;
  // 固定
  affix?: boolean;
  // 图标
  icon?: string;
  // 面包屑中隐藏
  hideBreadcrumb?: boolean;

  // 菜单中隐藏子节点
  hideChildrenInMenu?: boolean;

  // 隐藏菜单item
  hideMenu?: boolean;
  //外链
  isLink?: boolean;
}
// @ts-ignore
export interface RouteRecordRawT extends Omit<RouteRecordRaw,"meta">{
  name:string;
  component?: Component | string;
  components: Component;
  meta:RouteMetaT;
  children?: RouteRecordRawT[];
  props?:Recordable;
  fullPath?: string;
}

export type AppRouteModule = RouteRecordRawT;
