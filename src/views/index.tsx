import { defineComponent, ref } from "vue";

const index = defineComponent({
  setup() {
    const btnLoading = ref(false);
    const type = ref("error");
    const handleCick = e => {
      console.log(e);
    };
    return () => <div></div>;
  },
});
export default index;
/*  */
