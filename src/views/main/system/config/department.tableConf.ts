import { ITableConfig } from '../types'

const tableConf: ITableConfig = {
  header: {
    title: '部门列表',
    btnCotent: '新建部门'
  },
  columns: [
    {
      prop: 'id',
      label: 'id',
      width: 100,
      align: 'center'
    },
    {
      prop: 'name',
      label: '部门',
      width: 200,
      align: 'center'
    },
    {
      prop: 'leader',
      label: '领导',
      width: 200,
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '创建日期',
      slotName: 'createAt',
      width: 270,
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新日期',
      slotName: 'updateAt',
      width: 270,
      align: 'center'
    }
  ]
}

export default tableConf
