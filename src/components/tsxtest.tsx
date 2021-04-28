import { defineComponent, onMounted, reactive, ref, watch,nextTick } from "vue";
import { VxeTableInstance, VxeToolbarInstance, VxeTableEvents } from "vxe-table";
const test = defineComponent({
  setup() {
    const vxeTable = ref({} as VxeTableInstance);
    const btn = ref<any>(null)
    const testLog = () => {
      console.log(12312312);
    };
    let allAlign = ref("center");
    const tableData = reactive([{},{},{}])
    const testMel = ref("");

    const tableLoading = ref(false);
    setTimeout(()=>{
      const $table = vxeTable.value;
      $table.loadData([{}])
       console.log(btn.value);
    },4000)
    return () => (
      <>
        <el-button ref={btn} onclick={testLog} type="primary">
          12312
        </el-button>
        <el-input v-model={testMel.value}></el-input>
        <vxe-table
          ref={vxeTable}
          border
          show-header-overflow
          show-overflow
          highlight-hover-row
          align={allAlign.value}
          data={tableData}
          loading= {tableLoading.value}
        >
          <vxe-table-column
            type="seq"
            title="序号"
            width="60"
          ></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address"></vxe-table-column>
        </vxe-table>
      </>
    );
  },
});
export default test;
