// 菜单国际化配置
// vxe-table组件国际化
import zhVxeTable from "vxe-table/lib/locale/lang/zh-CN";
import enVxeTable from "vxe-table/lib/locale/lang/en-US";

// element-plus国际化
import { locale } from "element-plus";
import enLocale from "element-plus/lib/locale/lang/en";
import zhLocale from "element-plus/lib/locale/lang/zh-cn";
//@ts-ignore
import zh from "@locales/zh";
//@ts-ignore
import en from "@locales/en";
export function changeLocaleEle(bind: string): void {}

export const localesConfigs = {
  zh: {
    ...zh,
    ...zhVxeTable,
    ...zhLocale,
  },
  en: {
    ...en,
    ...enVxeTable,
    ...enLocale,
  },
};
