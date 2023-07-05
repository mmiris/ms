<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { IStore } from '@/store/type'

import formConfig from './config/user.formConfig'
import tableConfig from './config/user.tableConfig'
import dialogConf from '@/views/main/system/config/user.dialogConf'

import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import DialogForm from '@/components/dialog-form/src/DialogForm.vue'

import useSearchForm from '@/hooks/use-search-form'
import useDialogForm from '@/hooks/use-dialog-form'

const { tableContentRef, searchContent } = useSearchForm()
const { title, dialogModel, dialogFormRef, handleNew, handleEdit } = useDialogForm(dialogConf, tableConfig)

const store = useStore<IStore>()
const deparmentItem = dialogConf.items.find((item) => item.field === 'departmentId')
const roleItem = dialogConf.items.find((item) => item.field === 'roleId')

const dialogConfComputed = computed(() => {
  roleItem!.options = store.state.roleList.map((item) => ({ label: item.name, value: item.id }))
  deparmentItem!.options = store.state.departmentList.map((item) => ({ label: item.name, value: item.id }))
  return dialogConf
})
</script>

<template>
  <div class="system-user">
    <search-form :config="formConfig" @search-content="searchContent" />
    <table-content
      :config="tableConfig"
      name="users"
      ref="tableContentRef"
      @handle-new="handleNew"
      @handle-edit="handleEdit"
    />
    <dialog-form name="users" :config="dialogConfComputed" :model="dialogModel" :title="title" ref="dialogFormRef" />
  </div>
</template>

<style lang="less" scoped></style>
