import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { IAnalysisState, EMutations, EActions } from './types'
import { categoryCountService, categorySaleService, categoryFavorService, addressSaleService } from '@/service/analysis'

const analysis: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state: {
    categoryCount: [],
    categorySale: [],
    categoryFavor: [],
    addressSale: []
  },
  mutations: {
    [EMutations.mutateCategoryCount](state, payload) {
      state.categoryCount = payload.data
    },
    [EMutations.mutateCategorySale](state, payload) {
      state.categorySale = payload.data
    },
    [EMutations.mutateCategoryFavor](state, payload) {
      state.categoryFavor = payload.data
    },
    [EMutations.mutateAddressSale](state, payload) {
      state.addressSale = payload.data
    }
  },
  actions: {
    async [EActions.actVisualData]({ commit }) {
      const categoryCountRes = await categoryCountService()
      commit(EMutations.mutateCategoryCount, { data: categoryCountRes.data.data })

      const categorySaleRes = await categorySaleService()
      commit(EMutations.mutateCategorySale, { data: categorySaleRes.data.data })

      const categoryFavorRes = await categoryFavorService()
      commit(EMutations.mutateCategoryFavor, { data: categoryFavorRes.data.data })

      const addressSaleRes = await addressSaleService()
      commit(EMutations.mutateAddressSale, { data: addressSaleRes.data.data })
    }
  }
}

export default analysis
