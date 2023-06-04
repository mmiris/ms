<template>
  <div>
    <router-link to="/login" class="router">login</router-link>
    <router-link to="/main" class="router">main</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
// import LoginView from './views/login/LoginView.vue'
// import MainView from './views/main/MainView.vue'
</script>

<style scoped>
.router {
  margin: 0 20px;
}
</style>
