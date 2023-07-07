<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { IStore } from '@/store/type'

import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import DialogForm from '@/components/dialog-form'

import formConf from './config/department.formConf'
import tableConf from './config/department.tableConf'
import dialogConf from './config/depatment.dialogConf'

import useSearchForm from '@/hooks/use-search-form'
import useDialogForm from '@/hooks/use-dialog-form'

const { searchContent, tableContentRef } = useSearchForm()
const { title, dialogFormRef, dialogModel, handleNew, handleEdit } = useDialogForm(dialogConf, tableConf)

const store = useStore<IStore>()
const parentDepartments = dialogConf.items.find((item) => item.field === 'parentId')

const dialogConfComputed = computed(() => {
  parentDepartments!.options = store.state.departmentList.map((item) => ({ label: item.name, value: item.id }))
  return dialogConf
})
</script>

<template>
  <div class="">
    <search-form :config="formConf" @search-content="searchContent" />
    <table-content
      :config="tableConf"
      name="department"
      @handle-new="handleNew"
      @handle-edit="handleEdit"
      ref="tableContentRef"
    />
    <dialog-form
      :config="dialogConfComputed"
      :model="dialogModel"
      :title="title"
      name="department"
      ref="dialogFormRef"
    />
  </div>
</template>

<style lang="less" scoped></style>
