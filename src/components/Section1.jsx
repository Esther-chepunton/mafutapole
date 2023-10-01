import React from 'react'

function Section1() {
  return (
    <div className='h-[120vh] bg-[#833556]'>

        <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap- md:grid-cols-2">
      <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-white md:text-6xl mt-">
            Our Impact
          </h2>

          <p className="hidden text-white/90 font-black text-2xl sm:mt-8 sm:block">
          We’ve worked on improving the lives of over 25,000 young people through direct practice
          </p>
          <p className="hidden text-white/60 sm:mt-10 font-medium sm:block">
          Young people from different backgrounds have a huge impact on us and all our activities. They highlight those parts of the society that are broken, so we can help them in all possible ways to regain hope and flourish in life.
          </p>

          <div className="mt-4 md:mt-12 ">
            <a
              href="#"
              className="text-[#833556] font-semibold hover:text-pink-300 bg-white px-10 py-4 border-1 border-[#b56b8a]"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-16">
      
        <img
          alt="Student"
          src="/section1.jpg"
          className="h-40 w-[900px] object-cover sm:h-56 md:h-[100vh] bg-black bg-opacity-90"
        />


        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section1