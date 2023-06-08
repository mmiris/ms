interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

interface IAccount {
  name: string
  password: string
}

enum Actions {
  LOGIN = 'LOGIN'
}

export { ILoginState, IAccount, Actions }
