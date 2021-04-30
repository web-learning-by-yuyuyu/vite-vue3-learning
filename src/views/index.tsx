import { defineComponent, ref } from "vue";
const index = defineComponent({
  setup() {
    const has = ref("admin")
    return () => <div>
      <el-button vHas={has.value} type="primary">tttt</el-button>
      </div>
  },
});
export default index;
