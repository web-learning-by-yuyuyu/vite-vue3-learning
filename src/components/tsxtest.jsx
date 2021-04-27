import { defineComponent, reactive, ref, watch } from "vue";

const test =  defineComponent({
  setup () {
    const testLog = () =>{
      console.log(12312312);
    }
    let allAlign  = ref("center")
    const tableConfig = reactive({
      tableData:[{},{},{},{}]
    })
    const vxeTable = ref()
    const testMel = ref("") 
    watch(testMel,(newVal,oldVal) =>{
      console.log(oldVal,newVal);
    })
    return () =>
      <div>
       <el-button onclick={testLog} type="primary">12312</el-button>
       <el-input v-model={testMel.value}></el-input>
       <vxe-table
       ref="vxeTable"
          border
          show-header-overflow
          show-overflow
          highlight-hover-row
          align={allAlign.value}
          data={tableConfig.tableData}>
          <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column field="address" title="Address"></vxe-table-column>
        </vxe-table>
      </div>;
  }
})
export default test