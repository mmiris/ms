<script lang="ts" setup>
// import { ref } from 'vue'
import formConfig from './config/role.formConfig'
import tableConfig from './config/role.tableConfig'
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import useSearchForm from '@/hooks/use-search-form'

const { tableContentRef, searchContent } = useSearchForm()
</script>

<template>
  <div class="system-user">
    <search-form :config="formConfig" @search-content="searchContent" />
    <table-content :config="tableConfig" name="role" ref="tableContentRef"></table-content>
  </div>
</template>

<style lang="less" scoped></style>
