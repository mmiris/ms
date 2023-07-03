import { ITableConfig } from '../types'

const tableConfig: ITableConfig = {
  header: {
    title: '菜单列表',
    btnCotent: '新建菜单'
  },
  columns: [
    {
      prop: 'id',
      label: 'id',
      width: 120,
      align: 'center'
    },
    {
      prop: 'name',
      label: '菜单名称',
      width: 160,
      align: 'center'
    },
    {
      prop: 'url',
      label: 'url',
      width: 180,
      align: 'center'
    },
    {
      prop: 'type',
      label: '类型',
      width: 130,
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
      width: 200,
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      width: 200,
      align: 'center'
    }
  ],
  tree: {
    rowKey: 'id',
    children: 'children'
  }
}

export default tableConfig
