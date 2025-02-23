import React from 'react'

const Header = () => {
  return (
    <div className='fixed flex justify-between w-full' >
      <a href='#' className='text-3xl font-extrabold p-4 text-red-600'>DK_DEV</a>
      <nav className='flex justify-between gap-10 p-4 text-white'>
        <a href='#'>HOME</a>
        <a href='#'>ABOUT</a>
        <a href='#'>EDUCATION</a>
        <a href='#'>CETIFICATION</a>
        <a href='#'>PROJECTS</a>
        <a href='#'>CONTACT</a>
      
      </nav>
    </div>
  )
}

export default Header