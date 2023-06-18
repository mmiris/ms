<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import { ITableConfig } from '@/views/main/system'

const props = defineProps<{
  data: any
  config: ITableConfig
}>()

const { header, layout, columns } = toRefs(ref(props.config).value)
</script>

<template>
  <div class="u-table">
    <div class="header">
      <span>{{ header.title }}</span>
      <div class="header-operation">
        <el-button type="primary" size="small" plain>
          <el-icon><i-ep-Plus /></el-icon><span>{{ header.btnCotent }}</span>
        </el-button>
      </div>
    </div>
    <el-table :data="data" style="width: 100%">
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
      <template v-for="colum in columns" :key="colum.prop">
        <el-table-column
          :prop="colum.prop"
          :label="colum.label"
          :fixed="colum.fixed"
          :align="colum.align"
          :width="colum.width"
        >
          <template #default="scope">
            <slot :name="colum.slotName" :row="scope.row">
              <span>{{ scope.row[colum.prop] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作" width="130px" fixed="right" align="center">
        <el-button type="primary" size="small" link>
          <el-icon><i-ep-Edit /></el-icon>
          <span>编辑</span>
        </el-button>
        <el-button type="danger" size="small" link>
          <el-icon><i-ep-Delete /></el-icon>
          <span>删除</span>
        </el-button>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="400" />
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
