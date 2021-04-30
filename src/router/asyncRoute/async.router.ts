import { AppRouteRecordRawT } from "@router/types";
const layout = () => import(/* webpackTrunkName: "layout" */ "@layouts/Layout");

const index = () => import(/* webpackTrunkName: "index" */ "@views/index");
const asyncRouter: AppRouteRecordRawT[] = [
  {
    path: "/",
    name: "index",
    redirect:"/dashBord",
    component:layout,
    meta: {
      title: "首页",
      permissions:["edit"]
    },
    children: [
      {
        path: "dashBord",
        name: "dashBord",
        component:index,
        meta: {
          title: "控制台",
          permissions:["author"]
        },
      },
    ],
  },
];
export default asyncRouter
