import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/img/logo.svg'

export function Logo() {
  return (
    <Link href="/" className="flex items-center text-lg">
      <Image src={logo.src} width="32" height="32" alt="logo" />
      <span className="ml-2">Ajuan Blog</span>
    </Link>
  )
}
