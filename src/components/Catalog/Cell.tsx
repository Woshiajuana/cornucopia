import type { CatalogItem } from '@/types'
import classnames from 'classnames'
import { useDocumentEle, useScrollTo } from '@/hooks'

export interface CatalogCellProps {
  catalogItem: CatalogItem
  scrollTop: number
}

export function CatalogCell(props: CatalogCellProps) {
  const { catalogItem, scrollTop } = props
  const { title, children, start, end } = catalogItem

  const docRef = useDocumentEle()
  const handleAnchor = useScrollTo(docRef)

  return (
    <div className="pl-2">
      <p
        onClick={() => handleAnchor(start)}
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
        <CatalogCell scrollTop={scrollTop} catalogItem={item} key={index} />
      ))}
    </div>
  )
}
