import { defineStore } from "pinia";
import { AppRouteRecordRawT } from "@router/types";
import { router } from "@router/index";
import { baseRoutes } from "@router/baseRoute";

const tags: AppRouteRecordRawT[] = [];/* 动态增加的tags */
const fixedTags: AppRouteRecordRawT[] = [];/* 固定tags */
export const useSysStore = defineStore({
  id: "sys",
  state() {
    return {
      collapse: false,
      tags,
      fixedTags,
      acitveName: "",
    };
  },
  actions: {
    addTages(item: AppRouteRecordRawT) {
      /* 添加item，判断当前的路由是否存在，如果存在进入 */
      const isExist: boolean = this.tags.some(
        v =>
          /* 存在于当前tags */
          v.name === item.name
      );
      const isExistInFixed: boolean = this.fixedTags.some(
        v =>
          /* 存在于固定tags中 */
          v.name === item.name
      );
      const isLogin: boolean = item.name === "login";
      !isExist && !isExistInFixed && !isLogin ? this.tags.push(item) : "";
    },
    removeItem(item) {
      /* 删除动态的tags */
      let index: number = this.tags.findIndex(v => v?.name === item.name);
      this.tags.splice(index, 1);
      this.toRePath(index, item.name);
    },
    toRePath(index: number, name: string): void {
      /* 删除固定项的处理 */
      if (this.acitveName === name) {
        if (this.tags.length) {
          if (index > 0) {
            router.push({
              name: this.tags[index - 1].name,
            });
          } else {
            router.push({
              name: this.tags[0].name,
            });
          }
        } else {
          router.push({
            name: "index",
          });
        }
      }
    },
    refreshTags() {
      /* 清空所有的tags */
      this.tags = [];
      router.push("/");
    },
  },
});
