import { ITableConfig } from '..'

const tableConfig: ITableConfig = {
  header: {
    title: '角色列表',
    btnCotent: '新建角色'
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
      prop: 'id',
      label: 'id',
      slotName: 'id',
      fixed: 'left',
      width: 120,
      align: 'center'
    },
    {
      prop: 'name',
      label: '角色',
      slotName: 'name',
      align: 'center',
      width: 120
    },
    {
      prop: 'intro',
      label: '介绍',
      slotName: 'intro',
      align: 'center',
      width: 100
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
