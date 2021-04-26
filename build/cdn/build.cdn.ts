
import type {cndPlugin} from "../../types/buid.config"
export const externals:string[] = ["vue","element-plus"]
export const plugins:cndPlugin[] = [
  {
    name:"replace-importer",
    renderChunk (code){
      code = code.replace(/from.*("|'vue"|')/g, 'from "https://unpkg.com/vue@next"')
      return { code, map: null }
    }
  },
  {
    name:"replace-importer",
    renderChunk (code){
      code = code.replace(/from.*("|'element-plus"|')/g, 'from "https://unpkg.com/element-plus/lib/index.full.js"')
      return { code, map: null }
    }
  },
]