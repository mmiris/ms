<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { EModules, IStore } from '@/store/type'
import { EActions } from '@/store/main/analysis/types'
import PieVisual from './cpns/PieVisual.vue'

const store = useStore<IStore>()
store.dispatch(`${EModules.analysis}/${EActions.actVisualData}`)

const pieData = computed(() =>
  store.state.analysis.categoryCount.map((item) => ({ value: item.goodsCount, name: item.name }))
)
</script>

<template>
  <div class="analysis-dashboard">
    <ElRow :gutter="10">
      <ElCol :span="8"><PieVisual title="1哈哈" :data="pieData" /></ElCol>
      <ElCol :span="8"><PieVisual title="2哈哈" :data="pieData" /></ElCol>
      <ElCol :span="8"><PieVisual title="3哈哈" :data="pieData" /></ElCol>
    </ElRow>
  </div>
</template>

<style lang="less" scoped></style>
