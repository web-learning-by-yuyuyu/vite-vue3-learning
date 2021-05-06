import { createI18n } from 'vue-i18n'
import type {App} from "vue"
import zh from "@locales/zh.json"
export function setupI18n (app:App<Element>) {
  const i18n = createI18n({
    locale: 'zh',
    globalInjection:true,
    legacy:false,
    messages:{
      zh
    }
  })
  app.use(i18n)
}