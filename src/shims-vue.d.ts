/* eslint-disable */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const ElLoading: typeof import('element-plus')['ElLoading']
declare module 'element-plus/dist/locale/zh-cn.mjs'
