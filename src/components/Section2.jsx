import React from 'react'
import { Link } from 'react-router-dom'

function Section2() {
  return (
    <div className='md:h-[140vh] '>
        <div className='sm:mt-48 mt-28'>
            <h1 className=' text-black md:text-6xl text-4xl font-black md:ml-20 ml-4'>What we do</h1>
            <hr className='w-11/12 border-t-1 mx-auto border-gray-300 my-10' />
            
            <div className='md:ml-[600px] ml-2'>
                <h2 className=' font-bold md:text-2xl text-lg'>At TePA, we are more than just an organization; we are architects of empowerment, architects of change. Through our dedicated initiatives, we shape a future where every individual, regardless of their background, not only dreams but achieves, thrives, and contributes meaningfully to vibrant, empowered communities. </h2>
                <Link to={"/about"}>
                <button className='mt-5'>
                    <span className='mt-5 text-sm text-[#833556] font-bold'>READ MORE</span>
                </button>
                </Link>
            </div>

            <div>
            <section>
  <div className="max-w-screen-xl py-8  sm:py-12 ">
    

    <ul className="grid mt-10 sm:grid-cols-2 lg:grid-cols-4 text-white">
      <li className='block overflow-hidden group bg-[#833556] opacity-70 sm:h-[450px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>We Train</h1>
            <p className=' text-lg mt-7'>Our training modules are meticulously designed to nurture talents, cultivate confidence, and foster a culture of continuous learning.</p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-[#833556] opacity-80 sm:h-[450px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>We Engage</h1>
            <p className=' text-lg mt-7'>Building communities starts with meaningful connections. We foster engagement through interactive workshops, seminars, and community events.</p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-[#833556] opacity-90 sm:h-[450px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>We Upskill</h1>
            <p className=' text-lg mt-7'>Our upskilling initiatives are tailored to equip individuals with the latest industry-relevant knowledge and expertise. </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-[#833556]  sm:h-[450px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>We Mentor</h1>
            <p className=' text-lg mt-7'>Our mentorship programs connect experienced mentors with aspiring individuals, providing personalized guidance, support, and insights.</p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      
    </ul>
  </div>
</section>
            </div>
        </div>
    </div>
  )
}

export default Section2