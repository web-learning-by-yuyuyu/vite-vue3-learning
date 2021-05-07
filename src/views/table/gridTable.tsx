import { defineComponent, ref } from "vue";
import testTree from "./test/tree";
const gridTable = defineComponent({
  name: "gridTable",
  components: {
    testTree,
  },
  setup() {
    const activeName = ref("first_1");
    return () => (
      <div>
        <el-tabs v-model={activeName.value}>
          {["0", "1", "2"].map(v => {
            return (
              <el-tab-pane label={v} name={"first_" + v}>
                {activeName.value === "first_" + v ? (
                  <testTree nodeKey={v}></testTree>
                ) : (
                  ""
                )}
              </el-tab-pane>
            );
          })}
        </el-tabs>
      </div>
    );
  },
});
export default gridTable;
