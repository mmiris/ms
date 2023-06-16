<script lang="ts" setup>
import { ITableConfig } from '@/views/main/system'

defineProps<{
  data: any
  config: ITableConfig[]
}>()
</script>

<template>
  <div class="u-table">
    <el-table :data="data" style="width: 100%">
      <template v-for="item in config" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :width="item.width"
          :mini-width="item.miniWidth"
          :align="item.align"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              <span>{{ scope.row[item.prop] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<style lang="less" scoped>
.u-table {
  margin-top: 20px;
  box-shadow: 0 0 3px 0.1px var(--el-border-color);
}
</style>
