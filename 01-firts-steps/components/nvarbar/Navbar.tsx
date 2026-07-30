import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  console.log("creado navegador")
  return (
    <nav className='flex justify-between items-center bg-blue-800 bg-opacity-30 p-4 m-2 rounded-lg'>
      {/* Logo o nombre de la app */}
      <span className='text-white font-bold text-xl'>
        Mi App
      </span>

      {/* Enlaces de navegación */}
      <div className='flex gap-6 text-white'>
        <Link href="/" className='hover:text-blue-200 transition-colors'>
          Home
        </Link>
        <Link href="/about" className='hover:text-blue-200 transition-colors'>
          About
        </Link>
        <Link href="/pricing" className='hover:text-blue-200 transition-colors'>
          Pricing
        </Link>
        <Link href="/contact" className='hover:text-blue-200 transition-colors'>
          Contact
        </Link>
      </div>
    </nav>
  )
}