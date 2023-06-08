import { FormRules } from 'element-plus'

const rules: FormRules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[\w]{6,16}$/,
      message: '用户由6~16个字母、数字或者下划线组成',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[\w]{6,16}$/,
      message: '密码由6~16个字母、数字或者下划线组成',
      trigger: 'blur'
    }
  ]
}

export default rules
