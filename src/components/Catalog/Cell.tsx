import type { CatalogItem } from '@/types'
import classnames from 'classnames'

export interface CatalogCellProps {
  catalogItem: CatalogItem
  scrollTop: number
  onAnchor?: (position: number) => void
}

export function CatalogCell(props: CatalogCellProps) {
  const { catalogItem, scrollTop, onAnchor } = props
  const { title, children, start, end } = catalogItem

  return (
    <div className="pl-2">
      <p
        onClick={() => onAnchor?.(start)}
        className={classnames(
          `flex items-center text-[0.8rem] h-6 text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer hover:text-primary`,
          {
            ['text-primary']: start <= scrollTop && scrollTop < end,
          },
        )}
      >
        {title}
      </p>
      {children.map((item, index) => (
        <CatalogCell
          onAnchor={onAnchor}
          scrollTop={scrollTop}
          catalogItem={item}
          key={index}
        />
      ))}
    </div>
  )
}
