import { createI18n } from 'vue-i18n'
import type {App} from "vue"
import { localStoreApi } from '@store/localStore/local'
import { localesConfigs,changeLocaleEle } from './config/i18n.config'
const localStore = new localStoreApi()
const i18n = createI18n({
  locale: localStore.get("la")||"zh-cn",
  fallbackLocale: "en",
  messages:localesConfigs,
  legacy: false,
  globalInjection: true,
})
changeLocaleEle(localStore.get("la")||"zh")
export function setupI18n (app:App<Element>) {
 app.use(i18n)
}
export default i18n