import { HTMLAttributes, useCallback, useRef } from 'react'
import classnames from 'classnames'
import { AsideContext, AsideContextValue } from './context'
import classes from './index.module.scss'

export * from './context'

export interface AsideProps extends HTMLAttributes<HTMLElement> {}

export function Aside(props: AsideProps) {
  const { className, children, ...rest } = props

  const asideRef = useRef<HTMLElement>(null)
  const onScroll = useCallback<AsideContextValue['onScroll']>(
    ({ scrollTop }) => {
      if (asideRef.current) {
        const { scrollHeight, clientHeight } = asideRef.current
        if (clientHeight >= scrollHeight) {
          return
        }
        asideRef.current.scrollTop = scrollTop - clientHeight / 2
      }
    },
    [],
  )

  return (
    <aside
      className={classnames(classes.aside, className)}
      {...rest}
      ref={asideRef}
    >
      <AsideContext.Provider value={{ onScroll }}>
        {children}
      </AsideContext.Provider>
    </aside>
  )
}
