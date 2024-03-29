export interface CatalogItem {
  key: string
  label: string
  start: number
  end: number
  children: CatalogItem[]
}

export interface CategoryItem {
  label: string
}

export interface ArticleItem {
  id: string
  title: string
  date: string
  content: string
  abstract: string
  path: string
}

export interface ResponseData<T> {
  code: string
  data: T
  msg: string
}
