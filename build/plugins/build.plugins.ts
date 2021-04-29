/*
 *  生成vite插件
 */
import vueJsx from '@vitejs/plugin-vue-jsx'
import { minifyHtml,injectHtml } from 'vite-plugin-html'

import { viteMockServe } from "vite-plugin-mock";
import styleImport from "vite-plugin-style-import";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
export function setPlugins(command: string) {
  const plugins: any[] = [];
  plugins.push(vue());
  //按需引入element
  const element = styleImport({
    libs: [
      {
        libraryName: "element-plus",
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: name => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: name => {
          return `element-plus/lib/${name}`;
        },
      },
    ],
  });
  plugins.push(element);
  //mock-server
  const mock = viteMockServe({
    mockPath: "src/mock",
    watchFiles: true,
    logger: true,
    localEnabled: true,
    prodEnabled: true,
    injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
  `,
    supportTs: true,
  });
  plugins.push(mock);
  //ts路径
  plugins.push(tsconfigPaths());
  /* html */
  plugins.push(minifyHtml())
  plugins.push(injectHtml({
    injectData:{
      title:"vite2-by-i94xhn",
      // injectScript: '<script src="https://unpkg.com/element-plus/lib/index.full.js"></script>',
    }
  }))
  /* jsx */
  plugins.push(vueJsx())
  return plugins;
}
