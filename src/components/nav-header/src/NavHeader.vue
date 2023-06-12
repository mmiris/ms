<script lang="ts" setup>
import { ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

const emit = defineEmits(['fold'])

const isFold = ref(false)

const fold = () => {
  isFold.value = !isFold.value
  emit('fold', isFold.value)
}
</script>

<template>
  <div class="nav-header">
    <el-icon @click="fold" style="color: #ffd04b">
      <component :is="isFold ? Fold : Expand"></component>
    </el-icon>
  </div>
</template>

<style lang="ts" scoped></style>
