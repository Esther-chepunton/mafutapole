import React, {useState} from 'react'
import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoWhatsapp, BiLogoTiktok} from 'react-icons/bi'
import Drawer from './Drawer';
import Donate from './Donate';

function Footer() {

 

  return (
    <div className=' md:h-[90vh] bg-black'>
        <footer className=" lg:grid lg:grid-cols-5">
  <div className="relative block  lg:col-span-2 lg:h-full  md:ml-10 ml-4">
    <h1 className='md:mt-20 pt-10 sm:pt-0 font-bold text-2xl text-green-600 opacity-80 uppercase '>Our Mission</h1>
    <p className='mt-5 text-white/70'>
    Dini ya roho ya Mafuta pole ya Africa mission is to connect with God through Faith, connect with others through love, and connect others with God through His Word and to be the voice of Hope for the poor and vulnerable people in Kenya, Africa and the world    
     </p>

    <button className="mt-4 flex justify-center md:mt-8 ">
            <p
              
              className="text-orange-100 font-bold rounded-full hover:text-pink-300 text-sm bg-green-500 px-7 py-3 border-1 border-[#b56b8a]"
            >
              SEE MORE
            </p>
          </button>

    
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:ml-96">
      <div className=''>
        <div>
          <span className="text-2xl tracking-wide text-white">
            Contact
          </span>

          <p className='text-white text-base font-bold mt-6'>Kapenguria, Kenya</p>

          <p
            className="block text-base  mt-2 text-white hover:opacity-75"
          >
            +254 718787950 
          </p>

          <p className='text-orange-200 underline text-base  mt-3'><a href='mailto:mafutapole@gmail.com '>mafutapole@gmail.com </a></p>
        </div>

        
        <ul className="mt-8 flex gap-6 text-2xl">
          <li>
            <a
              href=""
              rel="noreferrer"
              target="_blank"
              className="text-orange-100/70 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <BiLogoFacebook/>

              
            </a>
          </li>

          

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-orange-100/70 transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <BiLogoTwitter/>

              
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-orange-100/70 transition hover:opacity-75"
            >
              <span className="sr-only">Whatsapp</span>

              <BiLogoWhatsapp />

             
            </a>
          </li>

  
        </ul>

        
      </div>

    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer