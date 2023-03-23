import { useRouter } from 'next/router'

export default function ArticlePage() {
  const { query } = useRouter()
  return <div>文章详情{JSON.stringify(query)}</div>
}
