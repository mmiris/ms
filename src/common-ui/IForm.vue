<script lang="ts" setup>
import { ref, reactive } from 'vue'
import IModel from './types/form'

const model: IModel = reactive({
  layout: {
    labelWidth: '80px',
    gutter: 50,
    span: 12
  },
  items: [
    {
      type: 'input',
      label: 'username',
      placeholder: 'Enter your name'
    },
    {
      type: 'password',
      label: 'password',
      placeholder: 'Enter your password'
    },
    {
      type: 'select',
      label: 'region',
      placeholder: 'select your region',
      options: [
        { label: 'shanghai', value: 'shanghai' },
        { label: 'shanghai', value: 'shanghai' }
      ]
    },
    {
      type: 'date',
      label: 'date',
      placeholder: { startPlaceholder: 'start date', endPlaceholder: 'end date' }
    }
  ]
})
</script>

<template>
  <div class="i-form">
    <el-form :label-width="model.layout.labelWidth">
      <el-row :gutter="model.layout.gutter">
        <template v-for="(item, index) in model.items" :key="index">
          <el-col :span="model.layout.span">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder"></el-input>
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input :placeholder="item.placeholder" show-password></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option label="shanghai" value="shanghai">123</el-option>
                  <el-option label="beijing" value="beijing"></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'date'">
                <el-date-picker type="daterange" :="item.placeholder"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.i-form {
  padding: 18px 18px 0;
  background-color: #fdfdfd;
  border-radius: 2px;
  box-shadow: 0 0 3px 0.1px var(--el-border-color) inset;

  .el-form {
    width: 100%;
  }

  .el-select {
    flex: 1;
  }
}
</style>
