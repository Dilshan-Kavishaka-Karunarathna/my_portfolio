import React from 'react'


const navList = [
  {
    _id:1,
    data:'HOME',
    Link:'home',
  },
  {
    _id:2,
    data:'EDUCATION',
    Link:'education',
  },
  {
    _id:3,
    data:'SKILLS',
    Link:'skills',
  },
  {
    _id:4,
    data:'CETIFICATION',
    Link:'cetification',
  },
  {
    _id:5,
    data:'PROJECTS',
    Link:'projects',
  },
  {
    _id:6,
    data:'CONTACT',
    Link:'contacts',
  }

]

const Header = () => {
  return (
    <div className='fixed w-full flex justify-between' >
      <a href='#' className='text-3xl font-extrabold p-4 text-red-600 animate-bounce hidden md:flex'>DK_DEV</a>
      <nav className='text-white py-2 pr-4 hidden md:flex'>
        {navList.map((item)=>(
           <a href={`#${item.Link}`} key={item._id} className='ml-8  font-medium text-lg hover:text-red-500 border-b-2 border-transparent hover:border-red-500'>{item.data}</a>
        ))}
        

      
      </nav>
    </div>
  )
}

export default Header