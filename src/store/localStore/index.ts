/**
 * 封装对外接口
 */
 import { localStoreApi } from './local'
 import { SessionstorageAPI } from './session'
 import { baseConfig } from "@config/base.config"

 interface UseStoreType {
   set: Function
   get: Function
   remove: Function
   getExpire: Function
   setExpire: Function
 }
 
 export default (): UseStoreType => {
   let store = baseConfig.storeLocation,UseStore;
   switch (store) {
     case 'local':
       UseStore = localStoreApi
       break
 
     case 'session':
       UseStore = SessionstorageAPI
       break
 
     default:
       UseStore = localStoreApi
       break
   }
   return new UseStore()
 }
 