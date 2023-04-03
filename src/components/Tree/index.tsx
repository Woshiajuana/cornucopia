import classnames from 'classnames'
import { LayoutGroup, motion } from 'framer-motion'

export type TreeDataItem<T = any> = {
  label: string
  children?: TreeDataItem<T>[]
} & T

export interface TreeProps<T = any> {
  keyName?: string
  className?: string
  data: TreeDataItem<T>[]
  current?: string | number
  onSelect?: (item: TreeDataItem<T>) => void
}

export function Tree<T = any>(props: TreeProps<T>) {
  const { className, onSelect, data, current, keyName = 'key' } = props

  return (
    <ul className={classnames(``, className)}>
      {data.map((item) => {
        const { children, label } = item
        const key = (item as any)[keyName] as string

        return (
          <LayoutGroup key={key}>
            <li key={key}>
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
                      className="absolute inset-0 bg-gray-200 dark:bg-neutral-800 rounded-md z-[-1]"
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
              {!!children?.length ? (
                <Tree
                  className="pl-2.5"
                  data={children}
                  keyName={keyName}
                  current={current}
                  onSelect={onSelect}
                />
              ) : null}
            </li>
          </LayoutGroup>
        )
      })}
    </ul>
  )
}
