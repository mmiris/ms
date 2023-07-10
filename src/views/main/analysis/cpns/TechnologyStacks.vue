<script lang="ts" setup>
defineProps<{
  technologyStacksConf: { title: string; desp: string }[]
}>()
</script>

<template>
  <div class="technology-stacks">
    <el-table :data="technologyStacksConf" style="width: 100%; height: 320px" :show-header="false">
      <el-table-column prop="title" width="180" />
      <el-table-column prop="desp" mini-width="180">
        <template #default="scope">
          <el-text type="success">{{ scope.row.desp }}</el-text>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less" scoped>
.technology-stacks {
  margin-top: -10px;
}
</style>
