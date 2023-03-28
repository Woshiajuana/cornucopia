import { useCallback, useEffect, useMemo, useState } from 'react'
import type { CatalogItem } from '@/types'
import { parseHtml } from '@/utils'
import { Icon, useAsideContext } from '@/components'
import { useScrolling, useWindow } from '@/hooks'
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

  const windowRef = useWindow()
  const handleScroll = throttle(({ scrollTop }) => {
    const index = sourceCatalogs.findIndex((item) => {
      return item.start <= scrollTop && scrollTop < item.end
    })

    const indicator = index * 1.5 * 18

    onScroll({ scrollTop, indicator })

    setIndicator(indicator)
  }, 100)
  useScrolling(windowRef, handleScroll)

  console.log('indicator => ', indicator)

  if (!catalogs) {
    return null
  }

  return (
    <div className={classes.catalog}>
      <div className="pl-4">
        {catalogs.map((item, index) => (
          <CatalogCell catalogItem={item} key={index} />
        ))}
      </div>
      <div
        className="flex items-center h-6 right-0 absolute left-0 top-0 pointer-events-none transition-transform"
        style={{ transform: `translate3d(0, ${indicator}px, 0)` }}
      >
        <Icon name="arrow" />
      </div>
    </div>
  )
}
