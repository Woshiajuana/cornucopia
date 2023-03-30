import { useEffect, useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import type { CatalogItem } from '@/types'
import { parseHtml } from '@/utils'
import { Icon, useAsideContext } from '@/components'
import { throttle } from '@daysnap/utils'
import { useDocumentEle, useScrollTo } from '@/hooks'
import { CatalogCell } from './Cell'
import classes from './index.module.scss'

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
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handler = throttle((event: Event) => {
      const { scrollTop } = (event.target as any).scrollingElement
      const index = sourceCatalogs.findIndex((item) => {
        return item.start <= scrollTop && scrollTop < item.end
      })
      const indicator = index * 1.5 * 18
      onScroll({ scrollTop, indicator })
      setScrollTop(scrollTop)
    }, 100)

    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [onScroll, sourceCatalogs])

  const docRef = useDocumentEle()
  const handleAnchor = useScrollTo(docRef)

  if (!catalogs) {
    return null
  }

  return (
    <div className="">
      {catalogs.map((item, index) => (
        <CatalogCell
          onAnchor={handleAnchor}
          scrollTop={scrollTop}
          catalogItem={item}
          key={index}
        />
      ))}
    </div>
  )
}
