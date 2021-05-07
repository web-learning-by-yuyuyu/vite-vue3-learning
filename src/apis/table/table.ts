import serve from "@utils/request";
import qs from "qs"

const tableModel = {
  base:(args:TableArgs)=>{
    return serve({
      url:"/api/baseTable?"+qs.stringify(args),
      method:"get"
    })
  }
}
export default tableModel