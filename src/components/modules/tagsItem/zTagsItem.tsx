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
          "w-20 rounded-xl align-middle  border-solid	border-2 h-10  justify-center cursor-pointer px-2 transform transition duration-200 py-1  flex hover:bg-opacity-50 hover:text-gray-900 " +
          (route.name === prop.item.name
            ? "bg-blue-500 text-gray-200 border-blue-300"
            : "bg-white 	 text-black border-gray-200")
        }
      >
        <div id="title" class="text-center flex-1">
          {prop.item.meta.title}
        </div>
        <div class={"w-4" + (prop.closeAbled ? " hidden" : "")}>
          <i id="close" class="el-icon-circle-close text-gray-200"></i>
        </div>
      </div>
    );
  },
});
export default zTagItem;
