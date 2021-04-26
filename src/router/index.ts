import {useUserStore} from '@store/user';
import type { App } from 'vue';
import {createRouter, createWebHashHistory } from "vue-router";
const user  = useUserStore()
console.log(user);

const router = createRouter({
  history:createWebHashHistory(),
  routes:[]
})
export default function setupRouter (app:App<Element>) {
  app.use(router)
}