import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/60 dark:bg-black/60 bg-clip-padding backdrop-blur-xl">
      <div className="flex items-center justify-between h-14 max-w-main m-auto box-border px-4">
        <Link scroll={false} href="/" className="flex items-center text-lg">
          Ajuan Blog
        </Link>
      </div>
    </header>
  )
}
