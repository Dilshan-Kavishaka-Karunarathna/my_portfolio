import React from 'react'

const Certification = () => {
  return (
    <section id='cetification'className='w-full h-[650px]'>
        <div className='flex'> 
            <div className='w-1/3 pl-30 items-center justify-center pt-50 flex-col'>
                <h3 className='text-3xl font-semibold font-serif text-green-400'>Check out</h3>
                <h4 className='text-red-500 text-4xl mt-7 font-extrabold font-serif'>My Certificate</h4>
                <p className='text-white mt-7'>I have done various courses to <br/>increase my programing skills and I'm <br/>sharing few of them</p>


            </div >


            <div className='flex gap-20 text-center pt-54 pl-20'>
            <div>
                <img src='public/aaa.png' alt='chatgpt web' className='h-[180px] w-[250px] border-4 border-yellow-500 hover:scale-110 transition duration-300 rounded-xl'/>
                <p className='text-white mt-3'>Introduction to web <br/>Development with CHATGPT</p>
                <p className='text-white text-xl'><span className='text-yellow-300'>Simply</span><span className='text-blue-400'>learn</span></p>
                </div>
            <div className='gap-20'>
                <img src='public\bbb.png' alt='chatgpt web' className='h-[180px] w-[250px] border-4 border-yellow-500 hover:scale-110 transition duration-300 rounded-xl'/>
                <p className='text-white mt-3'>Introduction to DevOps </p>
                <p className='text-white text-xl'><span className='text-yellow-300'>Simply</span><span className='text-blue-400'>learn</span></p>
                    
             </div>
             <div>
                <img src='public/ccc.png' alt='chatgpt web' className='h-[180px] w-[250px] border-4 border-yellow-500 hover:scale-110 transition duration-300 rounded-xl'/>
                <p className='text-white mt-3'>JavaScript for Beginers</p>
                <p className='text-white text-xl'><span className='text-yellow-300'>Simply</span><span className='text-blue-400'>learn</span></p>
                    
            </div>


            </div>
        </div>

    </section>
    
  )
}

export default Certification