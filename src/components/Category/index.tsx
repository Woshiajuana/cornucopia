import type { CategoryItem } from '@/types'
import { Tree } from '@/components'

export interface CategoryProps {
  categories: CategoryItem[]
}

export function Category(props: CategoryProps) {
  const { categories } = props
  return (
    <Tree data={categories} current={categories[0].label} keyName="label" />
  )
}
