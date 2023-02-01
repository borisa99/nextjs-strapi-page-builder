import Link from 'next/link'

import IconCart from '@/components/icons/IconCart'
import IconLogo from '@/components/icons/IconLogo'
import IconSearch from '@/components/icons/IconSearch'

export default function Navbar() {
  return (
    <header className="mb-9 w-full border-b border-white-7 bg-gray-900">
      <div className="layout-container flex h-20 w-full items-center justify-between">
        <nav className="flex">
          <Link href="/" className="mr-14">
            <IconLogo />
          </Link>
          <div className="flex items-center gap-9 text-md text-gray-200">
            <Link href="/courses">Courses</Link>
            <Link href="/assets">Assets</Link>
            <Link href="/community">Community</Link>
            <Link href="/help">Help</Link>
          </div>
        </nav>
        <div className="flex items-center justify-center gap-x-3">
          <IconSearch />
          <IconCart />
        </div>
      </div>
    </header>
  )
}
