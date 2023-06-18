<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useStore } from 'vuex'
import { IStore } from './store/type'

const store = useStore<IStore>()

watchEffect(
  () => {
    store.state.login.token && sessionStorage.setItem('state', JSON.stringify(store.state))
  },
  {
    flush: 'post'
  }
)
</script>

<style lang="less">
@import url('normalize.css');
@import url('./assets/css/index.less');
</style>
