interface IOptions {
  label: string
  value: string
}

interface IItem {
  type: 'input' | 'password' | 'select' | 'date'
  label: string
  placeholder: string | { startPlaceholder: string; endPlaceholder: string }
  options?: IOptions[]
}

interface IModel<T = IItem> {
  layout: {
    labelWidth: string
    gutter: number
    span?: number
  }
  items: T[]
}

export default IModel
