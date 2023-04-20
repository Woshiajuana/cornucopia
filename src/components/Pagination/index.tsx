import Link from 'next/link'
import { useQuery } from '@/hooks'

export interface PaginationProps {
  total: number
}

export function Pagination(props: PaginationProps) {
  const { total } = props
  const { page = '1', ...rest } = useQuery<{
    page?: string
    category: string
  }>()

  const prevPage = +page - 1
  const nextPage = +page + 1

  return (
    <div className="flex items-center justify-center py-4 text-sm">
      <Link href={{ pathname: '/', query: { ...rest, page: prevPage } }}>
        上一页
      </Link>
      <span className="mx-4">
        <strong>{page}</strong>/{Math.ceil(total / 10)}
      </span>
      <Link href={{ pathname: '/', query: { ...rest, page: nextPage } }}>
        下一页
      </Link>
    </div>
  )
}
