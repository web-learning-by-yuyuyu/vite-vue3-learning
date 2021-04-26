import { createPinia } from "pinia";
import type { App} from "vue"
export function setupStore (app:App<Element>) {
  app.use(createPinia())
}