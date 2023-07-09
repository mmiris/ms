<script lang="ts" setup>
import { computed } from 'vue'
import { EChartsOption } from 'echarts'
import DataCard from '@/components/data-card'

const props = defineProps<{
  title: string
  data: { xAxis: string[]; data: number[] }
}>()

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: true
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.data.xAxis
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '商品销量',
      type: 'line',
      data: props.data.data
    }
  ]
}))
</script>

<template>
  <div class="line-visual">
    <DataCard :title="title" :option="option" />
  </div>
</template>

<style lang="less" scoped></style>
