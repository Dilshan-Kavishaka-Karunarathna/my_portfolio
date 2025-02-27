import React from 'react'

const Card = ({title,des}) => {
  return (
    <div className='transition duration-300 w-1/2 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500  mt-10 text-black hover:scale-110 rounded-3xl shadow-2xl border-amber-300'>
   <div className='justify-center items-center flex p-4 font-bold font-serif text-3xl mt-6'>{title}</div> 
   <div className='mx-4 items-center justify-center text-xl mt-6 font-semibold'>{des}</div>
    </div>
  )
}

export default Card