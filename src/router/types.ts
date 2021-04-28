import { RouteMeta } from "vue-router";
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string;
  meta: RouteMeta;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
export type AppRouteRecordRawT = AppRouteRecordRaw;
