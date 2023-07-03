import { ITableConfig } from '..'

const tableConfig: ITableConfig = {
  header: {
    title: '用户列表',
    btnCotent: '新建用户'
  },
  layout: {
    select: {
      isShow: true,
      fixed: 'left',
      align: 'center'
    }
  },
  columns: [
    {
      prop: 'name',
      label: '姓名',
      fixed: 'left',
      width: 100,
      align: 'center'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      align: 'center',
      width: 120
    },
    {
      prop: 'cellphone',
      label: '电话',
      align: 'center',
      width: 120
    },
    {
      prop: 'enable',
      label: '状态',
      slotName: 'status',
      align: 'center',
      width: 80
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      align: 'center'
    }
  ]
}
export default tableConfig
