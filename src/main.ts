import { createApp } from 'vue'
import App from './App.vue'
import { setupEle } from '@plugins/element'
import { setupStore} from "@store/index";
import "@styles/reset.scss"
const app = createApp(App)
setupEle(app) //安装elemet plus
setupStore(app) //安装store
app.mount('#app')
