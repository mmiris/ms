import service from '..'
import { ESystemApi } from './types'

const requestList = (url: 'users' | 'role' | 'goods', queryInfo: any) => {
  return service.post({
    url: ESystemApi[`${url}List`],
    data: queryInfo
  })
}

export { requestList }
