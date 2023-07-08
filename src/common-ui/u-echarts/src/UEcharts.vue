<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import { useEcharts } from './hooks/use-echarts'

const props = defineProps<{
  option: EChartsOption
}>()

const elRef = ref<HTMLElement>()

onMounted(() => {
  const { setOption } = useEcharts(elRef.value!)
  watchEffect(() => {
    setOption(props.option)
  })
})
</script>

<template>
  <div class="u-echarts" ref="elRef" :style="{ width: '100%', height: '300px' }"></div>
</template>

<style lang="less" scoped></style>
