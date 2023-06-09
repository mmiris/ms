import { FormRules } from 'element-plus'

const rules: FormRules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[\w]{1,16}$/,
      message: '由6~16位字母、数字或下划线组成',
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
      message: '由6~16个字母、数字或下划线组成',
      trigger: 'blur'
    }
  ]
}

export default rules
