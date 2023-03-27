import { Icon } from '@/components'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/60 bg-clip-padding backdrop-blur-xl">
      <div className="flex items-center justify-between h-14 max-w-main m-auto box-border px-4">
        <Link href="/" className="flex items-center text-lg">
          Ajuan Blog
        </Link>
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
          <Icon name="light" />
        </button>
      </div>
    </header>
  )
}
