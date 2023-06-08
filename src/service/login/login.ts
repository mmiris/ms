import service from '..'
import LoginAPI from './types'
import { IAccount } from '@/store/login/type'

const loginRequest = (account: IAccount) => {
  return service.post({
    url: LoginAPI.ACCOUNTLOGIN,
    data: account
  })
}

export { loginRequest }
