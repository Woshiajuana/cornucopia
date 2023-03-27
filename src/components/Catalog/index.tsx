import { useEffect, useState } from 'react'
import type { CatalogItem } from '@/types'
import { parseHtml } from '@/utils'
import { CatalogCell } from './Cell'
import { Icon } from '@/components'
import classes from './index.module.scss'

export function Catalog() {
  const [catalogs, setCatalogs] = useState<CatalogItem[]>()

  useEffect(() => {
    setCatalogs(parseHtml(document.getElementById('bee-article-content')!))
  }, [])

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
      <div className="flex items-center h-6 right-0 absolute left-0 top-0 pointer-events-none">
        <Icon name="arrow" />
      </div>
    </div>
  )
}
