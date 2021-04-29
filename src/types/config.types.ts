export interface BaseConfig {
  baseURL: any;
  tokenName: string;
  httpTimeOut: number;
  errorCode: ErrorResCode[] | number;
  successCode: number[] | number;
  storeLocation: StoreLocal;
  duration: number;
  tokenExpireTIme?:number//token过期时间
}
export enum ErrorResCode {
  LOGOUT = 401, //登录失效
  NO_PERMISSION = 403, //无权限
}
export enum StoreLocal {
  LOCAL = "local",
  // COOKIE = "cookie",
  SESSION = "session",
}

