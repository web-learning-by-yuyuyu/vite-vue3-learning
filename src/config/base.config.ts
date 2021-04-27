// @ts-expect-error
import { BaseConfig, StoreLocal } from "@types/config.types";
const env: ImportMetaEnv = {
  VITE_APP_SERVICE_URL: import.meta.env.VITE_APP_SERVICE_URL,
};
export const baseConfig: BaseConfig = {
  baseURL: env.VITE_APP_SERVICE_URL,
  httpTimeOut: 10000,
  storeLocation: StoreLocal.LOCAL,
  errorCode: [401, 403],
  successCode: [200, 0],
  tokenName: "access_token",
  duration: 3000,
};
