import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PhotoAbout from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen flex items-center py-16 p-2'>
        <div className='max-w-[1280px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='text-xl text-[#5651e5] py-2 tracking-widest'>About</p>
            <h2 className='py-4'>Who Am I</h2>
            <p className='py-2 text-gray-600'>
            My area of expertise is developing front-end UI applications for web browser  that link to APIs and other backend technologies.
I have a strong desire for learning new technologies and am aware that there are multiple ways to do a task.
Despite the fact that I am most skilled at creating front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and am able to pick up new tech stacks as required.
I think that using the best tool for the job, rather than sticking to one particular language, is what makes a great developer. 
            </p>
            <p className='py-2 text-gray-600'>
            Since 2021, I&apos;ve been studying programming.
I have first-hand experience managing and designing projects at the production level. 
            </p>
            <Link href="/#projects">
            <p
            className='text-gray-600 underline cursor-pointer'
            >Please check out my latest projects</p>
            </Link>
           </div>
           <div className=' cursor-pointer
           p-4
           w-full h-auto flex justify-center items-center rounded-xl
           hover:scale-105 ease-in duration-100
           shadow-lg shadow-gray-400
           mt-3
           '>
         <Image src={PhotoAbout} alt="/" className='rounded-lg'/>
           </div>
        </div>
    </div>
  )
}

export default About