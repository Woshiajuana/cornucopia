import Link from 'next/link'
import { ArticleItem } from '@/types'

export interface ArticleCellProps {
  article: ArticleItem
}

export function ArticleCell(props: ArticleCellProps) {
  const { article } = props
  const { id, title, abstract, date } = article

  return (
    <li className="mb-4">
      <Link className="block" href={`/article/${id}`}>
        <h2 className="text-lg">{title}</h2>
        <p className="text-[15px]">{abstract}</p>
        <small>
          <time>{date}</time>
        </small>
      </Link>
    </li>
  )
}
