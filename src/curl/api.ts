import { curl } from '@/curl/curl'
import { ArticleItem, CategoryItem } from '@/types'
import { BASE_URL } from '@/constants'

// 获取分类列表
export const reqCategoryList = () =>
  curl<CategoryItem[]>(`mocks/category.json?v=${Date.now()}`)

// 获取文章列表
export const reqArticleList = () =>
  curl<ArticleItem[]>(`mocks/articles.json?v=${Date.now()}`)

// 获取文章详情
export const reqArticleInfo = (params: { path: string }) =>
  fetch(`${BASE_URL}mocks/${params.path}?v=${Date.now()}`).then((res) =>
    res.text(),
  )
