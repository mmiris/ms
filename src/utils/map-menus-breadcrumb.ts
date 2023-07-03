import { IBreadcrumb } from '@/common-ui/u-breadcrumb'

export function mapMenus2breadcrumbs(userMenus: any, currentRoute: string): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []
  const recurseBreadcrumb: any = (items: any, currentRoute: string) => {
    for (const item of items) {
      if (item.type === 1) {
        const subItem = recurseBreadcrumb(item.children, currentRoute)
        if (subItem) {
          breadcrumbs.push({ name: item.name, url: item.url })
          breadcrumbs.push({ name: subItem.name, url: subItem.url })
        }
      } else if (item.type === 2 && item.url === currentRoute) {
        return item
      }
    }
  }
  recurseBreadcrumb(userMenus, currentRoute)

  return breadcrumbs
}
