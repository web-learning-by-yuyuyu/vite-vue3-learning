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
  actions: {
    setAsyncRoutes(hasRoles) {
      this.asyncRouts = hasRoles;
    },
  },
});
