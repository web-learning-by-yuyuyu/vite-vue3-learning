declare module 'vue-router' {
  interface RouteMeta {
   title?:string,
   icon?:string,
   isHidden?:boolean,
   eachInMenu?:boolean,
   permissions?:Array<T>,
  }
}