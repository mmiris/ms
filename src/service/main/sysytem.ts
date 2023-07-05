import service from '..'
import { ESystemApi } from './types'

const requestList = (url: 'users' | 'role' | 'goods' | 'department', queryInfo: any) => {
  return service.post({
    url: ESystemApi[`${url}List`],
    data: queryInfo
  })
}

const deleteRowService = (url: string, id: number) => {
  return service.delete({
    url: `${url}/${id}`
  })
}

const newRowService = (url: string, row: any) => {
  return service.post({
    url: url,
    data: { ...row }
  })
}

const editRowService = (url: string, id: number, row: any) => {
  return service.patch({
    url: `${url}/${id}`,
    data: { ...row }
  })
}

export { requestList, deleteRowService, newRowService, editRowService }
