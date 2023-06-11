<template>
  <div class="main-view">
    <el-container class="main-container">
      <el-aside width="200px" class="aside">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu/NavMenu.vue'
</script>

<style lang="less" scoped>
.main-view {
  width: 100%;
  height: 100%;
}

.main-container {
  height: 100%;
}
.aside {
  background-color: #545c64;
}

.header {
  background-color: aqua;
  line-height: var(--el-header-height);
}

.main {
  background-color: skyblue;
}
</style>
