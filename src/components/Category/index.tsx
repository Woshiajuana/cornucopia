import type { CategoryItem } from '@/types'
import { Icon } from '@/components'

export interface CategoryProps {
  categories: CategoryItem[]
}

export function Category(props: CategoryProps) {
  const { categories } = props
  return (
    <div className="relative">
      <ul className="text-[0.8rem] text-gray-500">
        {categories.map((item) => (
          <li
            className="flex items-center h-6 hover:text-primary pl-5 cursor-pointer"
            key={item.title}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex items-center h-6 right-0 absolute left-0 top-0 pointer-events-none">
        <Icon name="arrow" />
      </div>
    </div>
  )
}
