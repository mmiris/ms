import { IFormConfig } from '@/common-ui/u-form'

const formConfig: IFormConfig = {
  layout: {
    labelWidth: '80px',
    gutter: 50
  },
  items: [
    {
      field: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'region',
      type: 'select',
      label: '地区',
      placeholder: '请选择地区',
      options: [
        { label: '上海', value: 'shanghai' },
        { label: '北京', value: 'beijing' }
      ]
    },
    {
      field: 'date',
      type: 'date',
      label: '日期',
      placeholder: { startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
      options: 'daterange'
    }
  ]
}

export default formConfig
