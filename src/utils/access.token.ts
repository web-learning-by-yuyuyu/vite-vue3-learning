import useLocal from "@store/localStore"
import { baseConfig } from "@config/base.config"
import { useRouter } from "vue-router"
//@ts-ignore
import { StoreLocal } from "@types/config.types"

const store =  useLocal()
const router = useRouter()
export const getToken = ():string=>{
 if (baseConfig.tokenExpireTIme && baseConfig.storeLocation === StoreLocal.LOCAL) {
  return store.getExpire(baseConfig.tokenName,baseConfig.tokenExpireTIme)
} else {
  return store.get(baseConfig.tokenName)
}
}
export const setToken = (val:string):string=>{
  if (baseConfig.tokenExpireTIme && baseConfig.storeLocation === StoreLocal.LOCAL) {
    return store.setExpire(baseConfig.tokenName,val,baseConfig.tokenExpireTIme)
  } else {
    return store.set(baseConfig.tokenName,val)
  }
 }
export const removeToken = ():void=>{
   store.remove(baseConfig.tokenName)
   router.push({name:"login"})
 }