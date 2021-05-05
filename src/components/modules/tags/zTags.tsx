import { useSysStore } from "@store/sys";
import {
  computed,
  defineComponent,
  watch,
  watchEffect,
} from "@vue/runtime-core";
import { useRoute } from "vue-router";

const zTags = defineComponent({
  name: "zTags",
  setup() {
    const sysStore = useSysStore();
    return () => (
      <div class="w-full flex h-12 justify-center px-2 py-1 border-b-2">
        <div class="w-full overflow-y-scroll flex">
          {sysStore.fixedTags.map(item => {
            return <z-tagitem close-abled item={item} class="ml-2"></z-tagitem>;
          })}
          {sysStore.tags.map(item => {
            return <z-tagitem item={item} class="ml-2"></z-tagitem>;
          })}
        </div>
      </div>
    );
  },
});
export default zTags;
