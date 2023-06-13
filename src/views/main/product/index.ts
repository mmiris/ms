import { RouteRecordRaw } from 'vue-router'
import ProductCategory from './ProductCategory.vue'
import ProductGoods from './ProductGoods.vue'

const productRoutes: RouteRecordRaw[] = [
  {
    name: 'productCategory',
    path: 'product/category',
    component: ProductCategory
  },
  {
    name: 'productGoods',
    path: 'product/goods',
    component: ProductGoods
  }
]

export default productRoutes
