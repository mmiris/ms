<script lang="ts" setup>
import formConfig from './config/role.formConfig'
import tableConfig from './config/role.tableConfig'
import SearchForm from '@/components/search-form'
import TableContent from '@/components/table-content'
</script>

<template>
  <div class="system-user">
    <search-form :config="formConfig" />
    <table-content :config="tableConfig" name="role"></table-content>
  </div>
</template>

<style lang="less" scoped></style>
