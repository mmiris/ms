<script lang="ts" setup>
import { ref } from 'vue'
import UForm from '@/common-ui/u-form'
import { IFormConfig } from '@/common-ui/u-form'

const emit = defineEmits<{
  (e: 'searchContent', value: any): void
}>()

const props = defineProps<{
  config: IFormConfig
}>()

const model: any = ref({})
for (const item of props.config.items) {
  model.value[item.field] = ''
}

const resetForm = () => {
  for (const item of props.config.items) {
    model.value[item.field] = ''
  }
  searchContent()
}

const searchContent = (model?: any) => {
  emit('searchContent', model)
}
</script>

<template>
  <div class="search-page">
    <u-form :config="config" v-model="model">
      <template #header>
        <h3>高级搜索</h3>
      </template>
      <template #footer>
        <div class="operation">
          <el-button @click="resetForm">
            <el-icon><i-ep-refresh /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button type="primary" @click="searchContent(model)">
            <el-icon><i-ep-search /></el-icon>
            <span>搜索</span>
          </el-button>
        </div>
      </template>
    </u-form>
  </div>
</template>

<style lang="less" scoped>
h3 {
  margin-top: 0;
  text-align: center;
}

.operation {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
