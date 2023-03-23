import { curl } from '@/curl/curl'
import { ArticleItem, CategoryItem } from '@/types'

export const reqCategoryList = () => curl<CategoryItem[]>('mocks/classify.json')

export const reqArticleList = () =>
  curl<ArticleItem[]>('mocks/articles.json?v=1679558273257')
