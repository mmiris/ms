<script lang="ts" setup>
import { ref, watch, toRefs } from 'vue'
import { IFormConfig, IOptions } from '..'

const props = defineProps<{
  config: IFormConfig
  modelValue: any
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const { layout, items } = toRefs(ref(props.config).value)

const model = ref({ ...props.modelValue })
watch(
  model,
  (value) => {
    emits('update:modelValue', value)
  },
  { deep: true }
)
</script>

<template>
  <div class="u-form">
    <slot name="header"></slot>
    <el-form :label-width="layout.labelWidth">
      <el-row :gutter="layout.gutter">
        <template v-for="item in items" :key="item.label">
          <el-col :="layout.span === undefined ? { xs: 24, sm: 24, md: 12, lg: 8, xl: 6 } : { span: layout.span }">
            <el-form-item v-if="!item.ishidden" :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder" v-model="model[item.field]"></el-input>
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input :placeholder="item.placeholder" v-model="model[item.field]" show-password></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" v-model="model[item.field]">
                  <template v-for="option in (item.options as IOptions[])" :key="option.label">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'date'">
                <el-date-picker :type="item.options" :="item.placeholder" v-model="model[item.field]"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<style lang="less" scoped>
.u-form {
  padding: 18px;
  background-color: #fdfdfd;
  border-radius: 2px;
  box-shadow: 0 0 3px 0.1px var(--el-border-color);

  .el-form {
    width: 100%;
  }

  .el-select {
    flex: 1;
  }
}
</style>
