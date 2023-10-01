import React from 'react'

function Approach() {
  return (
    <div className='bg-gray-100 mb-[300px]'>
        <div className='pt-[60px]'>
            <h1 className=' text-black text-5xl font-black ml-20'>Our Approach</h1>
            <hr className='w-11/12 border-t-1 mx-auto border-[#833556] mb-10 mt-12' />
            
            <div className='flex gap-10 mx-16'>
                <div className='w-[500px] '>
                <h1 className=' font-bold text-lg text-[#833556]'>Our Mission</h1>
                <p className='text-gray-600 mt-5'>Through a holistic approach, we strive to create a supportive environment that enables young individuals and families to make informed choices, pursue meaningful careers, and thrive as responsible members of society.</p>
                
                </div>

                <div className='w-[50%] text-gray-600'>
                <h1 className=' font-bold text-lg text-[#833556]'>Our Vision</h1>
                <p className='text-gray-600 mt-5'>Our vision is to create a world where every individual, regardless of their background, has the opportunity to thrive and contribute to vibrant, empowered communities. We envision a society where teenage pregnancies are rare, career paths are illuminated, menstrual hygiene is a given right, education is a stepping stone to success, families are united and strong, and entrepreneurship is a driving force for sustainable development.  </p>
                
               
                </div>
            </div>
            </div>

            <div className='mt-28 h-[50vh] px-5'>
                <img src="/image8.jpg" alt="" className='object-cover object-center h-[90vh] w-full' />
            </div>
    </div>
  )
}

export default Approach