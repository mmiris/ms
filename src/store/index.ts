import { createStore, useStore, Store } from 'vuex'
import login from './login/login'
import system from './main/system'

const store = createStore({
  state: {
    name: 'shadow'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export default store
