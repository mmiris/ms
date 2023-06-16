import service from '..'
import { ESystemApi } from './types'

const requestUserList = (queryInfo: any) => {
  return service.post({
    url: ESystemApi.userList,
    data: queryInfo
  })
}

export { requestUserList }
