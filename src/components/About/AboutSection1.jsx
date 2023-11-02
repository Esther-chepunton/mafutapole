import React from 'react'

function AboutSection1() {
  return (
    <div className='mb-20'>
        <div className='md:mt-[260px] mt-14 '>
            <h1 className=' text-black md:text-5xl text-4xl font-black md:ml-20 ml-5'>Who we are</h1>
            <hr className='w-11/12 border-t-1 mx-auto border-[#833556] mb-10 md:mt-12 mt-5' />
            
            <div className='md:flex gap-10 md:mx-10 mx-3'>
                <div className='md:w-[500px] '>
                <h1 className=' font-bold md:text-xl text-lg text-[#833556]'>We are building an engaged COMMUNITY where teenagers are mentored and teenage pregnancies reduced.</h1>
                
                </div>

                <div className='md:w-[50%] text-gray-600 mt-8 md:mt-0'>
                    <p>Established in August 2022, Teenage Pregnancy Awareness (TePA) is a Kenya-registered Community Based Organization (CBO) dedicated to combatting the prevalent issue of teenage pregnancies within Slums in Nairobi, students career empowerment, distribution of menstrual hygiene and educational products, parent and student empowerment and general community development.  </p>
<p className='mt-10'>TePA, which stands for Teenage Pregnancy Awareness Project, is steadfast in its commitment to fostering awareness and empowerment.</p>

                </div>
            </div>
            </div>

            <div className="max-w-screen-xl  py-8   sm:py-12 ">
    

    <ul className="grid gap-1  mt-8 sm:grid-cols-2 lg:grid-cols-3 px-3">

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="/image4.jpg"
            alt=""
            className="h-[350px] w-full object-cover  transition duration-500 group-hover:scale-105 sm:h-[550px]"
            loading='lazy'
          />

          
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="/image5.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[550px]"
            loading='lazy'
          />

          
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="/image7.jpg"
            alt=""
            className="h-[350px] w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-[550px]"
          />

          
        </a>
      </li>
    </ul>
  </div>

    </div>
  )
}

export default AboutSection1