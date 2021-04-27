import { defineComponent } from "vue";
import TestModel from "@components/tsxtest"
const App = defineComponent({
  name:"app",
  components:{
    TestModel
  },
  setup(prop,ctx) {
    return () => <TestModel></TestModel>;
  }
})
export default App