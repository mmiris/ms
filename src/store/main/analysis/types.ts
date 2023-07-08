interface IAnalysisState {
  categoryCount: any[]
  categorySale: any[]
  categoryFavor: any[]
  addressSale: any[]
}

enum EMutations {
  mutateCategoryCount = 'mutateCategoryCount',
  mutateCategorySale = 'mutateCategorySale',
  mutateCategoryFavor = 'mutateCategoryFavor',
  mutateAddressSale = 'mutateAdressSale'
}

enum EActions {
  actVisualData = 'actVisualData'
}

export { IAnalysisState, EMutations, EActions }
