<template>
  <div>
    <router-link to="/login" custom #="{ navigate }">
      <el-button type="primary" @click="navigate">login</el-button>
    </router-link>
    <router-link to="/main" custom #="{ navigate }">
      <el-button type="primary" @click="navigate">main</el-button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.router {
  margin: 0 20px;
}
</style>
