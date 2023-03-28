import type { HTMLAttributes } from 'react'
import classnames from 'classnames'
import classes from './index.module.scss'

export interface AsideProps extends HTMLAttributes<HTMLElement> {}

export function Aside(props: AsideProps) {
  const { className, ...rest } = props

  return <aside className={classnames(classes.aside, className)} {...rest} />
}
