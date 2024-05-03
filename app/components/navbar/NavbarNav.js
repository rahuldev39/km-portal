'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function NavbarNav() {
  const pathname = usePathname()
  return (
    <ul className='sm:flex items-center gap-6 hidden'>
        <li>
            <Link href={'/'} className={`${pathname === "/" ? "text-white" : "text-white/60"} font-medium  hover:text-white`}>Home</Link>
        </li>
        <li>
            <Link href={'/help'} className={`${pathname === "/help" ? "text-white" : "text-white/60"} font-medium  hover:text-white`}>Help</Link>
        </li>
    </ul>
  )
}
