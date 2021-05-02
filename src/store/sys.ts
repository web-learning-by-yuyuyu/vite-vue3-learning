import { defineStore } from "pinia";
import { AppRouteRecordRawT } from "@router/types";
import { router } from "@router/index";

const tags: AppRouteRecordRawT[] = [];
const fixedTags: AppRouteRecordRawT[] = [];
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
      !isExist && !isExistInFixed ? this.tags.push(item) : "";
    },
    removeItem(item) {
      /* 删除items，如果为当前的route，跳转首页 */
      let index: number = this.tags.findIndex(v => v?.name === item.name);
      item.name === this.acitveName
        ? router.push({
            name: "index",
          })
        : "";
      this.tags.splice(index, 1);
    },
    refreshTags() {
      /* 清空所有的tags */
      this.tags = [];
      router.push("/");
    },
  },
});
