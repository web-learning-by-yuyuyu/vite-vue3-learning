import { defineComponent, ref, watch, withModifiers, toRefs } from "vue";
const zButton = defineComponent({
  name: "zButton",
  emits: ["click"],
  props: {
    type: {
      type: String,
      validator: (val: string) => {
        return ["success", "warning", "error", "info"].includes(val);
      },
    },
    round: {
      type: Boolean,
    },
    text: {
      type: Boolean,
      default() {
        return false;
      },
    },
    loading: {
      type: Boolean,
    },
  },
  setup(props, ctx) {
    const inputInner = () => {
      //@ts-ignore
      return ctx.slots.default();
    };
    const buttonRef = ref<any>(null);
    const _prop = toRefs(props);
    //@ts-ignore
    const { type, round, text, loading } = _prop;
    const buttonClass = ref("");
    /* 生成样式 */
    const buttonColor = () => {
      buttonClass.value = "";
      buttonClass.value += type.value ? type.value : "";
      buttonClass.value += round.value ? " round" : "";
      buttonClass.value += text.value ? " text" : "";
    };
    buttonColor();
    /* 点击事件返回ref以及原生事件 */
    const click = e => {
      const emitData = {
        $event: e,
        el: buttonRef.value,
      };
      ctx.emit("click", emitData);
    };
    /* 监听props更新 */
    watch(props, () => {
      buttonColor();
    });
    return () => (
      <button
        ref={buttonRef}
        disabled={(ctx.attrs?.disabled as boolean) || loading.value}
        onClick={click}
        class={"z-button " + buttonClass.value}
      >
        {loading.value ? <i class="el-icon-loading">&nbsp;</i> : ""}
        {inputInner()}
      </button>
    );
  },
});
export default zButton;
