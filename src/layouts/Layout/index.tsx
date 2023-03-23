import type { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
  className?: string
}

export function Layout(props: LayoutProps) {
  const { children, className } = props
  return (
    <>
      <main className={className}/>
    </>
  )
}
