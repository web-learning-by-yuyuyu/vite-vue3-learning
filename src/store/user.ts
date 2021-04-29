import { UserLoginForm } from "@apis/models/user";
import { getToken, removeToken, setToken } from "@utils/access.token";
import { defineStore } from "pinia";
import { userInfo } from "./modules/types";
import { userModel } from "@apis/user";
import { addRoute } from "@config/router.permission";
import asyncRouter from "@router/asyncRoute/async.router";
// useStore could be anything like useUser, useCart
const state: userInfo = {
  username: "",
  email: "",
  avater: "",
  permissions: [],
  token: getToken(),
  info:{}
};
export const useUserStore = defineStore({
  // unique id of the store across your application
  id: "user",
  state() {
    return {
      ...state,
    };
  },
  getters() {},
  actions: {
    logout() {
      removeToken();
    },
    userLogin(data: UserLoginForm): Promise<any> {
      return new Promise((resolve, reject) => {
        userModel
          .login(data)
          .then(res => {
            //@ts-ignore
            const { token } = res;
            setToken(token);
            resolve(token);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    userInfo(): Promise<any> {
      return new Promise((resolve, reject) => {
        userModel
          .getUserInfo()
          .then(res => {
            addRoute(asyncRouter as any)
            //@ts-ignore
            let { username, email, avater, permissions } = res;
            this.$patch({
              username,
              email,
              avater,
              permissions,
            });
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
  },
});
