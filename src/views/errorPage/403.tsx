import { defineComponent } from "@vue/runtime-core"

const pageHasNotPermission = defineComponent(
  {
    setup() {
      return () => <div class="login-wallpaper">403</div>
    }
  }
)
export default pageHasNotPermission