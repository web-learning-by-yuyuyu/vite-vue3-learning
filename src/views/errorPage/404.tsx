import { defineComponent } from "@vue/runtime-core"

const pageNotFound = defineComponent(
  {
    setup() {
      return () => <div>404</div>;
    }
  }
)
export default pageNotFound