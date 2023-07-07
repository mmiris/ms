<script lang="ts" setup>
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import DialogForm from '@/components/dialog-form'

import formConf from './config/category.formConfig'
import tableConf from './config/category.tableConfig'
import dialogConf from './config/category.dialogConf'

import useSearchForm from '@/hooks/use-search-form'
import useDialogForm from '@/hooks/use-dialog-form'

const { searchContent, tableContentRef } = useSearchForm()
const { title, dialogFormRef, dialogModel, handleNew, handleEdit } = useDialogForm(dialogConf, tableConf)
</script>

<template>
  <div class="">
    <SearchForm :config="formConf" @search-content="searchContent" />
    <TableContent
      :config="tableConf"
      name="category"
      ref="tableContentRef"
      @handle-new="handleNew"
      @handle-edit="handleEdit"
    />
    <DialogForm :config="dialogConf" name="category" :model="dialogModel" ref="dialogFormRef" :title="title" />
  </div>
</template>

<style lang="less" scoped></style>
