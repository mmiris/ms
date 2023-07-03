import { ITableConfig } from '../../system'

const tableConfig: ITableConfig = {
  header: {
    title: '商品列表',
    btnCotent: '新建商品'
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
      label: '商品名称',
      width: 160,
      align: 'center'
    },
    {
      prop: 'imgUrl',
      label: '图像',
      slotName: 'imgUrl',
      width: 140,
      align: 'center'
    },
    {
      prop: 'status',
      label: '状态',
      slotName: 'status',
      width: 80,
      align: 'center'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      width: 100,
      align: 'center'
    },
    {
      prop: 'newPrice',
      label: '现价',
      width: 100,
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '创建时间 ',
      slotName: 'createAt',
      width: 180,
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新时间 ',
      slotName: 'updateAt',
      width: 180,
      align: 'center'
    }
  ]
}

export default tableConfig
