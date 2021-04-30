interface ImportMetaEnv {
  VITE_APP_SERVICE_URL?:string,
  VITE_APP_TITLE?:string,
  BASE_URL?:string,
  MODE?:string,
  DEV?:string,
  PROD?:string,
}

declare global {
    interface ImportMeta {
    env: Record<string, unknown>;
   globEager<T = unknown>(globPath: string): Record<string, T>;
  }
}