<script lang="ts" setup>
import { ref } from 'vue'
import formConfig from './config/user.formConfig'
import tableConfig from './config/user.tableConfig'
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'

const tableContentRef = ref()
const searchContent = (model: any) => {
  tableContentRef.value.searchContent(model)
}
</script>

<template>
  <div class="system-user">
    <search-form :config="formConfig" @search-content="searchContent" />
    <table-content :config="tableConfig" name="users" ref="tableContentRef"> </table-content>
  </div>
</template>

<style lang="less" scoped></style>
