/**
 * 封装对外接口
 */
 import { localStoreApi } from './local'
 import { SessionstorageAPI } from './session'
 
 interface UseStoreType {
   set: Function
   get: Function
   remove: Function
   getExpire?: Function
   setExpire?: Function
 }
 
 export default (store?: string): UseStoreType => {
   let UseStore
   switch (store) {
     case 'localstorage':
       UseStore = localStoreApi
       break
 
     case 'sessionstorage':
       UseStore = SessionstorageAPI
       break
 
     default:
       UseStore = localStoreApi
       break
   }
   return new UseStore()
 }
 