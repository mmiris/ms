<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { IStore, EModules } from '@/store/type'
import { EActions } from '@/store/main/system/types'
import { formConfig, tableConfig } from './config/user.config'
import SearchForm from '@/components/search-form'
import UTable from '@/common-ui/u-table'

const store = useStore<IStore>()
store.dispatch(EModules.system + '/' + EActions.actionGetUsersList, { offset: 0, size: 15 })

const tableData = computed(() => {
  return useStore<IStore>().state.system.usersList
})
</script>

<template>
  <div class="">
    <search-form :config="formConfig" />
    <u-table :data="tableData" :config="tableConfig">
      <template #status="scope">
        <template v-if="scope.row.enable">
          <el-icon>
            <i-ep-CircleCheck style="color: greenyellow" />
          </el-icon>
        </template>
        <template v-else>
          <el-icon>
            <i-ep-CircleClose style="color: red" />
          </el-icon>
        </template>
      </template>
    </u-table>
  </div>
</template>

<style lang="less" scoped></style>
