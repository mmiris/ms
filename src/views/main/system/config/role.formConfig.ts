import { IFormConfig } from '@/common-ui/u-form'

const formConfig: IFormConfig = {
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
      field: 'role',
      type: 'input',
      label: '角色',
      placeholder: '请输入角色'
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
