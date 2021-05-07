import { createI18n } from 'vue-i18n'
import type {App} from "vue"
import { localStoreApi } from '@store/localStore/local'
import { localesConfigs,changeLocaleEle } from './config/i18n.config'
const localStore = new localStoreApi()
const i18n = createI18n({
  locale: localStore.get("la")||"zh-cn",
  fallbackLocale: "en",
  //@ts-ignore
  messages:localesConfigs,
})
changeLocaleEle(localStore.get("la")||"zh-cn")
export function setupI18n (app:App<Element>) {
 app.use(i18n)
}
export default i18n