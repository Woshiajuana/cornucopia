import { CatalogItem } from '@/types'

export interface CatalogCellProps {
  catalogItem: CatalogItem
}

export function CatalogCell(props: CatalogCellProps) {
  const { catalogItem } = props
  const { title, children } = catalogItem
  return (
    <div>
      <p>{title}</p>
      {children.map((item, index) => (
        <CatalogCell catalogItem={item} key={index} />
      ))}
    </div>
  )
}
