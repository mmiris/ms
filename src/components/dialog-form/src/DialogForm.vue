<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { EModules, IStore } from '@/store/type'
import UForm, { IFormConfig } from '@/common-ui/u-form'
import { EActions } from '@/store/main/system/types'

const props = defineProps<{
  name: string
  config: IFormConfig
  model: any
  title: string
}>()

const dialogVisible = ref(false)
const tempModel: any = ref({})

watch(
  () => props.model,
  (value) => {
    props.config.items.forEach((item) => {
      tempModel.value[item.field] = value[item.field]
    })
  }
)

const store = useStore<IStore>()

const handleConfirm = () => {
  dialogVisible.value = false

  if (Object.keys(props.model).length) {
    store.dispatch(`${EModules.system}/${EActions.actEditRow}`, {
      url: props.name,
      id: props.model.id,
      row: tempModel.value
    })
  } else {
    store.dispatch(`${EModules.system}/${EActions.actNewRow}`, {
      url: props.name,
      row: tempModel.value
    })
  }
}

defineExpose({ dialogVisible })
</script>

<template>
  <div class="dialog-form">
    <el-dialog v-model="dialogVisible" :title="title" width="30%" center destroy-on-close>
      <u-form :config="config" v-model="tempModel" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false"> 取消 </el-button>
          <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less">
.el-dialog__body .u-form {
  box-shadow: none;
  padding: 0;

  .el-form .el-row .el-col:last-child {
    .el-form-item {
      margin-bottom: 0;
    }
  }
}
</style>
