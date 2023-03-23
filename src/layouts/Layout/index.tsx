import type { ReactNode } from 'react'
import { Header } from '@/components/Header'

export interface LayoutProps {
  children?: ReactNode
  className?: string
}

export function Layout(props: LayoutProps) {
  const { children, className } = props

  return (
    <>
      <Header />
      {children}
      {/*<main className={className}>{children}</main>*/}
    </>
  )
}
