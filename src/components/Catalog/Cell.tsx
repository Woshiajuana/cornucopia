import type { CatalogItem } from '@/types'

export interface CatalogCellProps {
  catalogItem: CatalogItem
}

export function CatalogCell(props: CatalogCellProps) {
  const { catalogItem } = props
  const { title, children } = catalogItem
  return (
    <div className="pl-2">
      <p className="text-[0.8rem] h-6 text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer hover:text-primary">
        {title}
      </p>
      {children.map((item, index) => (
        <CatalogCell catalogItem={item} key={index} />
      ))}
    </div>
  )
}
