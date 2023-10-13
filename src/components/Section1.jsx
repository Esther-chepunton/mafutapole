import React from 'react'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <div className='md:h-[120vh] h-[90vh] bg-[#833556]'>

        <section>
  <div className="mx-auto max-w-screen-2xl px-1 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap- md:grid-cols-2">
      <div className=" p-3 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="text-4xl font-bold text-white md:text-6xl mt-">
            Our Impact
          </h2>

          <p className=" text-white/90 font-black md:text-2xl text-lg sm:mt-8 mt-2 sm:block">
          We have made a significant difference in the lives of more than 1000 girls, 350 boys, and 200 parents through our direct interventions.
          </p>
          <p className=" text-white/60 sm:mt-10 mt-2 md:text-base text-sm font-medium sm:block">
          Through a collaborative and participatory approach, we are actively working to reduce teenage pregnancies, foster entrepreneurship, ensure access to menstrual hygiene products, and strengthen family bonds. Our efforts aim not just to reach individuals but to create lasting positive changes in their lives, building a stronger and more empowered community for everyone involved.
          </p>

          <div className="mt-12 ">
            <Link to={"/events"}>
            <button
            
              className="text-[#833556] font-semibold hover:text-pink-300 bg-white px-10 py-4 border-1 border-[#b56b8a]"
            >
              READ MORE
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" mt-16">
      
        <img
          alt="Student"
          src="/section1.jpg"
          className=" w-[900px] object-cover sm:h-56 md:h-[100vh] bg-black bg-opacity-90"
        />


        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section1