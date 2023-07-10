<script lang="ts" setup>
defineProps<{
  gitRegsConf: { title: string; desc: string }[]
}>()
</script>

<template>
  <div class="git-regs">
    <ElDescriptions :column="gitRegsConf.length">
      <template v-for="(item, index) in gitRegsConf" :key="index">
        <ElDescriptionsItem :label="item.title">
          <ElText type="primary">{{ item.desc }}</ElText>
        </ElDescriptionsItem>
      </template>
    </ElDescriptions>
  </div>
</template>

<style lang="less" scoped></style>
