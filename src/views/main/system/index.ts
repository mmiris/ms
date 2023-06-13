import { RouteRecordRaw } from 'vue-router'
import SystemMenu from './SystemMenu.vue'
import SysremUser from './SystemUser.vue'
import SystemDepartment from './SystemDepartment.vue'
import SystemRole from './SystemRole.vue'

const systemRoutes: RouteRecordRaw[] = [
  {
    name: 'systemMenu',
    path: 'system/menu',
    component: SystemMenu
  },
  {
    name: 'systemUser',
    path: 'system/user',
    component: SysremUser
  },
  {
    name: 'systemDepartment',
    path: 'system/department',
    component: SystemDepartment
  },
  {
    name: 'systemRole',
    path: 'system/role',
    component: SystemRole
  }
]

export default systemRoutes
