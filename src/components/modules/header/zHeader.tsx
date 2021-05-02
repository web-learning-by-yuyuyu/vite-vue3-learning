import { useRouteStore } from "@store/routes";
import { computed, defineComponent, toRefs } from "vue";

const zHeaer = defineComponent({
  name: "zHeader",
  setup(props, ctx) {
    const routeStore = useRouteStore();
    const routeList = computed(() => {
      return routeStore.asyncRouts;
    });
    return () => (
      <div class="w-full md:space-x-4 grid grid-cols-8 gap-4 h-12 border-b-2 overflow-hidden leading-tight">
        <z-logo class="col-span-1" />
        <z-breadcrumb class="col-span-4"></z-breadcrumb>
        <z-usermenu class="col-span-4 md:col-span-3"></z-usermenu>
      </div>
    );
  },
});
export default zHeaer;
