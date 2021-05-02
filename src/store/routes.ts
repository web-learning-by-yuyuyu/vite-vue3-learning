import { defineStore } from "pinia";
import { AppRouteRecordRawT } from "@router/types";
const asyncRouts: AppRouteRecordRawT[] = [];
const constantRoutes: AppRouteRecordRawT[] = [];
const menuRoutes: AppRouteRecordRawT[] = [];
export const useRouteStore = defineStore({
  id: "routes",
  state() {
    return {
      asyncRouts,
      constantRoutes,
      menuRoutes,
    };
  },
  getters: {
    menuList() {
      return this.menuRoutes;
    },
    asyncRoutes() {
      return this.asyncRouts;
    },
    constantRoute() {
      return this.constantRoutes;
    },
  },
  actions: {
    setAsyncRoutes(hasRoles) {
      this.asyncRouts = hasRoles;
    },
  },
});
