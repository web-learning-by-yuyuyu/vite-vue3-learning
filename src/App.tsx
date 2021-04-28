import { defineComponent } from "vue";
const App = defineComponent({
  name: "app",
  setup(prop, ctx) {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    );
  },
});
export default App;
