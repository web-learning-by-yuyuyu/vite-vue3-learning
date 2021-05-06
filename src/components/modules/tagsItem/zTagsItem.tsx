import { useSysStore } from "@store/sys";
import { defineComponent } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

const zTagItem = defineComponent({
  name: "zTagitem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeAbled: {
      type: Boolean,
    },
  },
  setup(prop, ctx) {
    const route = useRoute();
    const router = useRouter();
    const sysStore = useSysStore();
    const handClick = evt => {
      switch (evt.target.id) {
        case "close":
          sysStore.removeItem(prop.item);
          break;
        default:
          router.push({ name: prop.item.name });
          break;
      }
    };
    return () => (
      <div
        onClick={handClick}
        class={
          " w-16  text-sm rounded-xl align-middle  border-solid	border-2 h-8  justify-center cursor-pointer transform transition duration-200  flex hover:bg-opacity-50 hover:text-gray-900 " +
          (route.name === prop.item.name
            ? "bg-blue-500 text-gray-200 border-blue-300"
            : "bg-white 	 text-black border-gray-200")
        }
      >
        <div
          id="title"
          class="text-center align-middle flex-1 flex items-center justify-center"
        >
          <span>{prop.item.meta.title}</span>
        </div>
        <div
          class={
            "w-4 text-center align-middle flex items-center justify-center" +
            (prop.closeAbled ? " hidden" : "")
          }
        >
          <i id="close" class={(route.name === prop.item.name?"text-gray-200 ":"text-black")+" el-icon-circle-close"}></i>
        </div>
      </div>
    );
  },
});
export default zTagItem;
