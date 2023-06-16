<script lang="ts" setup>
import { IBreadcrumb } from '../'

defineProps<{
  breadcrumbs: IBreadcrumb[]
}>()
</script>

<template>
  <div class="u-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <el-breadcrumb-item>
          {{ breadcrumb.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.u-breadcrumb {
  display: flex;
  align-items: center;
  margin: 0 20px;
}
</style>
