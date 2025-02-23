import React from 'react'

const navList = [
  {
    _id:1,
    data:'HOME'
  },
  {
    _id:2,
    data:'EDUCATION'
  },
  {
    _id:3,
    data:'SKILLS'
  },
  {
    _id:4,
    data:'CETIFICATION'
  },
  {
    _id:5,
    data:'PROJECTS'
  },
  {
    _id:6,
    data:'CONTACT'
  }

]

const Header = () => {
  return (
    <div className='fixed flex justify-between w-full' >
      <a href='#' className='text-3xl font-extrabold p-4 text-red-600 animate-bounce'>DK_DEV</a>
      <nav className='text-white py-2 pr-4'>
        {navList.map((item)=>(
           <a href='#' key={item._id} className='ml-8  font-medium text-lg hover:text-red-500 border-b-2 border-transparent hover:border-red-500'>{item.data}</a>
        ))}
        

      
      </nav>
    </div>
  )
}

export default Header