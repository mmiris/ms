import { App } from 'vue'
import { mapMutations } from 'vuex'
import { EModules } from '@/store/type'
import { EMutations } from '@/store/login/type'

const setupStore = {
  install(app: App) {
    const store = app.config.globalProperties.$store
    const mutations = mapMutations(EModules.login, { ...EMutations })
    const tempState = sessionStorage.getItem('state')

    if (tempState) {
      const state = JSON.parse(tempState)
      for (const key in mutations) {
        mutations[key as keyof typeof EMutations].call({ $store: store }, state[EModules.login])
      }
    }
    sessionStorage.removeItem('state')

    window.addEventListener('beforeunload', (e) => {
      const state = JSON.stringify(store.state)
      sessionStorage.setItem('state', state)
      e.returnValue = ''
      return true
    })
  }
}

export default setupStore
