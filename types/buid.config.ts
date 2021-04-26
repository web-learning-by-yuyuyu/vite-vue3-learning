//   plugins: [ {
//     name: 'replace-importer', 
//     renderChunk(code) {
//       // add esm cdn link
//       code = code.replace(/from.*("|'vue"|')/g, 'from "https://cdn.bootcdn.net/ajax/libs/vue/3.0.2/vue.esm-browser.js"')
//       return { code, map: null }
//     }
//   }]
interface CdnPlugins {
  name?:string,
  renderChunk?:Function
}
export type cndPlugin = CdnPlugins