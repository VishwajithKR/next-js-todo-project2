import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-700 px-8 py-3'>
        <Link className='text-white font-bold' href={'/'}>VJ Coding</Link>
        <Link className='bg-white p-2' href={'/addTopic'}>Add-Task</Link>
    </nav>
  )
}
