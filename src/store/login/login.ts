import router from '@/router'
import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState, EMutations, EActions, IAccount } from './type'
import { requestLogin, requestUserInfo, requestUserMenus } from '@/service/login/login'
import localCache from '@/utils/localCache'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: []
  },
  getters: {},
  mutations: {
    [EMutations.mutateToken](state, payload) {
      state.token = payload.token
    },
    [EMutations.mutateUserInfo](state, payload) {
      state.userInfo = payload.userInfo
    },
    [EMutations.mutateUserMenus](state, payload) {
      state.userMenus = payload.userMenus
    }
  },
  actions: {
    [EActions.actionLogin]: async ({ commit }, payload: IAccount) => {
      const loginRes = await requestLogin(payload)
      const loginData = { token: loginRes.data.data.token, id: loginRes.data.data.id }
      commit(EMutations.mutateToken, loginData)
      localCache.setItem('token', loginData.token)

      const userInfoRes = await requestUserInfo(loginData.id)
      const userInfoData = { userInfo: userInfoRes.data.data }
      commit(EMutations.mutateUserInfo, userInfoData)

      const userMenusRes = await requestUserMenus(userInfoData.userInfo.role.id)
      const userMenusData = { userMenus: userMenusRes.data.data }
      commit(EMutations.mutateUserMenus, userMenusData)

      // sessionStorage.setItem('state', JSON.stringify(store.state))
      router.push('/main')
      return loginData.token
    }
  }
}

export default login
