import { defineComponent, ref } from "vue";
import { useUserStore } from "@store/user";
import { getUserInfo } from "@apis/test";
const index = defineComponent({
  setup() {
    const a = ref(0);
    const user = useUserStore();
    getUserInfo().then(res => {
      console.log(res);
    });
    return () => (
      <div>
        <a href="#">{user.userName}</a>
      </div>
    );
  },
});
export default index;
