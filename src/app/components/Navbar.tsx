"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    'title': 'About',
    'path': '#about'
  },
  {
    'title': 'Projects',
    'path': '#projects'
  },
  {
    'title': 'Contact',
    'path': '#contact'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-6 px-8'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
          Al
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            !isOpen ? (
              <button onClick={() => setIsOpen(true)} className='flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button onClick={() => setIsOpen(false)} className='flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5' />
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((navLink, index) => (
                <li key={index} className='inline-block md:ml-4'>
                  <NavLink href={navLink.path} title={navLink.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar