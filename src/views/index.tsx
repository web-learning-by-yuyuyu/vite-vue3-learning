import { defineComponent, ref } from "vue";
import { useUserStore } from "@store/user";
const index = defineComponent({
  setup() {
    const a = ref(0);
    return () => <div>Home</div>
  },
});
export default index;
