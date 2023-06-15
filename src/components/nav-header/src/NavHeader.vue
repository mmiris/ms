<script lang="ts" setup>
import { ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UBreadcrumb from '@/common-ui/u-breadcrumb/src/UBreadcurmb.vue'

const emit = defineEmits(['fold'])
const isFold = ref(false)

const fold = () => {
  isFold.value = !isFold.value
  emit('fold', isFold.value)
}

const breadcrumbs = [
  { name: 'ahhah', url: '/a/a/a' },
  { name: 'xixiia', url: 'adadca' }
]
</script>

<template>
  <div class="nav-header">
    <el-icon @click="fold">
      <component :is="isFold ? Fold : Expand"></component>
    </el-icon>
    <u-breadcrumb :breadcrumbs="breadcrumbs" />
  </div>
</template>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
}
</style>
