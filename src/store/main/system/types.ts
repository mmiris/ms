interface ISytemState {
  usersList: any[]
  usersTotal: number
}

enum EMutations {
  mutateUsersList = 'mutateUsersList',
  mutateUsersTotal = 'mutateUserTotal'
}

enum EActions {
  actionGetUsersList = 'actionGetUsersList'
}

export { ISytemState, EMutations, EActions }
