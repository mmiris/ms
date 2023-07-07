import { IFormConfig } from '@/common-ui/u-form'

const formConf: IFormConfig = {
  layout: {
    labelWidth: '80px',
    gutter: 50
  },
  items: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '部门',
      placeholder: '请输入部门'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导',
      placeholder: '请输入领导'
    },
    {
      field: 'createAt',
      type: 'date',
      label: '创建日期',
      options: 'datetimerange',
      placeholder: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    }
  ]
}

export default formConf
