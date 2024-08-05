'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <nav className='fixed z-[10] top-0 bg-gray-900 w-full'>
      <div className='px-12 mx-auto text-white text-lg'>
        <div className='flex items-center justify-between h-16'>
          <div className="flex items-center">
            <div className="flex-shrink-0 font-bold">
              <a href="/">Portfolio</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 text-base font-bold">
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg py-2 px-3'>Home</a>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg py-2 px-3'>Education</a>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg py-2 px-3'>About</a>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg py-2 px-3'>Contact</a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleNav}>
              {isOpen ? (
                <X />
              ) : <Menu />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-10 pb-8 space-y-1 md:px-3">
          <a href="/" className='bg-gray-800 text-white block hover:bg-white hover:text-black rounded-lg py-2 px-6'>Home</a>
          <a href="/" className='bg-gray-800 text-white block hover:bg-white hover:text-black rounded-lg py-2 px-6'>About</a>
          <a href="/" className='bg-gray-800 text-white block hover:bg-white hover:text-black rounded-lg py-2 px-6'>Education</a>
          <a href="/" className='bg-gray-800 text-white block hover:bg-white hover:text-black rounded-lg py-2 px-6'>Contact</a>
        </div>
      )}
    </nav>
  )
}