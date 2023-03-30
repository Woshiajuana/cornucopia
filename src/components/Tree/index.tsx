import classnames from 'classnames'
import { motion } from 'framer-motion'

export interface TreeDataItem {
  key: string
  label: string
  children?: TreeDataItem[]
}

export interface TreeProps {
  className?: string
  data: TreeDataItem[]
  current: string | number
  onSelect?: (item: TreeDataItem) => void
}

export function Tree(props: TreeProps) {
  const { className, onSelect, data, current, ...rest } = props

  return (
    <div className={classnames(`pl-2.5`, className)} {...rest}>
      {data.map((item) => {
        const { key, children, label } = item
        return (
          <>
            <div
              onClick={() => onSelect?.(item)}
              className={classnames(
                `relative flex items-center text-[0.8rem] h-7 text-gray-500 text-ellipsis whitespace-nowrap  cursor-pointer hover:text-primary`,
                {
                  ['text-primary']: key === current,
                },
              )}
            >
              <span className="relative px-2.5 h-7 inline-flex items-center justify-center">
                {label}
                {key === current ? (
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
            {children?.length && (
              <Tree data={children} current={current} onSelect={onSelect} />
            )}
          </>
        )
      })}
    </div>
  )
}

interface TreeCellProps {
  data: TreeDataItem
  onSelect?: (item: TreeDataItem) => void
  current: string | number
}

function TreeCell(props: TreeCellProps) {
  const { onSelect, current, data } = props
  const { key, children, label } = data
  return (
    <div>
      <div
        onClick={() => onSelect?.(data)}
        className={classnames(
          `relative flex items-center text-[0.8rem] h-7 text-gray-500 text-ellipsis whitespace-nowrap  cursor-pointer hover:text-primary`,
          {
            ['text-primary']: key === current,
          },
        )}
      >
        <span className="relative px-2.5 h-7 inline-flex items-center justify-center">
          {label}
          {key === current ? (
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
      <div>
        {children?.map((item) => (
          <TreeCell
            onSelect={onSelect}
            current={current}
            data={item}
            key={item.key}
          />
        ))}
      </div>
    </div>
  )
}
