import { Directive, App, createApp,nextTick, defineComponent } from 'vue';
import loading from '../loading/loading';
const toggleLoading = (el, binding) => {
  if (binding.value) {
    nextTick(() => {
      el.instance.isShow = true;
      insertDom(el.parentNode, el);
    });
  } else {
    el.instance.isShow = false;
  }
};
const insertDom = (parent:Element, el) => {
  parent.appendChild(el.mask)
};
export const loadingDirective: Directive = (app:App) =>{
  app.directive("loading",{
    mounted(el, binding) {
      // const mask = new Loading({
      //   el:document.createElement("div"),
      //   data() {},
      // })
      const mask = createApp(loading)
      const contai = document.createElement("div")
      contai.className = "loading-wapper-c"
      mask.mount(contai)      
      el.instance = mask;      
      el.mask = mask._container
      el.maskStyle = {}
      binding.value && toggleLoading(el, binding);
    },
    updated(el, binding){
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    unmounted(el, binding){
      el.parentNode.remove
    }
  })
}