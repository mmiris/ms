import router from '@/router'
import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState, EMutations, EActions, IAccount } from './type'
import { requestLogin, requestUserInfo, requestUserMenus } from '@/service/login/login'
import localCache from '@/utils/local-cache'
import mapMenus2Routes from '@/utils/map-menus-routes'
import mapMenus2Permissions from '@/utils/map-menus-permission'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: []
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
      const routes = mapMenus2Routes(payload.userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      state.permissions = mapMenus2Permissions(payload.userMenus)
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

      router.push('/main')
      return loginData.token
    }
  }
}

export default login
