import { useEffect, useState } from 'react'
import type { CatalogItem } from '@/types'
import { parseHtml } from '@/utils'
import { Icon, useAsideContext } from '@/components'
import { throttle } from '@daysnap/utils'
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
  const [indicator, setIndicator] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handler = throttle((event: Event) => {
      const { scrollTop } = (event.target as any).scrollingElement
      const index = sourceCatalogs.findIndex((item) => {
        return item.start <= scrollTop && scrollTop < item.end
      })
      const indicator = index * 1.5 * 18
      onScroll({ scrollTop, indicator })
      setIndicator(indicator)
      setScrollTop(scrollTop)
    }, 100)

    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [onScroll, sourceCatalogs])

  if (!catalogs) {
    return null
  }

  return (
    <div className={classes.catalog}>
      <div className="pl-4">
        {catalogs.map((item, index) => (
          <CatalogCell scrollTop={scrollTop} catalogItem={item} key={index} />
        ))}
      </div>
      <div
        className="flex items-center h-6 right-0 absolute left-0 top-0 pointer-events-none transition-transform bg-amber-300/30"
        style={{ transform: `translate3d(0, ${indicator}px, 0)` }}
      >
        <Icon name="arrow" />
      </div>
    </div>
  )
}
