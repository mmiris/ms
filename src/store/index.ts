import { createStore } from 'vuex'
import login from './login/login'

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

export default store
