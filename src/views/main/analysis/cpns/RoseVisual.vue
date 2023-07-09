<script lang="ts" setup>
import { computed } from 'vue'
import { EChartsOption } from 'echarts'
import DataCard from '@/components/data-card'

const props = defineProps<{
  data: { value: number; name: string }[]
  title: string
}>()

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    top: 'bottom'
  },
  series: [
    {
      name: props.title,
      type: 'pie',
      radius: [20, 140],
      center: ['50%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      data: props.data
    }
  ]
}))
</script>

<template>
  <div class="rose-visual">
    <DataCard :option="option" :title="title" />
  </div>
</template>

<style lang="less" scoped></style>
