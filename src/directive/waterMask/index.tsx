import { defineComponent, onMounted } from "vue";

const watermask = defineComponent({
  name: "watermask",
  setup() {
    const createWater = (str: string) => {
      let g_ster = str;
      str.length > 16 && (g_ster = str.substring(0, 16));
      const cvs = document.createElement("canvas");
      cvs.style.zIndex = "999";
      cvs.style.visibility = "hidden";
      const cans = cvs.getContext("2d");
      cans.rotate((-25 * Math.PI) / 180);
    };
    onMounted(() => {
      console.log(
        document.querySelector("#waterMask") //offsetParent：获取带有定位的最近父元素
      );
    });
    return () => (
      <div id="waterMask" class="absolute w-full h-full">
        1111
      </div>
    );
  },
});
export default watermask;
