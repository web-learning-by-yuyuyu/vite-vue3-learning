import { useUserStore } from "@store/user";
import type { App,Directive } from "vue";
export const setupButtonPermission:Directive = (app:App) =>{
  app.directive("has",{
    mounted (el:HTMLElement,binding) {
      let value = binding.value
     if(!buttonHasPermisson(value)) {
      el.style.display = "none"
     }
    },
    updated(el:HTMLElement,binding) {
      let value = binding.value
      if(!buttonHasPermisson(value)) {
        el.style.display = "none"
      } else {
        el.style.display = "inline-block"
      }
    },
  })
}
export function buttonHasPermisson (binding:string| string[]):boolean {
  const store = useUserStore()
  if(isArray(binding)) {
    (binding as Array<string>).every(v =>{
      return store.permissions.includes(v)
    })
  } 
  return store.permissions.includes((binding as string))
}

export function isArray(arg) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}