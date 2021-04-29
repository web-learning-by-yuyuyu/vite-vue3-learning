import { createApp } from "vue";
import App from "./App";
import { setupEle } from "@plugins/element";
import { setupStore } from "@store/index";
import "@styles/reset.scss";
import "@styles/element.scss";
import { setupVxe } from "@plugins/vxe-table";
import setupRouter, { router } from "@router/index";
import "@config/router.permission";
import 'virtual:windi.css'
const app = createApp(App);
setupEle(app); //安装elemet plus
setupStore(app); //安装store
setupVxe(app);
setupRouter(app);
if (router.isReady()) {
  app.mount("#app");
}
