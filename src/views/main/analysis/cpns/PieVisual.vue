<script lang="ts" setup>
import { computed } from 'vue'
import { EChartsOption } from 'echarts'
import DataCard from '@/components/data-card'

const props = defineProps<{
  title: string
  data: { value: number; name: string }[]
}>()

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: 'bottom',
    left: 'left',
    orient: 'horizontal'
  },
  series: [
    {
      type: 'pie',
      radius: ['20%', '70%'],
      center: ['50%', '40%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: props.data
    }
  ]
}))
</script>

<template>
  <div class="pie-visual">
    <DataCard :title="title" :option="option" />
  </div>
</template>

<style lang="less" scoped></style>
