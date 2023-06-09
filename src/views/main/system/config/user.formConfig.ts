import { IFormConfig } from '@/common-ui/u-form'

const formConfig: IFormConfig = {
  layout: {
    labelWidth: '80px',
    gutter: 50
  },
  items: [
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话',
      placeholder: '请输入电话'
    },
    {
      field: 'createAt',
      type: 'date',
      label: '创建时间',
      options: 'datetimerange',
      placeholder: {
        startPlaceholder: '起始日期',
        endPlaceholder: '结束日期'
      }
    }
  ]
}

export default formConfig
