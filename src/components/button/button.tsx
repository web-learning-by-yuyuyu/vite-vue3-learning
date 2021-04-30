import { defineComponent,ref, toRefs,withModifiers} from "vue";
enum buttonType {
  success=" bg-green-400 focus:border-green-300 ",
  error = " bg-red-600 focus:border-red-300 ",
  warning =" bg-yellow-500	focus:border-yellow-300 ",
  info =" bg-gray-400 focus:border-gray-300 "
}

const zButton = defineComponent({
  name:"zButton",
  emits:["click"],
  props:{
    type:{
      type:String,
      validator: (val:string)=>{
        return ["success","warning","error","info",""].includes(val)
      }
    },
    round:{
      type:Boolean
    },
    text: {
      type:Boolean,
      default (){
        return false
      }
    }
  },
  setup (props, ctx){
    const inputInner = ()=>{
        //@ts-ignore
      return ctx.slots.default()
    }
    console.log(ctx);
    
    const {type,round,text} = toRefs<any>(props)
    const buttonClass = ref("focus:outline-none focus:ring text-center hover:bg-opacity-70 truncate max-w-xs");
    buttonClass.value +=  text&& text.value?"px-2 py-1":" px-4 py-2 text-white "
    const buttonColor = ()=>{
      const colorIndex = ref("")
      if(!type.value) {
        colorIndex.value = " bg-blue-600	focus:border-blue-300 rounded-lg"
      } else {
        colorIndex.value = buttonType[type.value] ?? " bg-blue-600 focus:border-blue-300"
      }
      if(round.value) {
        colorIndex.value +=" rounded-full "
      } else {
        colorIndex.value +=" rounded-lg "
      }
      buttonClass.value += colorIndex.value
    }  
    const loading = ref(true)
    if(!text.value){
      buttonColor()
    }
    const click = (e) =>{
      ctx.emit("click",e)
    } 
      return ()=> (
      <button onClick={withModifiers(click,["self"])} class={buttonClass.value} >
        <i v-show={loading} class='el-icon-loading'>&nbsp;</i>
        {inputInner()}
       </button>
    );
  }
})
export default zButton