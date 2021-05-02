import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { useSysStore } from "@store/sys";
import { useRoute } from "vue-router";
const zBreadcrumb = defineComponent({
  name: "zBreadcrumb",
  setup(prop, ctx) {
    const isExp = ref(false);
    const useStore = useSysStore();
    const route = useRoute();
    const exp = () => {
      /* 改变全局状态 */
      isExp.value = !isExp.value;
      useStore.$patch({
        collapse: isExp.value,
      });
    };
    return () => (
      <div class="h-full flex items-center truncate">
        <i
          onClick={exp}
          class={
            "el-icon-s-unfold font-light text-gray-600 text-3xl cursor-pointer transform hover:scale-110 duration-500" +
            (isExp.value ? " rotate-180" : "")
          }
        ></i>
        <el-breadcrumb
          separator-class="el-icon-arrow-right text-red-300"
          class="px-4 w-max"
        >
          {route.matched.map(v => {
            return (
              <el-breadcrumb-item to={v.path}>
                {v.meta.title}
              </el-breadcrumb-item>
            );
          })}
        </el-breadcrumb>
      </div>
    );
  },
});
export default zBreadcrumb;
