import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import emailjs from '@emailjs/browser';
import contactImage from "../public/assets/contact.jpg"
import { toast } from 'react-toastify'

const Contact = () => {
const [mail,setMail] = useState({
  subject:"",
  to_name:"Sai Thiha Kyaw",
  from_name:"",
  number:"",
  message:"",
  from_email:"",
});



const handleChange = (e)=>{
  setMail((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const handleSubmit =async(e)=>{
e.preventDefault();
try{
const response =  await emailjs.send("service_4daweh9","template_paazj3i",mail,"WdsS3y9jOKvs7M0uk");
console.log(response);
if(mail.subject===""){
  toast.warning("Please fill Subject");
  return;
}
if(mail.from_name===""){
  toast.warning("Please fill Name");
  return;
}
if(mail.number===""){
  toast.warning("Please fill Number");
  return;
}
if(mail.message===""){
  toast.warning("Please fill Message");
  return;
}
if(mail.from_email===""){
  toast.warning("Please fill Email");
  return;
}
if(response.status===200){
setMail({
  subject:"",
  to_name:"Sai Thiha Kyaw",
  from_name:"",
  number:"",
  message:"",
  from_email:"",
});
toast.success("Email has sent successfully");
return;
}
}catch(err){
  console.log(err);
  toast.error(err);
}
}
  return (
    <div id="contact" className='w-full lg:h-screen p-4 lg:mt-0'>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    <p className='uppercase py-6 text-[#5657e5]'>Contact</p>
    <h2 className='tracking-wider'>Get In Touch</h2>
    <div className='grid md:grid-cols-5 gap-8'>
{/* left */}
<div className='col-span-3 mt-3  w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 md:col-span-2'>
<div className="p-4 h-full flex flex-col">
<Image src={contactImage} alt="/"  className='rounded-xl hover:scale-105 ease-in duration-300' />
            <div>
                <h2 className='py-2'>Sai Thiha</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
            </div>
            <p className='text-lg py-4'>Contact With me</p>
            <div className='flex justify-between py-4 w-full md:w-[70%]'>
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
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <AiOutlineMail />
   </div>
   <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
   <BsFillPersonLinesFill />
   </div>
   </div>
</div>
</div>

{/* Right */}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4'>
<div className='py-4'>
<form onSubmit={handleSubmit}>
<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='from_name'
                      onChange={handleChange}
                    />
                 </div>
                 <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Number</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='number'
                      onChange={handleChange}
                    />
                 </div>
</div>
<div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name="from_email"
                      onChange={handleChange}
                    />
</div>
<div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name="subject"
                      onChange={handleChange}
                    />
</div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      rows="10"
                      name='message'
                      onChange={handleChange}
                    />
                </div>
                <button className='w-full p-4 mt-4 uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white' type='submit'>
                 Send  message
                </button>
</form>
</div>

</div>
{/*  */}

</div>
<div className='w-full flex justify-center items-center py-12'>
    <Link href="/">
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-100'>
    <HiOutlineChevronDoubleUp />
    </div>
    </Link>
</div>
   
    </div>
    
    </div>
  )
}

export default Contact