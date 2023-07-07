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
      label: '部门',
      placeholder: '请输入部门'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '父级部门',
      placeholder: '请输入父级部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导',
      placeholder: '请输入领导'
    }
  ]
}

export default dialogConf
