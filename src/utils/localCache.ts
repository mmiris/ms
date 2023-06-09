class LocalCache {
  getItem(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

const localCache = new LocalCache()

export default localCache
