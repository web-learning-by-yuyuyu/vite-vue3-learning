import useLocal from "@store/localStore"
import { baseConfig } from "@config/base.config"
import { useRouter } from "vue-router"

const store =  useLocal()
const router = useRouter()
export const getToken = ():string=>{
 return store.get(baseConfig.tokenName)
}
export const setToken = (val:string):string=>{
  return store.set(baseConfig.tokenName,val)
 }
export const removeToken = ():void=>{
   store.set(baseConfig.tokenName)
   router.push({name:"login"})
 }