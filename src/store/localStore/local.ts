class localStoreApi {
  set (key:string,val:string) {
    try {
      localStorage.setItem(key,val)
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        throw new Error('Out of Memory Limit Localstorage')
      } else {
        throw new Error(e.name)
      }
    }
  }
  get(key: string): string {
    return localStorage.getItem(key) || ''
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }

  // 有时效的 localStorage
  setExpire(key: string, value: string, expire: number): void {
    const curTime = new Date().getTime()
    return this.set(key, JSON.stringify({ val: value, time: curTime + expire }))
  }

  getExpire(key: string): string {
    const val: string = this.get(key)
    const dataObj = JSON.parse(val)
    if (new Date().getTime() - dataObj.time < 0) {
      return dataObj.val
    } else {
      dataObj !== "" && this.remove(key) //获取成功 但是超时，删除该item
      return ''
    }
  }
/* 作者：沐寒晚枫 掘金*/
}

export {localStoreApi}