<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { IStore } from '@/store/type'
import { Fold, Expand } from '@element-plus/icons-vue'
import UBreadcrumb from '@/common-ui/u-breadcrumb/src/UBreadcurmb.vue'
import { mapMenus2breadcrumbs } from '@/utils/map-menus-breadcrumb'
import { useRoute } from 'vue-router'

const emit = defineEmits(['fold'])

const isFold = ref(false)
const fold = () => {
  isFold.value = !isFold.value
  emit('fold', isFold.value)
}

const userMenus = useStore<IStore>().state.login.userMenus
const breadcrumbs = computed(() => {
  const currentRoute = useRoute().path
  return mapMenus2breadcrumbs(userMenus, currentRoute)
})
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
