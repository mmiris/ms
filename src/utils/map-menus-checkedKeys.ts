const mapMenus2CheckedKeys = (menuList: any[]) => {
  const checkedKeys: number[] = []

  const _recurseGetKeys = (menus: any[]) => {
    menus.forEach((item) => {
      if (item.children) {
        _recurseGetKeys(item.children)
      } else {
        checkedKeys.push(item.id)
      }
    })
  }
  _recurseGetKeys(menuList)

  return checkedKeys
}

export default mapMenus2CheckedKeys
