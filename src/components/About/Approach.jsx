import React from 'react'

function Approach() {
  return (
    <div className='bg-gray-100 md:mb-[300px] mb-[400px]'>
        <div className='pt-[60px]'>
            <h1 className=' text-black md:text-5xl text-4xl font-black md:ml-20 ml-5'>Our Approach</h1>
            <hr className='w-11/12 border-t-1 mx-auto border-[#833556] mb-10 md:mt-12 mt-5' />
            
            <div className='md:flex gap-10 md:mx-16 mx-3'>
                <div className='md:w-[500px] '>
                <h1 className=' font-bold text-lg text-green-700'>Our Mission</h1>
                <p className='text-gray-600 mt-5'>
                Dini ya roho ya Mafuta pole ya Africa mission is to connect with God through Faith, connect with others through love, and connect others with God through His Word and to be the voice of Hope for the poor and vulnerable people in Kenya, Africa and the world    
                  </p>
                
                </div>

                <div className='md:w-[50%] text-gray-600 mt-7 md:mt-0'>
                <h1 className=' font-bold text-lg text-green-700'>Our Vision</h1>
                <p className='text-gray-600 mt-5'>
                Dini ya Roho mafuta Pole Ya Africa aspires to be the voice and the hand that encourages people to change their lives with hope, comfort and peace for the Glory of God. 
                   </p>
                
               
                </div>
            </div>
            </div>

            <div className='mt-28 h-[50vh] px-5'>
                <img src="/images/vision.jpg" alt="" className='object-cover object-center h-[90vh] w-full' />
            </div>
    </div>
  )
}

export default Approach