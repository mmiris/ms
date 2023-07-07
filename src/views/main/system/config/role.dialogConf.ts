import { IFormConfig } from '@/common-ui/u-form'

const dialogConf: IFormConfig = {
  layout: {
    labelWidth: '80px',
    span: 24
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
      label: '角色',
      placeholder: '请输入角色'
    },
    {
      field: 'intro',
      type: 'input',
      label: '介绍',
      placeholder: '请输入介绍'
    }
  ]
}

export default dialogConf
