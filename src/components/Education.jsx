import React from 'react'
import Header from './Header'
import Card from './card.jsx'

const Education = () => {
  return (
    <section id='education' className='text-white w-full h-[600px]  '>
      <div className='text-xl text-black'>abc</div>
       <div className='text-4xl text-red-500 font-extrabold  flex flex-col items-center font-serif'>
        EDUCATION
       </div>
       <div className='flex gap-10 mx-10' >
        
        <Card
        title='SCHOOL EDUCATION'
        des='I studied Engineering Technology at Central College Kuliyapitiya from 2017 to 2019, where
         I gained a strong foundation in engineering concepts, problem-solving, and hands-on innovation.
          This experience fueled my passion for technology 
        and equipped me with the skills to approach challenges with creativity and precision.'
        />
        <Card
        title='UNIVERSITY EDUCATION'
        des='Since 2021, I have been studying Information and Communication Technology at 
        Rajarata University of Sri Lanka, gaining a strong foundation in computing, networking,
         and software development. This journey has enhanced my problem-solving skills and fueled
          my passion for creating impactful tech solutions.'
        />
       
        
        
        
       </div>
        
    </section>
  )
}

export default Education