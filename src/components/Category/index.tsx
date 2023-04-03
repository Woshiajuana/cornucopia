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

  const router = useRouter()
  const handleSelect: TreeProps['onSelect'] = (item) => {
    const query: Record<string, any> = {}
    if (item.label !== treeData[0].label) {
      query.category = item.label
    }
    // fix
    document.scrollingElement!.scrollTop = 0
    router.replace({ pathname: '/', query })
  }

  return (
    <Tree
      data={treeData}
      current={category}
      keyName="label"
      onSelect={handleSelect}
    />
  )
}
