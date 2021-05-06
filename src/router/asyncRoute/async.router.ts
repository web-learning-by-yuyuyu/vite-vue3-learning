import { AppRouteRecordRawT } from "@router/types";
const layout = () => import(/* webpackTrunkName: "layout" */ "@layouts/Layout");

const index = () => import(/* webpackTrunkName: "index" */ "@views/index");
const asyncRouter: AppRouteRecordRawT[] = [
  {
    path: "/",
    name: "index",
    redirect: "/dashBord",
    component: layout,
    meta: {
      title: "首页",
      permissions: ["edit"],
      icon:"el-icon-folder-add"
    },
    children: [
      {
        path: "dashBord",
        name: "dashBord",
        component: index,
        meta: {
          title: "控制台",
          permissions: ["author"],
          icon:"el-icon-folder-add"

        },
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    redirect: "/test/test1",
    component: layout,
    meta: {
      title: "test",
      permissions: ["edit"],
      icon:"el-icon-folder-add"

    },
    children: [
      {
        path: "test1",
        name: "test1",
        component: index,
        meta: {
          title: "test1",
          permissions: ["author"],
          icon:"el-icon-folder-add"

        },
        children: [
          {
            path: "test3",
            name: "test3",
            component: index,
            meta: {
              title: "test3",
              permissions: ["author"],
              icon:"el-icon-folder-add"

            },
          },
        ],
      },
      {
        path: "test2",
        name: "test2",
        component: index,
        meta: {
          title: "test2",
          permissions: ["author"],
          icon:"el-icon-folder-add"

        },
      }
    ],
  },
];
export default asyncRouter;
