import React from 'react'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <div className='md:h-[120vh] h-[108vh] bg-green-600'>

        <section>
  <div className="mx-auto max-w-screen-2xl px-1 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap- md:grid-cols-2">
      <div className=" p-3 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="text-4xl font-bold text-white md:text-4xl">
            Historical Background
          </h2>

          <p className=" text-white/90 font-medium md:text-base text-sm sm:mt-8 mt-2 sm:block">
          Dini ya Roho mafuta pole ya Africa, (DRMPA) began at around 1940 by one apostle Lucas pketch at keringet, village, west pokot county. Lucas pkech was   a catholic ordained catechist and Kabete College trained black smith.  He made jingles at keringet. In a supernatural way, Lucas used to receive visions and inspirations from the Holy Spirit of God concerning the plight of his people. During such moments; he would go for silent prayers and Gods inspirations at Psoch pogh, the current Tartar falls.  In one of the days while in deep prayer and meditation, the Holy Spirit put into his mind five songs and some of which are listed below  
          </p>
          <p className=" text-white/60 sm:mt-3 mt-2 md:text-base text-sm font-medium sm:block">
          <ul>
            <li>1.	Koroki kor kainani, nyu sopoi Pich ompo koros x 3  </li>
            <li>2.	Kinam sopon, kinam chichi tuw, Kura gorokinte cheopa, Kinam chirerio, Kinam owesyo, “chomyogh, “mokosio, ‘  perur 
</li>
          </ul>
          </p>

          <div className="mt-12 ">
            <Link to={"/history"} aria-label="Learn More About Our History">
            <button
            
              className="text-green-500 font-semibold hover:text-green-900 bg-white px-10 py-4 border-1 border-[#b56b8a]"
            >
              Our History
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" mt-16 md:mt-28">
      
      <img alt="Student" src="images/bg1.jpg" class="w-full h-auto object-cover max-w-full bg-black bg-opacity-90" loading="lazy"/>


        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section1