import { baseConfig } from "@config/base.config";
import { defineComponent, readonly, toRefs } from "vue";

const zLogo = defineComponent({
  name: "zLogo",
  setup(prop, ctx) {
    const { sysName } = baseConfig;
    return () => (
      <div class="hidden  h-full md:flex items-center w-full justify-center cursor-pointer">
        <img
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          alt="logo"
          srcset=""
          class=" md:w-20 px-4"
        />
        <div class="px-4  md:px-2 truncate text-gray-800 font-sans tracking-wide  antialiased">
          {sysName}
        </div>
      </div>
    );
  },
});
export default zLogo;
