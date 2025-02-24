import { FaLinkedin,FaGithub,FaInstagram,FaFacebook } from "react-icons/fa";

import React from 'react'

const Icons = [
  {
    href:'https://www.linkedin.com/in/dilshan-kavishka-npmrun/',
    components:<FaLinkedin/>
  },
  {
    href:'https://github.com/Dilshan-Kavishaka-Karunarathna',
    components:<FaGithub/>
  },
  {
    href:'https://www.instagram.com/dilshankavishka.50/',
    components:<FaInstagram/>
  },
  {
    href:'https://web.facebook.com/profile.php?id=100030895507852',
    components:<FaFacebook/>
  }
]

const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6">
      {Icons.map((icon, index)=>(
        <a href={icon.href} className="w-10 h-10 flex items-center justify-center border-2 border-red-500 rounded-full hover:text-red-500">{icon.components}</a>
      ))}
    </div>
  )
}

export default SocialIcons