import type { CategoryItem } from '@/types'
import { Tree, TreeProps } from '@/components'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@/hooks'

export interface CategoryProps {
  categories: CategoryItem[]
}

export function Category(props: CategoryProps) {
  const { categories } = props
  const treeData = useMemo(
    () => [{ label: '全部' }, ...categories],
    [categories],
  )

  const { category = treeData[0].label } = useQuery<{
    category?: string
  }>()
  const [current, setCurrent] = useState(category)

  const router = useRouter()
  const handleSelect: TreeProps['onSelect'] = (item) => {
    const query: Record<string, any> = {}
    if (item.label !== treeData[0].label) {
      query.category = item.label
    }
    setCurrent(query.category)
    setTimeout(() => {
      router.replace({ pathname: '/', query })
    }, 400)
  }

  console.log('current => ', current)

  return (
    <Tree
      data={treeData}
      current={current}
      keyName="label"
      onSelect={handleSelect}
    />
  )
}
