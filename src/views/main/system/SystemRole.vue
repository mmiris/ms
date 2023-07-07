<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { IStore } from '@/store/type'

import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
import DialogForm from '@/components/dialog-form'

import formConfig from './config/role.formConfig'
import tableConfig from './config/role.tableConfig'
import dialogConf from './config/role.dialogConf'

import useSearchForm from '@/hooks/use-search-form'
import useDialogForm from '@/hooks/use-dialog-form'
import mapMenus2CheckedKeys from '@/utils/map-menus-checkedKeys'

const elTreeRef = ref()
const getRow = (row: any) => {
  nextTick(() => elTreeRef.value?.setCheckedKeys(mapMenus2CheckedKeys(row.menuList), false))
}

const checkedKeys = ref<any[]>([])
const handleCheck = (_: any, value: any) => {
  checkedKeys.value = [...value.checkedKeys, ...value.halfCheckedKeys]
}

const { tableContentRef, searchContent } = useSearchForm()
const { title, dialogModel, dialogFormRef, handleNew, handleEdit } = useDialogForm(dialogConf, tableConfig, getRow)

const store = useStore<IStore>()
</script>

<template>
  <div class="system-user">
    <search-form :config="formConfig" @search-content="searchContent" />
    <table-content
      :config="tableConfig"
      name="role"
      ref="tableContentRef"
      @handle-new="handleNew"
      @handle-edit="handleEdit"
    />
    <dialog-form
      :config="dialogConf"
      :model="dialogModel"
      :title="title"
      name="role"
      :other-model="checkedKeys"
      ref="dialogFormRef"
    >
      <div class="role-tree">
        <el-tree
          :data="store.state.menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheck"
          ref="elTreeRef"
        />
      </div>
    </dialog-form>
  </div>
</template>

<style lang="less" scoped>
.role-tree {
  margin: 18px 0 0 40px;
}
</style>
