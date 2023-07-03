<script lang="ts" setup>
import { ref } from 'vue'
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import formConfig from '@/views/main/system/config/menu.formConfig'
import tableConfig from '@/views/main/system/config/menu.tableConfig'

const tableContentRef = ref()
const searchContent = (model: any) => {
  tableContentRef.value.searchContent(model)
}
</script>

<template>
  <div class="system-meun">
    <SearchForm :config="formConfig" @search-content="searchContent" />
    <TableContent :config="tableConfig" name="menu" ref="tableContentRef" />
  </div>
</template>

<style lang="less" scoped></style>
