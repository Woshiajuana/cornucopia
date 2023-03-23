import type { ReactNode } from 'react'

interface NoopProps {
  children?: ReactNode
}

export function Noop(props: NoopProps) {
  const { children } = props
  return <>{children}</>
}
