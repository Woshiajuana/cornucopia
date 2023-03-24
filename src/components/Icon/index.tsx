import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export interface IconProps extends HTMLAttributes<HTMLElement> {
  name?: string
  spin?: boolean
  prefixClass?: string
  size?: string | number
}

export const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, name, spin, prefixClass, size, ...rest } = props

  return (
    <i
      {...rest}
      ref={ref}
      className={classnames(
        prefixClass ?? 'bee-icon',
        styles.icon,
        {
          [`bee-${name}`]: !!name,
          ['animate-spin']: spin,
        },
        className,
      )}
      style={{ fontSize: size ? `${size}px` : 'inherit' }}
    />
  )
})

Icon.displayName = 'Icon'
