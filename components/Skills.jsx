import React from 'react'
import html from "../public/assets/skill/html.png"
import css from "../public/assets/skill/css.png"
import firebase from "../public/assets/skill/firebase.png"
import github from "../public/assets/skill/github1.png"
import javascript from "../public/assets/skill/javascript.png"
import mongo from "../public/assets/skill/mongo.png"
import nextjs from "../public/assets/skill/nextjs.png"
import react from "../public/assets/skill/react.png"
import node from "../public/assets/skill/node.png"
import Image from 'next/image'
const Skills = () => {
const skillset = [
{img:html,name:"HTML"},
{img:css,name:"CSS"},
{img:javascript,name:"JavaScript"},
{img:firebase,name:"Firebase"},
{img:github,name:"Github"},
{img:mongo,name:"Mongo"},
{img:nextjs,name:"NextJs"},
{img:react,name:"React"},
{img:node,name:"Node"},
];
  return (
    <div className='w-full h-screen'>
    <div className='max-w-[1280px] h-full w-full p-6 flex flex-col justify-center '>
    <p className='text-lg text-[#5651e5] tracking-widest'>SKILLS</p>
    <h2 className='py-2'>What I Can Do</h2>
    <div className='w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-8  py-4'>
    {
        skillset.map((sk,index)=>(
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' key={index}>
            <div className='grid grid-cols-2 gap-4 justify-center items-center' >
            <div className='m-auto'>
            <Image src={sk.img} width="64px" height="64px" alt='/' />
            </div>
            
            
            <div className='flex flex-col items-center justify-center'>
            <h3>{sk.name}</h3>
            </div>
            </div>
            </div>
           
  
        ))
    }
    </div>
    </div>
    </div>
  )
}

export default Skills