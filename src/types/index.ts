export interface CategoryItem {
  title: string
}

export interface ArticleItem {
  id: string
  title: string
  date: string
  content: string
  abstract: string
}

export interface ResponseData<T> {
  code: string
  data: T
  msg: string
}
