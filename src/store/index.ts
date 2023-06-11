import { createStore, useStore, Store } from 'vuex'
import login from './login/login'
import { IStore } from './type'

const store = createStore({
  state: {
    name: 'shadow'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function useStoreWithinModules() {
  return useStore<Store<IStore>>()
}

export default store
