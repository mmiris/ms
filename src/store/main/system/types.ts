interface ISytemState {
  usersList: any[]
  usersTotal: number
  roleList: any[]
  roleTotal: number
}

enum EMutations {
  mutateUsersList = 'mutateUsersList',
  mutateUsersTotal = 'mutateUserTotal',
  mutateRoleList = 'mutateRoleList',
  mutateRoleTotal = 'mutateRoleTotal'
}

enum EActions {
  actionDataList = 'actionDataList'
}

export { ISytemState, EMutations, EActions }
