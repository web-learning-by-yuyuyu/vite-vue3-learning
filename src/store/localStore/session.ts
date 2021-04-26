/**
 * sessionstorage 封装
 */

 class SessionstorageAPI {
  set(key: string, value: string): void {
    return sessionStorage.setItem(key, value)
  }

  get(key: string): string {
    return sessionStorage.getItem(key) || ''
  }

  remove(key: string): void {
    return sessionStorage.removeItem(key)
  }
}

export { SessionstorageAPI }
