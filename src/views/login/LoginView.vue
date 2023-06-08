<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script lang="ts" setup>
import LoginForm from './cpns/LoginForm.vue'
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/imgs/login-bg.svg);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
