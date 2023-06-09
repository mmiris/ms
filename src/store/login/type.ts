interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

interface IAccount {
  name: string
  password: string
  retain: boolean
}

enum EMutations {
  mutateToken = 'mutateToken',
  mutateUserInfo = 'mutateUserInfo',
  mutateUserMenus = 'mutateUserMenus'
}

enum EActions {
  actionLogin = 'actionLogin',
  actionUserInfo = 'actionUserInfo',
  actionUserMenus = 'actionUserMenus'
}

export { ILoginState, IAccount, EMutations, EActions }
