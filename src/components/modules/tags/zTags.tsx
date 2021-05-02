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
      <div class="w-full flex h-14 justify-center p-2 border-b-2">
        <div class="w-auto px-2">
          {sysStore.fixedTags.map(item => {
            return <z-tagitem close-abled item={item}></z-tagitem>;
          })}
        </div>
        <div class="flex-1 px-2">
          {sysStore.tags.map(item => {
            return <z-tagitem item={item}></z-tagitem>;
          })}
        </div>
        <div class="w-20 flex justify-center">
          {/* 样式先留着 */}
          <el-dropdown class="h-full align-middle">
            <span>
              <i class="el-icon-scissors align-middle"></i>
            </span>
          </el-dropdown>
        </div>
      </div>
    );
  },
});
export default zTags;
