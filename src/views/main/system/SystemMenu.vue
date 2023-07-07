<script lang="ts" setup>
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import formConfig from '@/views/main/system/config/menu.formConfig'
import tableConfig from '@/views/main/system/config/menu.tableConfig'
import useSearchForm from '@/hooks/use-search-form'

const { tableContentRef, searchContent } = useSearchForm()
</script>

<template>
  <div class="system-meun">
    <SearchForm :config="formConfig" @search-content="searchContent" />
    <TableContent :config="tableConfig" name="menu" ref="tableContentRef" />
  </div>
</template>

<style lang="less" scoped></style>
