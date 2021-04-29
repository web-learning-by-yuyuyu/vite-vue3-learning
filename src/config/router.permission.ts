import { getToken } from "@utils/access.token";
import { RouteRecordName, RouteRecordRaw } from "vue-router";
import { router } from "@router/index";
import { createPinia } from "pinia";
import { useUserStore } from "@store/user";
export const addRoute = (
  routers: RouteRecordRaw[],
  parentName?: RouteRecordName
) => {
  routers.forEach(v => {
    const children = v.children;
    delete v.children;
    parentName ? router.addRoute(parentName, v) : router.addRoute(v);
    if (children && children.length) {
      addRoute(children, v.name as RouteRecordName);
    }
  });
};
router.onError(err => {
  console.log(err);
});
router.beforeEach(async (to, from, next) => {
  const store = useUserStore();
  const name = to.name as string;
  const hasUserInfo = store.permissions.length;
  const isNotFound = name ? !router.hasRoute(name) : true;
  const hasToken = !!getToken();
  if (hasToken) {
    if (hasUserInfo) {
      name === "login" ? next({ name: "layout" }) : isNotFound?next("/404"):next();
    } else {
      await store.userInfo();
      isNotFound?next("/404"):next({name})
    }
  } else {
    if (to.name === "login") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});
