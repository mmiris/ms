<template>
  <div class="login-form">
    <h2>登录</h2>
    <el-form label-width="25%" :model="account" :rules="rules" ref="formRef" class="form">
      <el-form-item label="用户名：" prop="name">
        <el-input type="text" v-model="account.name" />
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;码：" prop="password">
        <el-input type="text" v-model="account.password" show-password />
      </el-form-item>
      <div class="retain">
        <el-checkbox label="记住我" v-model="retain" class="remind-me" />
      </div>
      <div class="login-action">
        <el-button type="primary" @click="loginAction(formRef)">立即登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { Actions } from '@/store/login/type'

import { FormInstance } from 'element-plus'
import rules from '../config/account-rules'

const store = useStore()
const formRef = ref<FormInstance>()
const account = reactive({
  name: '',
  password: ''
})
const retain = ref(true)

const loginAction = (formRef: FormInstance | undefined) => {
  if (!formRef) {
    return
  }
  formRef.validate((valid) => {
    if (valid) {
      store.dispatch(`login/${Actions.LOGIN}`, { ...account })
      return true
    }
    console.log('呜呜呜')
    return false
  })
}
</script>

<style lang="less" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 2% 0;
  margin-bottom: 10%;
  background-color: rgb(243, 246, 249);
  border-radius: 2%;
}

h2 {
  margin-top: 0;
  color: rgb(189, 216, 241);
}
.form {
  width: 80%;
}
.login-action {
  display: flex;
  justify-content: center;
}
</style>
