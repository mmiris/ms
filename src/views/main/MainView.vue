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
          <!-- <i-form /> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu/src/NavMenu.vue'
import NavHeader from '@/components/nav-header/src/NavHeader.vue'
import IForm from '@/common-ui/IForm.vue'

let isFold = ref(false)
const fold = (isFoldParams: boolean) => {
  isFold.value = isFoldParams
}
</script>

<style lang="less" scoped>
.main-view {
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-main {
  background-color: #f8f8f8;
}

.el-header {
  display: flex;
  align-items: center;
  height: 48px !important;
  font-size: 28px;
}

.el-row {
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 12px -12px #000000;
}

.el-col {
  margin: 12px 8px;
}
</style>
