import { getToken, removeToken } from '@utils/access.token'
import { defineStore } from 'pinia'
import { userInfo } from './modules/types'

// useStore could be anything like useUser, useCart
const state:userInfo={
  userName:"",
  sex:0,
  age:12,
  permission:[],
  token:getToken(),
}
export const useUserStore = defineStore({
  // unique id of the store across your application
  id: 'user',
  state () {
    return {
     ...state
    }
  },
  getters() {
    
  },
  actions:{
    logout() {
      removeToken()
    }
    
  }
})