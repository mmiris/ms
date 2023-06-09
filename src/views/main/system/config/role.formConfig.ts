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
    }
  ]
}

export default formConfig
