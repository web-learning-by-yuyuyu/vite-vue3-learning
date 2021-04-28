import serve from "@utils/request";
import { UserLoginForm } from "./models/user";

export const userModel = {
  login: (data:UserLoginForm)=> {
    return serve({
      data,
      method:"post",
      url:"api/user/login"
    })
  }
}