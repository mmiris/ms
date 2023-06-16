import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISytemState, EMutations, EActions } from './types'
import { requestUserList } from '@/service/main/sysytem'

const system: Module<ISytemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersTotal: 0
  },
  getters: {},
  mutations: {
    [EMutations.mutateUsersList](state, payload) {
      state.usersList = payload.usersList
    },
    [EMutations.mutateUsersTotal](state, payload) {
      state.usersTotal = payload.usersTotal
    }
  },
  actions: {
    async [EActions.actionGetUsersList]({ commit }, payload) {
      const usersListRes = await requestUserList(payload)
      const usersListData = { usersList: usersListRes.data.data.list }
      const usersTotalData = { usersTotal: usersListRes.data.data.totalCount }
      commit(EMutations.mutateUsersList, usersListData)
      commit(EMutations.mutateUsersTotal, usersTotalData)
    }
  }
}

export default system
