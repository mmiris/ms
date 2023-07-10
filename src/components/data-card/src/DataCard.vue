<script lang="ts" setup>
import { EChartsOption } from 'echarts'
import UEcharts from '@/common-ui/u-echarts'

defineProps<{
  title: string
  option?: EChartsOption
}>()
</script>

<template>
  <div class="data-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot>
        <div v-if="option">
          <UEcharts :option="option" />
        </div>
      </slot>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.data-card {
  margin-bottom: 18px;
}
</style>
