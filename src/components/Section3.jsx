import React from 'react'

function Section3() {
  return (
    <div>
        <section className='mt-5 mb-10'>
  <div className="max-w-screen-xl  py-8   sm:py-12 ">
    

    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 px-3">

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="/image2.jpg"
            alt=""
            className="h-[350px] w-full object-cover object-left transition duration-500 group-hover:scale-105 sm:h-[550px]"
          />

          
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="/image1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[550px]"
          />

          
        </a>
      </li>

      <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="/image3.jpg"
            alt=""
            className="h-[350px] w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-[550px]"
          />

          
        </a>
      </li>
    </ul>
  </div>
</section>
    </div>
  )
}

export default Section3