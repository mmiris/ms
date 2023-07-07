<template>
  <router-view />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { IStore } from './store/type'
import { EActions } from './store/main/system/types'

const store = useStore<IStore>()

store.dispatch(EActions.actionDataList, { url: 'department' })
store.dispatch(EActions.actionDataList, { url: 'role' })
store.dispatch(EActions.actionDataList, { url: 'menu' })

watch(store.state.login, () => {
  sessionStorage.setItem('state', JSON.stringify(store.state))
})
</script>

<style lang="less">
@import url('normalize.css');
@import url('./assets/css/index.less');
</style>
