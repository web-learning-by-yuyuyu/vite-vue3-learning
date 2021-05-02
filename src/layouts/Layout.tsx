import { defineComponent } from "vue";

const layout = defineComponent({
  setup() {
    return () => (
      <div class=" w-screen flex flex-col">
        <div class="header">
          <z-header />
        </div>
        <div class="flex">
          <div class="w-auto">
            <z-slider></z-slider>
          </div>
          <div class="flex-1 main-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    );
  },
});
export default layout;
