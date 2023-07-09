<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { EModules, IStore } from '@/store/type'
import { EActions } from '@/store/main/analysis/types'
import PieVisual from './cpns/PieVisual.vue'
import RoseVisual from './cpns/RoseVisual.vue'
import LineVisual from './cpns/LineVisual.vue'
import BarVisual from './cpns/BarVisual.vue'
import MapVisual from './cpns/MapVisual.vue'

const store = useStore<IStore>()
store.dispatch(`${EModules.analysis}/${EActions.actVisualData}`)

const pieData = computed(() =>
  store.state.analysis.categoryCount.map((item) => ({ value: item.goodsCount, name: item.name }))
)

const lineData = computed(() => {
  const xAxis: string[] = []
  const data: number[] = []

  store.state.analysis.categorySale.forEach((item) => {
    xAxis.push(item.name)
    data.push(item.goodsCount)
  })

  return { xAxis, data }
})

const barData = computed(() => {
  const xAxis: string[] = []
  const data: number[] = []

  store.state.analysis.categoryFavor.forEach((item) => {
    xAxis.push(item.name)
    data.push(item.goodsFavor)
  })

  return { xAxis, data }
})

const mapData = computed(() => {
  const data: { name: string; value: number }[] = []
  store.state.analysis.addressSale.forEach((item) => {
    data.push({ name: item.address, value: item.count })
  })

  return data
})
</script>

<template>
  <div class="analysis-dashboard">
    <ElRow :gutter="10">
      <ElCol :span="7"><PieVisual title="分类商品数量" :data="pieData" /></ElCol>
      <ElCol :span="10"><MapVisual title="不同城市商品销量" :data="mapData" /></ElCol>
      <ElCol :span="7"><RoseVisual title="分类商品数量1" :data="pieData" /></ElCol>
    </ElRow>
    <div class="divider"></div>
    <ElRow :gutter="10">
      <ElCol :span="12"><LineVisual title="分类商品销量" :data="lineData" /></ElCol>
      <ElCol :span="12"><BarVisual title="分类商品收藏量" :data="barData" /></ElCol>
    </ElRow>
  </div>
</template>

<style lang="less" scoped>
.divider {
  margin-top: 20px;
}
</style>
