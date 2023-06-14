<template>
  <div class="main-view">
    <el-container>
      <el-aside width="auto">
        <nav-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @fold="fold" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu/src/NavMenu.vue'
import NavHeader from '@/components/nav-header/src/NavHeader.vue'

let isFold = ref(false)
const fold = (isFoldParams: boolean) => {
  isFold.value = isFoldParams
}
</script>

<style lang="less" scoped>
.main-view {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;

    .el-header {
      display: flex;
      align-items: center;
      height: 48px !important;
      font-size: 28px;
    }

    .el-main {
      background-color: #f8f8f8;
    }
  }
}
</style>
