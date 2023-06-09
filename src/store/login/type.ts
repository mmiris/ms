interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
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
  actionLogin = 'actionLogin'
}

export { ILoginState, IAccount, EMutations, EActions }
