import { defineStore } from "pinia";

export const useSysStore = defineStore({
  id: "sys",
  state() {
    return {
      collapse: false,
    };
  },
});
