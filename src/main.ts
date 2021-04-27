import { createApp } from 'vue'
import App from './App.jsx'
import { setupEle } from '@plugins/element'
import { setupStore} from "@store/index";

import "@styles/reset.scss"
import { setupVxe } from '@plugins/vxe-table';
const app = createApp(App)
setupEle(app) //安装elemet plus
setupStore(app) //安装store
setupVxe(app);
app.mount('#app')
