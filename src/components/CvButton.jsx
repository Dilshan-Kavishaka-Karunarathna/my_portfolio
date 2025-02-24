import React from 'react'



const CvButton = () => {
  return (
    <div>
        <a
        href='/abc.pdf'
        download="abc.pdf"
        >
            <button  className='border-2 border-red-500 rounded-full  p-4 text-red-500 font-semibold hover:bg-red-500 hover:text-black hover:scale-110' >
                Download CV
            </button>
        </a>
    </div>
  )
}

export default CvButton