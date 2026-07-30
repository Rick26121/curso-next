import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../activeLink/ActiveLink'

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  console.log("creado navegador")

  return (
    <nav className='flex justify-between items-center bg-blue-800 bg-opacity-30 p-4 m-2 rounded-lg'>
      {/* Logo o nombre de la app */}
      <span className='text-white font-bold text-xl flex items-center gap-2'>
        <HomeIcon size={24} />
        Mi App
      </span>

      <div className='flex flex-1 justify-end gap-4'>
        {navItems.map((item) => (
          <ActiveLink key={item.path} path={item.path} text={item.text}/>
        ))}
      </div>
    </nav>
  )
}