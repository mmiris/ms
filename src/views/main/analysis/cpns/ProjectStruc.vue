<script lang="ts" setup>
defineProps<{
  projectStrucConf: string
}>()
</script>

<template>
  <div class="project-struc">
    <pre>
      <code v-text="projectStrucConf" />
    </pre>
  </div>
</template>

<style lang="less" scoped>
pre {
  margin: 0;
}
</style>
