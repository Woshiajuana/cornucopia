import type { CategoryItem } from '@/types'
import { Tree } from '@/components'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

export interface CategoryProps {
  categories: CategoryItem[]
}

export function Category(props: CategoryProps) {
  const router = useRouter()
  const { categories } = props

  const treeData = useMemo(
    () => [{ label: '全部' }, ...categories],
    [categories],
  )

  const current = (router.query.category as string) || treeData[0].label

  return (
    <Tree
      data={treeData}
      current={current}
      keyName="label"
      onSelect={(item) => {
        router.replace({
          pathname: '',
          query: {
            category: item.label === treeData[0].label ? '' : item.label,
          },
        })
      }}
    />
  )
}
