import type { CategoryItem } from '@/types'

export interface CategoryProps {
  categories: CategoryItem[]
}

export function Category(props: CategoryProps) {
  const { categories } = props
  return (
    <ul className="">
      {categories.map((item) => (
        <li className="block" key={item.title}>
          {item.title}
        </li>
      ))}
    </ul>
  )
}
