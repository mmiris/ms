export default function mapMenus2Permissions(userMenus: any) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    menus?.forEach((item: any) => {
      if (item.type === 1 || item.type === 2) {
        _recurseGetPermission(item.children)
      } else if (item.type === 3) {
        permissions.push(item.permission)
      }
    })
  }

  _recurseGetPermission(userMenus)

  return permissions
}
