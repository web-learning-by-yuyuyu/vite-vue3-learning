import type {App} from "vue"
import { ElButton, ElSelect,  ElInfiniteScroll,ElInput,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification, locale} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
// @ts-expect-error
import { ELE_SIZE } from "@types/ele.types";
const elComponents =[ElButton,ElSelect,ElInput]
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]
export function setupEle(app:App<Element>) {
  const options = {
    size:ELE_SIZE.mini
    //自定义element全局属性
  }
  elComponents.forEach( v => {
    app.component(v.name,v)
  })
  plugins.forEach(p => {
    app.use(p)
  })
}