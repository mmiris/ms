<script lang="ts" setup>
import formConfig from './config/user.formConfig'
import tableConfig from './config/user.tableConfig'
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
</script>

<template>
  <div class="system-user">
    <search-form :config="formConfig" />
    <table-content :config="tableConfig" name="users"></table-content>
  </div>
</template>

<style lang="less" scoped></style>
