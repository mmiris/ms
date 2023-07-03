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
      field: 'name',
      type: 'input',
      label: '菜单名称',
      placeholder: '请输入菜单名称'
    }
  ]
}

export default formConfig
