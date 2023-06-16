interface ISeachModel {
  username: string
  password: string
  region: string
  date: string[]
}

interface ITableConfig {
  prop: string
  label: string
  slotName: string
  fixed?: 'left' | 'right'
  width?: number
  miniWidth?: number
  align?: string
}

export { ISeachModel, ITableConfig }
