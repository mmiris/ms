import { App } from 'vue'
import { mapMutations } from 'vuex'
import { EModules } from '@/store/type'
import { EMutations } from '@/store/login/type'

const setupStore = {
  install: (app: App) => {
    const mutations = mapMutations(EModules.login, { ...EMutations })
    const tempState = sessionStorage.getItem('state')

    if (tempState) {
      const state = JSON.parse(tempState)
      for (const key in mutations) {
        mutations[key as keyof typeof EMutations].call(
          { $store: app.config.globalProperties.$store },
          state[EModules.login]
        )
      }
    }
  }
}

export default setupStore
