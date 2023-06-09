import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISytemState, EMutations, EActions } from './types'
import { requestList, deleteRowService, newRowService, editRowService } from '@/service/main/sysytem'

type TCpnName = 'Users' | 'Role'

const system: Module<ISytemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersTotal: 0,
    roleList: [],
    roleTotal: 0,
    goodsList: [],
    goodsTotal: 0,
    menuList: [],
    menuTotal: 0,
    departmentList: [],
    departmentTotal: 0,
    categoryList: [],
    categoryTotal: 0
  },
  getters: {},
  mutations: {
    [EMutations.mutateUsersList](state, payload) {
      state.usersList = payload.list
    },
    [EMutations.mutateUsersTotal](state, payload) {
      state.usersTotal = payload.total
    },
    [EMutations.mutateRoleList](state, payload) {
      state.roleList = payload.list
    },
    [EMutations.mutateRoleTotal](state, payload) {
      state.roleTotal = payload.total
    },
    [EMutations.mutateGoodsList](state, payload) {
      state.goodsList = payload.list
    },
    [EMutations.mutateGoodsTotal](state, payload) {
      state.goodsTotal = payload.total
    },
    [EMutations.mutateMenuList](state, payload) {
      state.menuList = payload.list
    },
    [EMutations.mutateMenuTotal](state, payload) {
      state.menuTotal = payload.total
    },
    [EMutations.mutateDepartmentList](state, payload) {
      state.departmentList = payload.list
    },
    [EMutations.mutateDepartmentTotal](state, payload) {
      state.departmentTotal = payload.total
    },
    [EMutations.mutateCategoryList](state, payload) {
      state.categoryList = payload.list
    },
    [EMutations.mutateCategoryTotal](state, payload) {
      state.categoryTotal = payload.total
    }
  },
  actions: {
    async [EActions.actionDataList]({ commit }, payload) {
      const listRes = await requestList(payload.url, payload.queryInfo)
      const listData = { list: listRes.data.data.list }
      const totalCount = { total: listRes.data.data.totalCount }
      const cpnName: TCpnName = payload.url.charAt(0).toUpperCase() + payload.url.slice(1)
      commit(EMutations[`mutate${cpnName}List`], listData)
      commit(EMutations[`mutate${cpnName}Total`], totalCount)
    },
    async [EActions.actDeleteRow]({ dispatch }, payload) {
      await deleteRowService(payload.url, payload.id)
      dispatch(EActions.actionDataList, { url: payload.url, queryInfo: { offset: 0, size: 100 } })
    },
    async [EActions.actNewRow]({ dispatch }, payload) {
      await newRowService(payload.url, payload.row)
      dispatch(EActions.actionDataList, { url: payload.url, queryInfo: { offset: 0, size: 100 } })
    },
    async [EActions.actEditRow]({ dispatch }, payload) {
      await editRowService(payload.url, payload.id, payload.row)
      dispatch(EActions.actionDataList, { url: payload.url, queryInfo: { offset: 0, size: 100 } })
    }
  }
}

export default system
