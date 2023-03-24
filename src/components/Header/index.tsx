import { Logo } from './Logo'
import { Theme } from './Theme'

export function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex items-center justify-between h-14 max-w-main m-auto">
        <Logo />
        <Theme />
      </div>
    </header>
  )
}
