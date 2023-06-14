import { RouteRecordRaw } from 'vue-router'
import analysisRoutes from '@/views/main/analysis'
import productRoutes from '@/views/main/product'
import storyRoutes from '@/views/main/story'
import systemRoutes from '@/views/main/system'

const allMainRoutes: RouteRecordRaw[] = analysisRoutes.concat(productRoutes).concat(storyRoutes).concat(systemRoutes)

const mapMenus2Routes: (userMenus: any) => RouteRecordRaw[] = (userMenus: any) => {
  const mainRoutes: RouteRecordRaw[] = [
    {
      name: 'redirect',
      path: '',
      redirect: '/main/analysis/overview'
    }
  ]

  const recurseRoutes = (menus: any) => {
    menus.forEach((menu: any) => {
      if (menu.type === 2) {
        const route = allMainRoutes.find((route) => route.path === menu.url.slice(6))
        if (route) {
          mainRoutes.push(route)
        }
      } else recurseRoutes(menu.children)
    })
  }

  recurseRoutes(userMenus)

  return mainRoutes
}

export default mapMenus2Routes
