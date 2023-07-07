import { ITableConfig } from '../../system'

const tableConf: ITableConfig = {
  header: {
    title: '分类列表',
    btnCotent: '新建分类'
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
      label: '类别',
      width: 180,
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '创建时间 ',
      slotName: 'createAt',
      width: 360,
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新时间 ',
      slotName: 'updateAt',
      width: 360,
      align: 'center'
    }
  ]
}

export default tableConf
