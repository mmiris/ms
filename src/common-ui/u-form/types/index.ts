export interface IOptions {
  label: string
  value: string
}

export interface IItem {
  type: 'input' | 'password' | 'select' | 'date'
  label: string
  placeholder: string | { startPlaceholder: string; endPlaceholder: string }
  options?: string | IOptions[]
}

export interface IModel {
  layout: {
    labelWidth: string
    gutter: number
    span?: number
  }
  items: IItem[]
}
