interface IOptions {
  label: string
  value: string
}

interface IItem {
  field: string
  type: 'input' | 'password' | 'select' | 'date'
  label: string
  placeholder: string | { startPlaceholder: string; endPlaceholder: string }
  options?: string | IOptions[]
}

interface IFormConfig {
  layout: {
    labelWidth: string
    gutter: number
    span?: number
  }
  items: IItem[]
}

export { IOptions, IItem, IFormConfig }
