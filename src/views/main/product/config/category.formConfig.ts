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
      label: '类别',
      placeholder: '请输入类别'
    }
  ]
}

export default formConf
