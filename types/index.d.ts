declare type Recordable<T = any> = Record<string, T>;
import * as axios from "axios";

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}
