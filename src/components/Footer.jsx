import React from 'react'
import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoWhatsapp, BiLogoTiktok} from 'react-icons/bi'

function Footer() {
  return (
    <div className=' h-[90vh] bg-black'>
        <footer className=" lg:grid lg:grid-cols-5">
  <div className="relative block  h-32 lg:col-span-2 lg:h-full  md:ml-10">
    <h1 className='mt-20 font-bold text-2xl text-[#833556] opacity-80 uppercase '>Our Mission</h1>
    <p className='mt-5 text-white/70'>To inform and equip teenagers with proper knowledge about early pregnancies, sexually transmitted diseases and general menstrual hygiene </p>

    <button className="mt-4 flex justify-center md:mt-8">
            <a
              href="#"
              className="text-orange-100 font-bold rounded-full hover:text-pink-300 text-sm bg-[#833556] px-7 py-3 border-1 border-[#b56b8a]"
            >
              DONATE
            </a>
          </button>

    
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ml-96">
      <div className=''>
        <p>
          <span className="text-2xl tracking-wide text-white">
            Contact
          </span>

          <h1 className='text-white text-base font-bold mt-6'>Nairobi, Kenya</h1>

          <p
            className="block text-base  mt-2 text-white hover:opacity-75 sm:text-lg"
          >
            0123456789
          </p>

          <h1 className='text-orange-200 underline text-base  mt-3'><a href='#'>tepa@gmail.com</a></h1>
        </p>

        
        <ul className="mt-8 flex gap-6 text-2xl">
          <li>
            <a
              href="/"
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
              <span className="sr-only">Instagram</span>

              <BiLogoInstagramAlt/>

             
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

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-orange-100/70 transition hover:opacity-75"
            >
              <span className="sr-only">TikTok</span>
              <BiLogoTiktok />

              
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
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer