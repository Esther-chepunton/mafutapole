import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className=' md:h-[100vh] h-[70vh] flex bg-coverImage bg-cover bg-opacity-5'>

<div className='absolute md:h-[100vh] h-[70vh]  md:mt-0 inset-0 bg-opacity-60 bg-black'></div>

        <div className='mt-44 md:ml-20 ml-5 z-0'>
            
            <p className=' md:text-7xl text-4xl text-white font-black mt-4 tracking-tight'>Teenage Pregnancy</p>
            <p className=' md:text-7xl text-4xl text-white font-black tracking-wider'>Awareness Project</p>
            <h1 className='text-white/80 font-semibold text-lg mt-5'>"Help Us Help Them"</h1>

            <Link to={"/about"}>

            <button className='bg-pink-500 px-10 py-3 mt-7 rounded-full'>
                <span className='text-white font-semibold text-sm'>READ MORE</span>
            </button>

            </Link>
        </div>
        
    </div>
  )
}

export default Hero