import { createApp } from "vue";
import App from "./App";
import { setupEle } from "@plugins/element";
import { setupStore } from "@store/index";
import "@styles/reset.scss";
import "@styles/element.scss";
import { setupVxe } from "@plugins/vxe-table";
import setupRouter, { router } from "@router/index";
import "@config/router.permission";
// import "tailwindcss/";
import "@assets/css/style.css";
import { setupDirective } from "./directive";
const app = createApp(App);
setupEle(app); //安装elemet plus
setupStore(app); //安装store
setupVxe(app);
setupRouter(app);
setupDirective(app)
if (router.isReady()) {
  app.mount("#app");
}
