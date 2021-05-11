import { useSysStore } from "@store/sys";
import { defineComponent } from "@vue/runtime-core";
import { render, Teleport } from "vue";
import { useRoute, useRouter } from "vue-router";
interface MenuItem {
  icon?: string;
  text: string;
  click: any;
}
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
    const createMenuNode = (x: number, y: number) => {
      return (
        <Teleport to="body">
          <div
            class="rigth-menu bg-white shadow-lg"
            id="right-menu"
            style={`top:${y + 5}px;left:${x + 10}px`}
            onContextmenu={e => e.preventDefault()}
          >
            {[1, 2, 3, 4, 5].map(v => {
              return createMenuItem({
                icon: "",
                text: "test",
                click: clickItem,
              } as MenuItem);
            })}
          </div>
        </Teleport>
      );
    };
    const clickItem = () => {
      console.log(2131);
    };
    const createMenuItem = (item: MenuItem) => {
      return (
        <div
          onClick={item.click}
          class="cursor-pointer w-full h-8 align-middle grid-cols-7 px-6 text-gray-500 hover:text-blue-400"
        >
          <i class={"col-span-2 " + item.icon}></i>
          <div class=" col-span-4 h-full leading-8	">{item.text}</div>
          {}
        </div>
      );
    };
    const MenuClick = (evt: MouseEvent) => {
      evt.preventDefault();
      document.querySelector("#right-menu")
        ? document.body.removeChild(
            document.querySelector("#right-menu") as Element
          )
        : "";
      const { x, y } = evt;
      const _Node = createMenuNode(x, y);
      render(_Node, document.createElement("div"));
    };
    return () => (
      <div
        onClick={handClick}
        onContextmenu={MenuClick}
        class={
          " w-auto  text-sm rounded-xl align-middle  border-solid	border-2 h-8  justify-center cursor-pointer transform transition duration-200  flex hover:bg-opacity-50 hover:text-gray-900 " +
          (route.name === prop.item.name
            ? "bg-blue-500 text-gray-200 border-blue-300"
            : "bg-white 	 text-black border-gray-200")
        }
      >
        <div
          id="title"
          class="text-center px-2 align-middle flex-1 flex items-center justify-center"
        >
          <span>{prop.item.meta.title}</span>
          <div
            class={
              "w-4 pl-1 text-center align-middle flex items-center justify-center" +
              (prop.closeAbled ? " hidden" : "")
            }
          >
            <i
              id="close"
              class={
                (route.name === prop.item.name
                  ? "text-gray-200 "
                  : "text-black") + " el-icon-circle-close"
              }
            ></i>
          </div>
        </div>
      </div>
    );
  },
});
export default zTagItem;
