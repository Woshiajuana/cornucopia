import Link from 'next/link'
import { ArticleItem } from '@/types'

export interface ArticleCellProps {
  article: ArticleItem
}

export function ArticleCell(props: ArticleCellProps) {
  const { article } = props
  const { id, title, abstract, date } = article

  return (
    <li className="mb-6">
      <Link className="block" href={`/article/${id}`}>
        <h2 className="text-lg">{title}</h2>
        <p className="text-gray-600 mt-1">{abstract}</p>
        <div className="mt-1 text-gray-500">
          <time>{date}</time>
        </div>
      </Link>
    </li>
  )
}
