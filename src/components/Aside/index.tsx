import type { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface AsideProps extends HTMLAttributes<HTMLElement> {}

export function Aside(props: AsideProps) {
  const { className, ...rest } = props

  return (
    <aside
      className={classnames(`sticky top-14 w-[240px] ml-4`, className)}
      {...rest}
    />
  )
}
