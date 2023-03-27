import type { ArticleItem } from '@/types'
import { ArticleCell } from './Cell'

export interface ArticleListProps {
  articles: ArticleItem[]
}

export function ArticleList(props: ArticleListProps) {
  const { articles } = props

  return (
    <ul className="flex-1">
      {articles.map((item) => (
        <ArticleCell key={item.id} article={item} />
      ))}
    </ul>
  )
}
