import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  watch,
  onMounted,
  computed,
} from "vue";

const testTree = defineComponent({
  name: "testTree",
  props: {
    nodeKey: {
      type: String,
      required: true,
      default: () => {
        return 0;
      },
    },
  },
  setup(prop, ctx) {
    const _prop = toRefs(prop);
    const defaultProps = reactive({
      children: "children",
      label: "label",
    });
    const treeData = ref([
      [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
      ],
      [
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
          ],
        },
      ],
      [
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
          ],
        },
      ],
    ]);
    return () => (
      <el-tree
        //@ts-ignore
        data={treeData.value[prop.nodeKey]}
        props={defaultProps}
      ></el-tree>
    );
  },
});
export default testTree;
