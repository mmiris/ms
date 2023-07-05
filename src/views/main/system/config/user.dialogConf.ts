import { IFormConfig } from '@/common-ui/u-form'

const dialogConf: IFormConfig = {
  layout: {
    labelWidth: '80px',
    span: 24
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
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      ishidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话',
      placeholder: '请输入电话'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ]
}

export default dialogConf
