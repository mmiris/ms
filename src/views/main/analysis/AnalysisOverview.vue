<script lang="ts" setup>
import { ref, reactive } from 'vue'
import UForm from '@/common-ui/u-form'
import type { IModel } from '@/common-ui/u-form'

const model: IModel = reactive({
  layout: {
    labelWidth: '80px',
    gutter: 50
  },
  items: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '地区',
      placeholder: '请选择地区',
      options: [
        { label: '上海', value: 'shanghai' },
        { label: '北京', value: 'beijing' }
      ]
    },
    {
      type: 'date',
      label: '日期',
      placeholder: { startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
      options: 'daterange'
    }
  ]
})
</script>

<template>
  <div class="">
    <u-form :model="model" />
  </div>
</template>

<style lang="less" scoped></style>
