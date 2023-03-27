import type { ReactNode } from 'react'
import { Header, Sidebar } from '@/components'

export interface LayoutProps {
  children?: ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <Header />
      <main className="flex mx-auto max-w-[960px] items-start">
        <Sidebar />
        {children}
      </main>
    </>
  )
}
