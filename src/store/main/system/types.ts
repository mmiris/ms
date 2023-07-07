interface ISytemState {
  usersList: any[]
  usersTotal: number
  roleList: any[]
  roleTotal: number
  goodsList: any[]
  goodsTotal: number
  menuList: any[]
  menuTotal: number
  departmentList: any[]
  departmentTotal: number
  categoryList: any[]
  categoryTotal: number
}

enum EMutations {
  mutateUsersList = 'mutateUsersList',
  mutateUsersTotal = 'mutateUserTotal',
  mutateRoleList = 'mutateRoleList',
  mutateRoleTotal = 'mutateRoleTotal',
  mutateGoodsList = 'mutateGoodsList',
  mutateGoodsTotal = 'mutateGoodsTotal',
  mutateMenuList = 'mutateMenuList',
  mutateMenuTotal = 'mutateMenuTotal',
  mutateDepartmentList = 'mutateDepartmentList',
  mutateDepartmentTotal = 'mutateDepartmentTotal',
  mutateCategoryList = 'mutateCategoryList',
  mutateCategoryTotal = 'mutateCategoryTotal'
}

enum EActions {
  actionDataList = 'actionDataList',
  actDeleteRow = 'actDeleteRow',
  actNewRow = 'actNewRow',
  actEditRow = 'actEditRow'
}

export { ISytemState, EMutations, EActions }
