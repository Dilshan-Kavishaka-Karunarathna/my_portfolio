import React from 'react'
import homeImage from '../assets/profile.png'
import { TypeAnimation } from 'react-type-animation'
import SocialIcons from './SocialIcons'
import CvButton from './CvButton'

const Home = () => {
  return (
    <section id='home' className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
        <div className='md:w-1/2 flex justify-center'>
             <img src={homeImage} alt ='DK_DEV' className='rounded-full w-50 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300 '></img>
        </div>
        <div className='text-white md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
             <h1 className='text-4xl font-bold sm:text-7xl mb-4' >Hi, It's <span className='text-red-600 font-bold'>DILSHAN</span></h1>
             <h2 className='text-2xl sm:text-3xl font-bold mb-4 mt-0'>I'm a <span className='text-red-600'>
                <TypeAnimation
                   sequence={
                    [
                        "Frontend Developer",1000,
                        "Full Stack Developer",1000,
                        "Software Engineer",1000,
                    
                    ]
                   }
                   speed={50}
                   style={{fontSize:"1re"}}
                   repeat={Infinity}
                />
                </span>
                </h2>
             <p className='mr-1.5 text-sm sm:text-lg mb-6'>
             I am a dedicated undergraduate student at the Faculty of Technology,
             Rajarata University of Sri Lanka, with a strong foundation in programming,
             algorithms, and software engineering principles. Specializing in full-stack 
             web development, I have hands-on experience in building dynamic web applications
             and interactive user interfaces. I am proficient in technologies such as HTML5, 
             CSS, JavaScript, React, MongoDB, Firebase and I am skilled in managing projects 
             and client relationships effectively.
             </p>
             <SocialIcons/>
             <CvButton/>
        </div>
    </section>
  )
}

export default Home