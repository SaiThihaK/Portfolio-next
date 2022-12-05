import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';
import Navlogo from "../public/logo.svg"

const Navbar = () => {
const [nav,setNav] = useState(false);
const [shadow,setShadow] = useState(true);
const shadowHandler = ()=>{
    if(window.scrollY >= 90){
        setShadow(true)
    }else{
        setShadow(false);
    }
}
const handleNav = ()=>setNav(!nav);


useEffect(()=>{
    window.addEventListener("scroll",shadowHandler)
},[])

  return (
<div className={shadow ? 'fixed h-20 w-full z-[100] py-2 shadow-md shadow-gray-400':'fixed h-20 w-full z-[100] py-2'}>
  <div className="flex  justify-between items-center w-full h-full px-2 2xl:px-16">
    <Link href="/">
    <Image src={Navlogo} alt="logo" width={80} height={80} />
    </Link>

 <div>
    <ul className='hidden md:flex'>
        <Link href="/"> 
        <li className='ml-10 text-sm uppercase'>
            Home
        </li>
        </Link>
        <Link href="/#about"> 
        <li className='ml-10  text-sm uppercase'>
            About
        </li>
        </Link>
        <Link href="/#skills"> 
        <li className='ml-10  text-sm uppercase'>
            Skills
        </li>
        </Link>
        <Link href="/#projects"> 
        <li className='ml-10  text-sm uppercase'>
            Projects
        </li>
        </Link>
        <Link href="/#contact"> 
        <li className='ml-10  text-sm uppercase'>
         Contact
        </li>
        </Link>
    </ul>
    {/* Mobile View */}
    <div onClick={handleNav} className='md:hidden'>
        <AiOutlineMenu size={25} />
    </div>
 </div>
  </div>
  <div className={nav ? "md:hidden fixed top-0 left-0 bg-black/70 w-full h-screen" :""}>
    <div className={nav 
    ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-300'
    : 'fixed left-[-100%] top-0 p-3 ease-in-out duration-300'
}>
    <div className='flex justify-between'>
    <div>
    <Image src={Navlogo} alt="logo" width={40} height={40} />
    </div>
    <div 
    onClick={handleNav}
    className='rounded-full shadow-lg shadow-gray-400 p-3'>
        <AiOutlineClose />
    </div>
    
    </div>
    <div className='border-b border-gray-300 '>
    <p className='w-[85%] md:w-[90%] py-3'>Let's build your dream with me</p>
    </div>
   <div className='py-4 flex flex-col'>
   <ul className='uppercase'>
    <Link href="/">
    <li className='text-sm py-4'>
        Home
    </li>
    </Link>
    <Link href="/#about">
    <li className='text-sm py-4'>
        About
    </li>
    </Link>
    <Link href="/#skills">
    <li className='text-sm py-4'>
        Skill
    </li>
    </Link>
    <Link href="/#projects">
    <li className='text-sm py-4'>
        Project
    </li>
    </Link>
    <Link href="/contacts">
    <li className='text-sm py-4'>
        Contact
    </li>
    </Link>
   </ul>
   </div>
   <div className='uppercase pt-10 text-[#5651e5] tracking-widest'>
    <p>Let's Connect</p>
   </div>
   <div className='flex justify-between py-4 w-full md:w-[50%]'>
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <FaLinkedinIn />
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <FaGithub />
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <AiOutlineMail />
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <BsFillPersonLinesFill />
   </div>
   </div>
    </div>
  </div>
  </div>
  )
}

export default Navbar