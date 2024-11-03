import React, {useState} from 'react'

import { Link } from 'react-router-dom';

function Section4() {

  
  return (
    <div className='md:h-[90vh] bg-green-800 pb-20'>
        <section>
            <h1 className='uppercase text-white tracking-wider text-center pt-28 font-bold'>Our Vision</h1>
            <h2 className='text-gray-300 text-center text-2xl pt-8 '>
            Dini ya Roho mafuta Pole Ya Africa aspires to be the voice and the hand that encourages people to change their lives with hope, comfort and peace for the Glory of God.
              </h2>
            <div className="mt-4 flex justify-center md:mt-16">
              <Link to={'/about'}>
            <button
              
              className="text-green-800 font-semibold hover:text-pink-300 text-sm bg-white px-9 py-4 border-1 border-[#b56b8a]"
              
            >
              About Us
            </button>
            </Link>
          </div>
        </section>

     

    </div>
  )
}

export default Section4