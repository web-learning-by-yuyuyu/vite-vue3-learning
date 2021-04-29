import { AppRouteRecordRawT } from "@router/types";
const layout = () => import(/* webpackTrunkName: "layout" */ "@layouts/Layout");

const index = () => import(/* webpackTrunkName: "index" */ "@views/index");
const asyncRouter: AppRouteRecordRawT[] = [
  {
    path: "/layout",
    name: "layout",
    redirect:"/layout/dashBord",
    component:layout,
    meta: {
      title: "控制面板",
    },
    children: [
      {
        path: "dashBord",
        name: "dashBord",
        component:index,
        meta: {
          title: "控制台",
        },
      },
    ],
  },
];
export default asyncRouter
