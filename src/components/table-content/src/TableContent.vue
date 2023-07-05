<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { IStore, EModules } from '@/store/type'
import { EActions } from '@/store/main/system/types'
import { ITableConfig } from '@/views/main/system'
import UTable from '@/common-ui/u-table'
import dateFormat from '@/utils/date-format'
import verifyPermission from '@/hooks/use-permission-verification'

const emit = defineEmits<{
  (e: 'handleNew'): void
  (e: 'handleEdit', row: any): void
}>()

const props = defineProps<{
  config: ITableConfig
  name: 'users' | 'role' | 'goods' | 'menu'
}>()

const isCreate = verifyPermission(props.name, 'create')
const isUpdate = verifyPermission(props.name, 'update')
const isDelete = verifyPermission(props.name, 'delete')
const isQuery = verifyPermission(props.name, 'query')

const store = useStore<IStore>()
const pageInfo = ref({ currentPage: 1, pageSize: 10 })

const searchContent = (model?: any) => {
  if (!isQuery) return
  store.dispatch(EModules.system + '/' + EActions.actionDataList, {
    url: `${props.name}`,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...model
    }
  })
}
searchContent()

watch(pageInfo, () => {
  searchContent()
})

const data = computed(() => store.state.system[`${props.name}List`])
const total = computed(() => store.state.system[`${props.name}Total`])

const excludeSlots = ['createAt', 'updateAt', 'status']
const slots = props.config.columns.filter((item) => {
  if (item.slotName && !(excludeSlots.indexOf(item.slotName) !== -1)) return true
})

const handelDelete = (row: any) => {
  store.dispatch(`${EModules.system}/${EActions.actDeleteRow}`, {
    url: props.name,
    id: row.id
  })
}

const handleNew = () => {
  emit('handleNew')
}
const handleEdit = (row: any) => {
  emit('handleEdit', row)
}

defineExpose({ searchContent })
</script>

<template>
  <div class="table-content">
    <u-table :data="data" :config="config" :total="total" v-model:page-info="pageInfo">
      <template v-if="isCreate" #hander-operation="scope">
        <el-button type="primary" size="small" plain @click="handleNew">
          <el-icon><i-ep-Plus /></el-icon>
          <span>{{ scope.content }}</span>
        </el-button>
      </template>
      <template #operations="scope">
        <el-button v-if="isUpdate" type="primary" size="small" link @click="handleEdit(scope.row)">
          <el-icon><i-ep-Edit /></el-icon>
          <span>编辑</span>
        </el-button>
        <el-button v-if="isDelete" @click="handelDelete(scope.row)" type="danger" size="small" link>
          <el-icon><i-ep-Delete /></el-icon>
          <span>删除</span>
        </el-button>
      </template>
      <template #status="scope">
        <el-icon>
          <i-ep-CircleCheck v-if="scope.row.enable || scope.row.status" style="color: greenyellow" />
          <i-ep-CircleClose v-else style="color: red" />
        </el-icon>
      </template>
      <template #createAt="scope">
        <span>{{ dateFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ dateFormat(scope.row.updateAt) }}</span>
      </template>
      <template v-for="slot in slots" :key="slot.prop" #[slot.slotName!]="scope">
        <slot :name="slot.slotName" :row="scope.row"></slot>
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
