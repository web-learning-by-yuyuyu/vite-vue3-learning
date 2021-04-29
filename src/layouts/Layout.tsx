import { defineComponent } from "@vue/runtime-core";

const layout = defineComponent({
  setup() {
    return ()=>
    <div>
      layout
      <router-view></router-view>
    </div>
  }
})
export default layout