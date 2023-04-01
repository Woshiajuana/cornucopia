import { Icon } from '@/components'
import { useMounted } from '@/hooks'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  const handleSwitchTheme = () => {
    console.log(1)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="sticky top-0 z-10 bg-white/60 bg-clip-padding backdrop-blur-xl">
      <div className="flex items-center justify-between h-14 max-w-main m-auto box-border px-4">
        <Link scroll={false} href="/" className="flex items-center text-lg">
          Ajuan Blog
        </Link>
        <button
          aria-label="Toggle Theme"
          className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
          onClick={handleSwitchTheme}
        >
          <Icon name={mounted ? resolvedTheme : 'light'} />
        </button>
      </div>
    </header>
  )
}
