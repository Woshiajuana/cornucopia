import { useEffect, useMemo, useState } from 'react'
import type { CatalogItem } from '@/types'
import { parseHtml } from '@/utils'
import { Icon } from '@/components'
import { CatalogCell } from './Cell'
import classes from './index.module.scss'
import { useScrolling, useWindow } from '@/hooks'

const useCatalog = () => {
  const [catalogs, setCatalogs] = useState<CatalogItem[]>()

  useEffect(() => {
    setCatalogs(parseHtml(document.getElementById('bee-article-content')!))
  }, [])

  return catalogs
}

export function Catalog() {
  const catalogs = useCatalog()
  const windowRef = useWindow()

  const target = useScrolling(windowRef)
  const indicator = useMemo(() => {
    let value = 0
    if (!target || !catalogs || !catalogs.length) {
      return value
    }

    const { scrollTop } = target
    catalogs.find((item, index) => {
      if (item.start <= scrollTop && scrollTop < item.end) {
        value = (index + 1) * 24
        return true
      }
    })

    return value
  }, [target, catalogs])

  if (!catalogs) {
    return null
  }

  console.log('indicator => ', indicator)

  return (
    <div className={classes.catalog}>
      <div className="pl-4">
        {catalogs.map((item, index) => (
          <CatalogCell catalogItem={item} key={index} />
        ))}
      </div>
      <div className="flex items-center h-6 right-0 absolute left-0 top-0 pointer-events-none">
        <Icon name="arrow" />
      </div>
    </div>
  )
}
