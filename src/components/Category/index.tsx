import type { CategoryItem } from '@/types'
import type { HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CategoryProps extends HTMLAttributes<HTMLUListElement> {
  categories: CategoryItem[]
}

export function Category(props: CategoryProps) {
  const { categories, className, ...rest } = props
  return (
    <ul className={classNames(`sticky top-0`, className)} {...rest}>
      {categories.map((item) => (
        <li className="block" key={item.title}>
          {item.title}
        </li>
      ))}
    </ul>
  )
}
