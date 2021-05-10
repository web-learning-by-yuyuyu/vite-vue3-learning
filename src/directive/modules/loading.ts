import {
  Directive,
  App,
  createApp,
  nextTick,
  defineComponent,
  createVNode,
} from "vue";
import loading from "../loading/loading";
const toggleLoading = (el, binding) => {
  if (binding.value) {
    nextTick(() => {
      el.instance.isShow = true;
      insertDom(el.parentNode, el);
    });
  } else {
    el.parentNode.removeChild(el);
  }
};
const insertDom = (parent: Element, el) => {
  parent.appendChild(el.mask);
};
const createInstance= (el,binding) =>{
  const isShow = binding.value
  const vm = binding.instance;
  console.log(vm)
  el.instance = loading
}
export const loadingDirective: Directive = (app: App) => {
  app.directive("loading", {
    // mounted(el, binding) {
    //   // const mask = new Loading({
    //   //   el:document.createElement("div"),
    //   //   data() {},
    //   // // })
    //   // const vm = createVNode(loading);
    //   // console.log(vm);
    //   // const contai = document.createElement("div");
    //   // vm.mount(contai);
    //   // contai.className = "loading-wapper-c";
    //   // el.appendChild(contai);
    //   // const mask = createApp(loading);
    //   // vm.mount(contai);
    //   // console.log(vm);
    //   // el.instance = mask;
    //   // el.mask = mask._context;
    //   // el.maskStyle = {};
    //   // binding.value && toggleLoading(el, binding);
    // },
    mounted(el, binding) {
      if (!!binding.value) {
        createInstance(el, binding);
      }
    },
    updated(el, binding) {
      if (binding.value) {
        toggleLoading(el, binding);
      }
    },
    unmounted(el, binding) {
      binding.value && el.parentNode.removeChild(el);
    },
  });
};
