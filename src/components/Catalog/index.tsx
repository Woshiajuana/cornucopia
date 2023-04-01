import { useEffect, useState } from 'react'
import type { CatalogItem } from '@/types'
import { parseHtml } from '@/utils'
import { useAsideContext } from '@/components'
import { throttle } from '@daysnap/utils'
import { useDocumentEle, useScrollTo } from '@/hooks'
import { Tree } from '../Tree'

const useCatalogInfo = () => {
  const [catalogInfo, setCatalogInfo] = useState<{
    catalogs: CatalogItem[]
    sourceCatalogs: CatalogItem[]
  }>({
    catalogs: [],
    sourceCatalogs: [],
  })

  useEffect(() => {
    setCatalogInfo(parseHtml(document.getElementById('bee-article-content')!))
  }, [])

  return catalogInfo
}

export function Catalog() {
  const { catalogs, sourceCatalogs } = useCatalogInfo()
  const { onScroll } = useAsideContext()
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const handler = throttle((event: Event) => {
      const { scrollTop } = (event.target as any).scrollingElement
      const index = sourceCatalogs.findIndex((item) => {
        return item.start <= scrollTop && scrollTop < item.end
      })
      onScroll({ scrollTop: index * 1.75 * 18 })
      setCurrent(sourceCatalogs[index].key)
    }, 100)

    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [onScroll, sourceCatalogs])

  const docRef = useDocumentEle()
  const handleScrollTo = useScrollTo(docRef)

  return (
    <Tree<CatalogItem>
      current={current}
      data={catalogs}
      onSelect={(item) => {
        handleScrollTo(item.start)
      }}
    />
  )
}
