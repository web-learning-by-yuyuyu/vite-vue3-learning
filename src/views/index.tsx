import zButton from "@components/button/button";
import { defineComponent, ref } from "vue";

const index = defineComponent({
  components:{
    zButton
  },
  setup() {
    const has = ref("admin")
    const clickButton = (e) =>{
      console.log(222222);
    }
    const type =ref("primary")
    setTimeout(()=>{
      type.value = "text"
    },3000)
    return () => <div class="pl-20">
      <z-button onInCllick={clickButton} round type="error">按钮</z-button>
      </div>
  },
});
export default index;
