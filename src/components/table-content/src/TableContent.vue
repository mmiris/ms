<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { IStore, EModules } from '@/store/type'
import { EActions } from '@/store/main/system/types'
import { ITableConfig } from '@/views/main/system'
import UTable from '@/common-ui/u-table'
import dateFormat from '@/utils/date-format'

const props = defineProps<{
  config: ITableConfig
  name: string
}>()

const store = useStore<IStore>()

store.dispatch(EModules.system + '/' + EActions.actionDataList, {
  url: `${props.name}`,
  queryInfo: { offset: 0, size: 20 }
})

const data = computed(() => {
  return (useStore<IStore>().state.system as any)[`${props.name}List`]
})
</script>

<template>
  <div class="table-content">
    <u-table :data="data" :config="config">
      <template #status="scope">
        <template v-if="scope.row.enable">
          <el-icon><i-ep-CircleCheck style="color: greenyellow" /></el-icon>
        </template>
        <template v-else>
          <el-icon><i-ep-CircleClose style="color: red" /></el-icon>
        </template>
      </template>
      <template #createAt="scope">
        <span>{{ dateFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ dateFormat(scope.row.updateAt) }}</span>
      </template>
    </u-table>
  </div>
</template>

<style lang="less" scoped>
.table-content {
  padding: 18px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 3px 0.1px var(--el-border-color);
}
</style>
