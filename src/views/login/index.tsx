import { UserLoginForm } from "@apis/models/user";
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { ElFormItemContext } from "element-plus/lib/el-form";
import { useUserStore } from "@store/user";
const login = defineComponent({
  setup () {
    const userStore = useUserStore()
    const loginForm = ref<any>({} as ElFormItemContext)
    const loginFromRules = reactive({
      username:[
        {required:true,message:"请输入账号",trigger:"blur"}
      ],
      password:[
        {required:true,message:"请输入密码",trigger:"blur"}
      ]
    })
    const submitForm = reactive({
      username:'',
      password:"",
      isRemenber:false,
    } as UserLoginForm)
    const buttonLoading = ref(false)
    const submitAction = () =>{
      buttonLoading.value = true;
      loginForm.value.validate(val =>{
        if(val) {
          userStore.userLogin(submitForm).then(()=>{
            buttonLoading.value = false
            userStore.userInfo().then(res=>{
              console.log(res);
              console.log(userStore);
            })
          }).catch(err =>{
            buttonLoading.value =false
          })
        }
      })
    }
    return () => <div class="flex justify-center items-center xl:justify-between md:flex-row-reverse mr-auto md:w-screen w-screen bg-login-bg h-screen bg-cover">
      <div class="bg-opacity-50  w-10/12 h-1/2 md:w-1/2 md:h-3/5 xl:w-2/5 xl:h-3/6 xl:mr-80 lg:w-1/2 lg:h-3/6 bg-gray-100 shadow-xl rounded-3xl">
        <div class="subpixel-antialiased mt-10 md:mt-2 md:p-8 md:pb-2 font-sans text-2xl text-center md:text-left p-4 text-gray-500 hover:scale-100">欢迎来到，缝合怪的世界</div>
        <div class="w-full p-4 mt-10 md:mt-2.5 md:p-8">
          <el-form ref={loginForm} rules={loginFromRules} model={submitForm}>
            <el-form-item size="medium" prop="username">
              <el-input type="text" size="medium" class="login-input" vModel={submitForm.username} v-slots={
                {
                  prefix:()=><i class="el-icon-user"></i>
                }
              }>
              </el-input>
            </el-form-item >
            <el-form-item size="medium" prop="password">
              <el-input type="password"  size="medium" class="login-input" vModel={submitForm.password} v-slots={
                {
                  prefix:()=><i class="el-icon-unlock"></i>
                }
              }></el-input>
            </el-form-item>
          </el-form>
          <div class="w-full flex flex-row">
            <div class="w-1/2 text-left"><el-checkbox vModel={submitForm.isRemenber}>记住密码</el-checkbox></div>
            <div class="text-gray-400 cursor-pointer hover:text-red-300 w-1/2 text-right">忘记密码?</div>
          </div>
          <div class="w-full mt-2 text-center">
            <el-button onClick={submitAction} loading = {buttonLoading.value} type="primary">submit</el-button>
             </div>
        </div>
      </div>
    </div>; 
  }
})

export default login