import Link from 'next/link'
import { ArticleItem } from '@/types'
import classes from './index.module.scss'
import classnames from 'classnames'
import { DateTime } from '@/components'

export interface ArticleCellProps {
  article: ArticleItem
}

export function ArticleCell(props: ArticleCellProps) {
  const { article } = props
  const { id, title, abstract, date } = article

  return (
    <li className={classnames(`mb-6`, classes.cell)}>
      <Link className="block" href={`/article/${id}.html`}>
        <h2 className="text-lg text-primary">{title}</h2>
        <p className="text-gray-600 mt-1">{abstract}</p>
        <div className="mt-1 text-gray-500">
          <DateTime time={date} template="YYYY/MM/DD hh:mm" />
        </div>
      </Link>
    </li>
  )
}
