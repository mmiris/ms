<template>
  <div class="login-form">
    <h2>登录</h2>
    <el-form :model="account" :rules="rules" ref="formRef" class="form">
      <el-form-item label="用户名:" prop="name">
        <el-input type="text" v-model="account.name" />
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;&nbsp;码:" prop="password">
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
import { FormInstance } from 'element-plus'
import rules from '../config/account-rules'
import { EModules } from '@/store/type'
import { EActions } from '@/store/login/type'
import localCache from '@/utils/localCache'

const store = useStore()
const formRef = ref<FormInstance>()

const account = reactive({
  name: localCache.getItem('name') ?? '',
  password: localCache.getItem('password') ?? ''
})
const retain = ref(true)

const loginAction = (formRef: FormInstance | undefined) => {
  if (!formRef) {
    return
  }
  formRef.validate((valid) => {
    if (valid) {
      store
        .dispatch(EModules.login + '/' + EActions.actionLogin, { ...account })
        .then((res) => {
          if (res && retain.value) {
            localCache.setItem('name', account.name)
            localCache.setItem('password', account.password)
          }
        })
        .catch((err) => {
          localCache.removeItem('name')
          localCache.removeItem('password')
          console.log(err)
        })

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
  padding: 3%;
  margin-bottom: 5%;
  background-color: rgb(243, 246, 249);
  border-radius: 2%;
}

h2 {
  margin-top: 0;
  color: rgb(189, 216, 241);
}

.login-action {
  display: flex;
  justify-content: center;
}
</style>
