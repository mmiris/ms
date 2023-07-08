import { createStore } from 'vuex'
import { IRootState } from './type'
import login from './login/login'
import system from './main/system'
import analysis from './main/analysis'
import { requestList } from '@/service/main/sysytem'
import { EMutations, EActions } from './main/system/types'

const store = createStore<IRootState>({
  state: {
    name: 'shadow',
    departmentList: [],
    roleList: [],
    menuList: []
  },
  getters: {},
  mutations: {
    [EMutations.mutateDepartmentList](state, payload) {
      state.departmentList = payload.list
    },
    [EMutations.mutateRoleList](state, payload) {
      state.roleList = payload.list
    },
    [EMutations.mutateMenuList](state, payload) {
      state.menuList = payload.list
    }
  },
  actions: {
    async [EActions.actionDataList]({ commit }, payload) {
      const listRes = await requestList(payload.url, { offset: 0, size: 100 })
      const listData = { list: listRes.data.data.list }
      const url: 'Department' | 'Role' = payload.url.charAt(0).toUpperCase() + payload.url.slice(1)
      commit(EMutations[`mutate${url}List`], listData)
    }
  },
  modules: {
    login,
    system,
    analysis
  }
})

export default store
