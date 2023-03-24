import type { ArticleItem } from '@/types'
import { ArticleCell } from './Cell'

export interface ArticleListProps {
  articles: ArticleItem[]
}

export function ArticleList(props: ArticleListProps) {
  const { articles } = props

  return (
    <ul className="px-4">
      {articles.map((item) => (
        <ArticleCell key={item.id} article={item} />
      ))}
    </ul>
  )
}
