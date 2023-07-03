<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import { ITableConfig } from '@/views/main/system'

const emit = defineEmits<{
  (e: 'update:pageInfo', value: any): void
}>()

const props = defineProps<{
  config: ITableConfig
  data: any
  total?: number
  pageInfo: { currentPage: number; pageSize: number }
}>()

const { header, layout, columns, tree } = toRefs(ref(props.config).value)

const handleSizeChange = (pageSize: number) => {
  emit('update:pageInfo', { ...props.pageInfo, pageSize })
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:pageInfo', { ...props.pageInfo, currentPage })
}
</script>

<template>
  <div class="u-table">
    <div class="header">
      <span>{{ header.title }}</span>
      <slot name="hander-operation" :content="header.btnCotent"></slot>
    </div>
    <el-table :data="data" style="width: 100%" :row-key="tree?.rowKey" :tree-props="{ children: tree?.children }">
      <el-table-column
        v-if="layout?.index?.isShow"
        type="index"
        :fixed="layout?.index?.fixed"
        :align="layout?.index?.align"
      ></el-table-column>
      <el-table-column
        v-if="layout?.select?.isShow"
        type="selection"
        :fixed="layout?.select?.fixed"
        :align="layout?.select?.align"
      ></el-table-column>
      <template v-for="column in columns" :key="column.prop">
        <el-table-column
          :prop="column.prop"
          :label="column.label"
          :fixed="column.fixed"
          :align="column.align"
          :width="column.width"
          show-overflow-tooltip
        >
          <template v-if="column.slotName" #default="scope">
            <slot :name="column.slotName" :row="scope.row">
              <span>{{ scope.row[column.prop] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作" width="130px" fixed="right" align="center">
        <slot name="operations">
          <span> -- </span>
        </slot>
      </el-table-column>
    </el-table>
    <div v-if="!tree" class="footer">
      <el-pagination
        :current-page="pageInfo.currentPage"
        :page-size="pageInfo.pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.u-table {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  }
}
</style>
