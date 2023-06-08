import { Module } from 'vuex'
import IRootState from '../type'
import { ILoginState, Actions, IAccount } from './type'
import { loginRequest } from '@/service/login/login'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: '',
    userMenus: ''
  },
  getters: {},
  mutations: {},
  actions: {
    [Actions.LOGIN]: async ({ commit }, payload: IAccount) => {
      console.log(payload)
      const data = await loginRequest(payload)
      console.log(data)
    }
  }
}

export default login
