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
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    show: true
  },
  xAxis: [
    {
      type: 'category',
      data: props.data.xAxis,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: props.title,
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 件'
        }
      },
      data: props.data.data
    }
  ]
}))
</script>

<template>
  <div class="bar-visual">
    <DataCard :title="props.title" :option="option" />
  </div>
</template>

<style lang="less" scoped></style>
