<script lang="ts" setup>
import { toRefs } from 'vue'
import IModel, { IOptions } from './types'

const config = defineProps<{
  model: IModel
}>()

const { layout, items } = toRefs(config.model)
</script>

<template>
  <div class="i-form">
    <el-form :label-width="layout.labelWidth">
      <el-row :gutter="layout.gutter">
        <template v-for="(item, index) in items" :key="index">
          <el-col :="layout.span === undefined ? { xs: 24, sm: 24, md: 12, lg: 8, xl: 6 } : { span: layout.span }">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder"></el-input>
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input :placeholder="item.placeholder" show-password></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <template v-for="(option, index) in (item.options as IOptions[])" :key="index">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'date'">
                <el-date-picker :type="item.options" :="item.placeholder"></el-date-picker>
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
