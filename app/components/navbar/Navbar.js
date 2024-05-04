import React from 'react'
import NavbarNav from './NavbarNav'
import UserDropdown from './UserDropdown'
import classNames from 'classnames'

export default function Navbar({navPosition,navBg}) {
    const navbarClasses = classNames('py-4 w-full top-0 z-10',{
        'absolute' : navPosition === 'absolute',
        'bg-gradient-to-r from-[#31399F] to-[#451C89]' : navBg != 'transparent'
    })
  return (
        <nav className={navbarClasses}>
            <div className='container flex items-center justify-between mx-auto px-3'>
                <div className='flex gap-10'>
                    <div className='brand'>
                        <img src="./kco-logo.png" width={150} alt="" />
                    </div>
                    <NavbarNav/> 
                </div>
                <div className='flex items-center gap-4 md:gap-6'>
                    <button className='bg-gradient-to-r hover:bg-gradient-to-br from-[#451C89] to-[#31399F] flex items-center gap-2 px-4 py-3 rounded-lg border border-white'>
                        <img src="./document.svg" alt="" />
                        <span className='text-sm text-white'>Share Document</span>
                    </button>
                    <UserDropdown/>
                </div>
            </div>
        </nav>
  )
}
