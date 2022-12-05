import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cryptoImg from "../public/assets/project/crypto.png"
import intelImg  from "../public/assets/project/intelTomb.png"
const projects = [
    {
        name:"Crypto Beast",
        img:cryptoImg,
        skill:"ReactJS,MUI,ChartJs,Axios",
        github:"https://github.com/SaiThihaK/Crypto_beast",
        url:"https://crypto-beast-miner.netlify.app/",
    },
    {
        name:"Intel Tomb",
        img:intelImg,
        skill:"ReactJs,MUI,Axios",
        github:"https://github.com/SaiThihaK/Tomb_of_Intel",
        url:"https://intel-tomb2.netlify.app/"
    }
]

const Projects = () => {
  return (
    <div className='h-screen w-full' id='projects'>
    <div className='h-full max-w-[1280px] p-6'>
    <div>
        <p className='uppercase text-[#5657e6] mx-auto mt-8'>Projects</p>
    </div>
    <h2 className='tracking-widest uppercase py-6'>
    What I have build
    </h2>
    <div className='grid md:grid-cols-2 gap-8'>
    {projects.map((pj,index)=>(
        <div className='h-auto relative flex items-center justify-center w-full
        rounded-lg p-4 shadow-lg shadow-gray-400 group
        hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]
        ' key={index}>
        <Image src={pj.img} alt="/" width="full" height="full" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
         <h3 className='text-white text-2xl  tracking-wider text-center'>
            {pj.name}
         </h3>
         <p className='pb-4 pt-2 text-white text-center'>
            {pj.skill}
         </p>
         <div className='grid grid-cols-2 gap-8'>
          <Link href={pj.github}>
          <p className='text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer w-[100px]'>Code</p>
          </Link>
          <Link href={pj.url}>
          <p className='text-center py-1 rounded-md bg-white text-gray-700 font-bold text-lg cursor-pointer w-[100px]'>Demo</p>
          </Link>
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

export default Projects