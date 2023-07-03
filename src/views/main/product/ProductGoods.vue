<script lang="ts" setup>
import { ref } from 'vue'
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import formConfig from '@/views/main/product/config/goods.formConfig'
import tableConfig from '@/views/main/product/config/goods.tableConfig'

const tableContentRef = ref()
const searchContent = (model: any) => {
  tableContentRef.value.searchContent(model)
}
</script>

<template>
  <div class="product-goods">
    <search-form :config="formConfig" @search-content="searchContent" />
    <table-content :config="tableConfig" name="goods" ref="tableContentRef">
      <template #imgUrl="scope">
        <span style="position: relative">
          <el-image style="width: 100px; height: 60px" :src="scope.row.imgUrl" fit="cover" />
        </span>
      </template>
    </table-content>
  </div>
</template>

<style lang="less" scoped></style>
