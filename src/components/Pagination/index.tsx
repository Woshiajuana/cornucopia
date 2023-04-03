import Link, { LinkProps } from 'next/link'
import { useQuery } from '@/hooks'
import { useMemo } from 'react'

export function Pagination() {
  const { page = '1', category } = useQuery<{
    page?: string
    category: string
  }>()

  const prevPage = +page - 1
  const nextPage = +page - 1

  return (
    <div className="flex items-center justify-center py-4 text-sm">
      {/*<Link href={{ pathname: '/', query: { category } }}>上一页</Link>*/}
      {/*<Link href={{ pathname: '/', query: Object.assign({}) }}>上一页</Link>*/}
    </div>
  )
}
