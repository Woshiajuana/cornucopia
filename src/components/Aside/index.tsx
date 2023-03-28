import { HTMLAttributes, useCallback, useRef } from 'react'
import classnames from 'classnames'
import classes from './index.module.scss'
import { AsideContext, AsideContextValue } from './context'

export * from './context'

export interface AsideProps extends HTMLAttributes<HTMLElement> {}

export function Aside(props: AsideProps) {
  const { className, children, ...rest } = props

  const asideRef = useRef<HTMLElement>(null)
  const onScroll = useCallback<AsideContextValue['onScroll']>(
    ({ indicator }) => {
      if (asideRef.current) {
        const { scrollHeight, clientHeight } = asideRef.current
        if (clientHeight >= scrollHeight) {
          return
        }
        asideRef.current.scrollTop = indicator - clientHeight / 2
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
