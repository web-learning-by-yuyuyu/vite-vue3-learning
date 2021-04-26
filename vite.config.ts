import { setPlugins } from "./build/plugins/build.plugins";
import { UserConfigExport, ConfigEnv } from 'vite';

import { getAliases } from "vite-aliases";
const aliases = getAliases({
  path: "src",
  log_path: "src/logs",
  prefix: "@",
  deep: true,
  root: process.cwd(),
	depth: 2,
	addLeadingSlash: false,
	allowLogging: false,
	allowGlobalAlias: true,
	ignoreDuplicates: false,

});

const path = require("path");
const resolvePath = (src: string) => {
  return path.resolve(__dirname, src);
};
export default async ({ command, mode }:ConfigEnv):Promise<UserConfigExport>=> {
  return {
    base: "https://zy94xhn.github.io/vite2-template/",
    resolve: {
      alias: aliases,
    },
    logLevel: "info", //log等级
    server: {
      port: 40001, //端口
      strictPort: false, //端口严格模式，为true时，当端口被占用，不会继续尝试下一个能用的端口
      https: false, //https
      open: true, //自动打开窗口
      hmr: {
        overlay: true, //hot更新
      },
    },
    build: {
      outDir: "dist", //打包文件名称
      assetsDir: "assets", //打包静态文件的存储地址
      assetsInlineLimit: 4096, //静态资源小于此值的会使用base64编码引用，单位byte。设置为0禁用此项
      cssCodeSplit: true, //css 拆分
      rollupOptions: {
        output: {
          manualChunks: {
            "element-plus": ["element-plus"],
          },
        },
      },
      chunkSizeWarningLimit: 600,
    },
    optimizeDeps: {
      exclude: [], //打包排除的依赖
      include: [], //通常此项不用更改
    },
    plugins: setPlugins(command),
  };
};
