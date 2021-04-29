import { defineConfig } from 'vite-plugin-windicss'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  attributify:true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "login-bg": "url('./src/assets/img/login_bg.png')",
      }),
    },
  },
  variants: {},
  plugins:[formsPlugin]
})