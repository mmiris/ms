<template>
  <div>
    <h2>Main</h2>
    <h5>{{ store.state.name }}</h5>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()
</script>
