import { createApp } from "vue";
import App from "./App";
import { setupEle } from "@plugins/element";
import { setupStore } from "@store/index";
import "@styles/reset.scss";
import "@styles/element.scss";
import "@assets/iconfont/iconfont.css"
import { setupVxe } from "@plugins/vxe-table";
import setupRouter, { router } from "@router/index";
import "@config/router.permission";
import "@assets/css/style.css";
import { setupDirective } from "./directive";
import { asyncComponent } from "./components";
import { setupI18n } from "@plugins/i18n";
const app = createApp(App);
setupI18n(app);
setupEle(app); //安装elemet plus
setupStore(app); //安装store
setupVxe(app);
setupRouter(app);
setupDirective(app);
asyncComponent(app);
if (router.isReady()) {
  app.mount("#app");
}
