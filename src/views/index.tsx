import { defineComponent, ref } from "vue";

const index = defineComponent({
  setup() {
    const has = ref("admin");
    const btnLoading = ref(false);
    const type = ref("error");
    const handleCick = e => {
      console.log(e);
    };
    return () => (
      <div class="pl-20">
        {[1, 2, 3, 4].map(v => {
          return (
            <z-button
              onClick={handleCick}
              round
              loading={btnLoading.value}
              type={type.value}
            >
              按钮
            </z-button>
          );
        })}
      </div>
    );
  },
});
export default index;
/*  */
