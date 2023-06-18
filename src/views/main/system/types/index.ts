interface ILayout {
  isShow?: boolean
  fixed?: 'left' | 'right'
  align?: 'left' | 'center' | 'right'
}

interface IHeader {
  title: string
  btnCotent: string
}

interface column {
  prop: string
  label: string
  slotName: string
  width?: number
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
}

interface ITableConfig {
  header: IHeader
  layout?: {
    select?: ILayout
    index?: ILayout
  }
  columns: column[]
}

export { ITableConfig }
