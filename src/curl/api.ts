import { curl } from '@/curl/curl'
import { ArticleItem, CategoryItem } from '@/types'

export const reqCategoryList = () => curl<CategoryItem[]>('https://blog.daysnap.cn/mocks/classify.json')

export const reqArticleList = () => curl<ArticleItem[]>('https://blog.daysnap.cn/mocks/articles.json?v=1679558273257')
