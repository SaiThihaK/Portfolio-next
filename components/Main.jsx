import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
      <div>
        <p className='uppercase text-sm tracking-widest text-gray-700'>
          LET&#39;S BUILD SOMETHING TOGETHER
        </p>
        <h1 className='py-4 text-gray-700'>
          Hi, I&#39;m <span className='text-[#5651e5]'>Sai</span>
        </h1>
        <h1 className='py-2 text-gray-700'>
          I am Frontend Engineer
        </h1>
        <p className='text-gray-600 sm:max-w-[70%] mx-auto'>
        I’m focused on building responsive front-end web applications
            integrating back-end technologies.
        </p>
       </div>
       <div className='flex justify-between py-4 w-full max-w-[330px]'>
       <Link href="https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225/">
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <FaLinkedinIn />
   </div>
    </Link>
    <Link href="https://github.com/SaiThihaK">
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <FaGithub />
   </div>
    </Link>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-110 ease-in duration-100'>
   <AiOutlineMail />
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-110 ease-in duration-100'>
   <BsFillPersonLinesFill />
   </div>
   </div>
        </div>
        </div>
  ) 
}

export default Main