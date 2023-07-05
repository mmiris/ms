interface ISytemState {
  usersList: any[]
  usersTotal: number
  roleList: any[]
  roleTotal: number
  goodsList: any[]
  goodsTotal: number
  menuList: any[]
  menuTotal: number
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
  mutateDepartmentList = 'MutateDepartmentList'
}

enum EActions {
  actionDataList = 'actionDataList',
  actDeleteRow = 'actDeleteRow',
  actNewRow = 'actNewRow',
  actEditRow = 'actEditRow'
}

export { ISytemState, EMutations, EActions }
