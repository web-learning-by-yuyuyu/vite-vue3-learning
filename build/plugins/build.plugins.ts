/* 
 *  生成vite插件
 */
import { viteMockServe  } from "vite-plugin-mock";
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import { htmlConf } from './html.config'
import {compressConf} from '../compress/compress.conf';
import tsx from "../tsx/tsx.config"
export function setPlugins (command:string) {
  const plugins:any[] = []
  plugins.push(vue())
  //按需引入element
  const element = styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  })
  plugins.push(element)
  //mock-server
  const mock = viteMockServe({
    mockPath:"src/mock",
    watchFiles:true,
    logger:true,
    localEnabled:true,
    prodEnabled:true,
    injectCode:`
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
  `,
    supportTs:true})
  plugins.push(mock)
  //ts路径
  plugins.push(tsconfigPaths())
  return [...plugins,...htmlConf,compressConf,tsx]
}