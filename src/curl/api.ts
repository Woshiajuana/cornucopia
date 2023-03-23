import { curl } from '@/curl/curl'
import { ArticleItem, CategoryItem } from '@/types'

// 获取分类列表
export const reqCategoryList = () => curl<CategoryItem[]>('mocks/classify.json')

// 获取文章列表
export const reqArticleList = () =>
  curl<ArticleItem[]>('mocks/articles.json?v=1679558273257')

// 获取文章详情
export const reqArticleInfo = (params: { path: string }) =>
  curl<ArticleItem>(
    `https://blog.daysnap.cn/articles/${params.path}?v=${Date.now()}`,
  )
