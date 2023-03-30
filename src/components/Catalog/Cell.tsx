import type { CatalogItem } from '@/types'
import classnames from 'classnames'
import { motion } from 'framer-motion'

export interface CatalogCellProps {
  catalogItem: CatalogItem
  scrollTop: number
  onAnchor?: (position: number) => void
}

export function CatalogCell(props: CatalogCellProps) {
  const { catalogItem, scrollTop, onAnchor } = props
  const { title, children, start, end } = catalogItem

  return (
    <div className="pl-2.5">
      <div
        onClick={() => onAnchor?.(start)}
        className={classnames(
          `relative flex items-center text-[0.8rem] h-7 text-gray-500 text-ellipsis whitespace-nowrap  cursor-pointer hover:text-primary`,
          {
            ['text-primary']: start <= scrollTop && scrollTop < end,
          },
        )}
      >
        <span className="relative px-2.5 h-7 inline-flex items-center justify-center">
          {title}
          {start <= scrollTop && scrollTop < end ? (
            <motion.div
              className="absolute inset-0 bg-gray-300 dark:bg-neutral-800 rounded-md z-[-1]"
              layoutId="sidebar"
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }}
            />
          ) : null}
        </span>
      </div>
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
