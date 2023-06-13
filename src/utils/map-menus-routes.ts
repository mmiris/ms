import { RouteRecordRaw } from 'vue-router'
import analysisRoutes from '@/views/main/analysis'
import productRoutes from '@/views/main/product'
import storyRoutes from '@/views/main/story'
import systemRoutes from '@/views/main/system'

const allMainChildrenRoutes: RouteRecordRaw[] = analysisRoutes
// .concat(productRoutes)
// .concat(storyRoutes)
// .concat(systemRoutes)

const mapMenus2Routes: (userMenus: any) => RouteRecordRaw[] = (userMenus: any) => {
  const mainChildrenRoutes: RouteRecordRaw[] = []

  const recurseRoutes = (menus: any) => {
    // console.log(menus)

    menus.forEach((menu: any) => {
      // console.log(menu)

      if (menu.type === 2) {
        allMainChildrenRoutes.forEach((route) => {
          console.log(route.path, '---', menu.url.slice(6))
          if (route.path === menu.url.slice(6)) {
            mainChildrenRoutes.push(route)
          }
        })
      } else {
        recurseRoutes(menu.children)
      }
    })
  }
  recurseRoutes(userMenus)

  return mainChildrenRoutes
}

export default mapMenus2Routes
