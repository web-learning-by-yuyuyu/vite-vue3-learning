//@ts-nocheck

import { createVNode, h, reactive, ref, render, toRefs, Transition, VNode, vShow, withCtx, withDirectives } from 'vue'
import { removeClass } from 'element-plus/es/utils/dom'
import type { ILoadingCreateComponentParams, ILoadingInstance } from './loading.type'

export function createLoadingComponent({
  options,
  globalLoadingOption,
}: ILoadingCreateComponentParams): ILoadingInstance {
  let vm: VNode = null
  let afterLeaveTimer: Nullable<number> = null
  /* 创建data */
  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false,
  })
  /* 设置文本 */
  function setText(text: string) {
    data.text = text
  }
  /* 销毁 */
  function destroySelf() {
    const target = data.parent
    if (!target.vLoadingAddClassList) {
      let loadingNumber: number | string = target.getAttribute('loading-number')
      loadingNumber = Number.parseInt(loadingNumber) - 1
      if (!loadingNumber) {
        removeClass(target, 'el-loading-parent--relative')
        target.removeAttribute('loading-number')
      } else {
        target.setAttribute('loading-number', loadingNumber.toString())
      }
      removeClass(target, 'el-loading-parent--hidden')
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el)
    }
  }
/* 关闭 */
  function close() {
    const target = data.parent
    target.vLoadingAddClassList = null
    if (data.fullscreen) {
      globalLoadingOption.fullscreenLoading = undefined
    }
    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false
        destroySelf()
      }
    }, 400)
    data.visible = false
  }
/* 关闭之前的调用 */
  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return
    afterLeaveFlag.value = false
    destroySelf()
  }
/* v3的setup */
  const componentSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave,
  }
  /* 生成组件 */
  const elLoadingComponent = {
    name: 'ElLoading',
    setup() {
      return componentSetupConfig
    },
    render() {
      /* 生成圆点 */
      const spinner = h('svg', {
        class: 'circular',
        viewBox: '25 25 50 50',
      }, [
        h('circle', { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' }),
      ])
      /* 自定义loading 部分 */
      const line = h("div", {
        class:"w-full flex justify-center"
      }, [
        h("div", { class: 'bar' }),
        h("div", { class: 'bar' }),
        h("div", { class: 'bar' }),
        h("div", { class: 'bar' }),
        h("div", { class: 'bar' }),
        h("div", {class:'bar'}),
        h("div", { class: 'bar' }),
        h("div", {class:'bar'}),
      ])
      const noSpinner = h('i', { class: this.spinner })
      /* 文字text */
      const spinnerText = h('p', { class: 'el-loading-text inline-block py-4 loading-text' }, [this.text])
      /* 渲染loading */
      return h(Transition, {
        name: 'el-loading-fade',
        onAfterLeave: this.handleAfterLeave,
      }, {
        default: withCtx(() => [withDirectives(createVNode('div', {
          style: {
            backgroundColor: this.background || '',
          },
          class: [
            'el-loading-mask',
            this.customClass,
            this.fullscreen ? 'is-fullscreen' : '',
          ],
        }, [
          h('div', {
            class: 'w-full flex-col h-full relative overflow-hidden flex items-center justify-center',
          }, [
            !this.spinner ? line : noSpinner,
            this.text ? spinnerText : null,
          ]),
        ]),
        [[vShow, this.visible]])]),
      })
    },
  }
  /* 创建vNode */
  vm = createVNode(elLoadingComponent)

  render(vm, document.createElement('div'))

  return {
    ...componentSetupConfig,
    vm,
    get $el() {
      return vm.el as HTMLElement
    },
  }
}