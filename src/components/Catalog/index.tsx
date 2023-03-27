import { useEffect, useState } from 'react'
import type { CatalogItem } from '@/types'
import { CatalogCell } from './Cell'
import { parseHtml } from '@/utils'

export function Catalog() {
  const [catalogs, setCatalogs] = useState<CatalogItem[]>()

  useEffect(() => {
    setCatalogs(parseHtml(document.getElementById('bee-article-content')!))
  }, [])

  if (!catalogs) {
    return null
  }

  return (
    <div className="py-5">
      {catalogs.map((item, index) => (
        <CatalogCell catalogItem={item} key={index} />
      ))}
    </div>
  )
}
