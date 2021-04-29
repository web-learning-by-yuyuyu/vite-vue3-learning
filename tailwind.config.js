module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "login-bg": "url('./src/assets/img/login_bg.png')", //本地无法打包引入
      }),
    },
  },
  variants: {},
};
