export interface CategoryItem {
  title: string
}

export interface ArticleInfo {
  title: string
  createTime: string
  content: string
}

export interface ArticleItem {
  title: string
  createTime: string
}

export interface ResponseData<T> {
  code: string
  data: T
  msg: string
}
