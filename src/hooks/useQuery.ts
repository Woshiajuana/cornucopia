import { useRouter } from 'next/router'

export function useQuery<T = Record<string, any>>() {
  const { query } = useRouter()
  return query as T
}
