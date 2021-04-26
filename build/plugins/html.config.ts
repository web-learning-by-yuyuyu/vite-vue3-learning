import { minifyHtml,injectHtml } from 'vite-plugin-html'
export const htmlConf = [
  minifyHtml(),
  injectHtml({
    injectData:{
      title:"vite2-by-i94xhn",
      // injectScript: '<script src="https://unpkg.com/element-plus/lib/index.full.js"></script>',
    }
  })
]