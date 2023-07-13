<template>
  <router-view />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { IStore } from './store/type'

const store = useStore<IStore>()

watch(store.state.login, () => {
  sessionStorage.setItem('state', JSON.stringify(store.state))
})
</script>

<style lang="less">
@import url('normalize.css');
@import url('./assets/css/index.less');
</style>
