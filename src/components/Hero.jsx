import React from 'react'

function Hero() {
  return (
    <div className=' h-[100vh] flex bg-coverImage bg-cover bg-opacity-5'>

<div className='absolute h-[100vh] inset-0 bg-opacity-60 bg-black'></div>

        <div className='mt-44 ml-20 z-10'>
            
            <p className=' text-7xl text-white font-black mt-4 tracking-tight'>Teenage Pregnancy</p>
            <p className=' text-7xl text-white font-black tracking-wider'>Awareness Project</p>
            <h1 className='text-white/80 font-semibold text-lg mt-5'>"Help Us Help Them"</h1>

            <button className='bg-pink-500 px-10 py-3 mt-7 rounded-full'>
                <span className='text-white font-semibold text-sm'>READ MORE</span>
            </button>
        </div>
        
    </div>
  )
}

export default Hero