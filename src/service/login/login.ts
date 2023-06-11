import service from '..'
import LoginAPI from './types'
import { IAccount } from '@/store/login/type'

const requestLogin = (account: IAccount) => {
  return service.post({
    url: LoginAPI.login,
    data: account
  })
}

const requestUserInfo = (id: number) => {
  return service.get(
    {
      url: LoginAPI.userInfo + id
    },
    undefined,
    false
  )
}

const requestUserMenus = (id: number) => {
  return service.get(
    {
      url: LoginAPI.userMenus + id + '/menu'
    },
    undefined,
    false
  )
}

export { requestLogin, requestUserInfo, requestUserMenus }
