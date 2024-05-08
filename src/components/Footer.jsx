import React, {useState} from 'react'
import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoWhatsapp, BiLogoTiktok} from 'react-icons/bi'
import Drawer from './Drawer';
import Donate from './Donate';

function Footer() {

  const [isDonateOpen, setDonateOpen] = useState(false);

    const openDonate = () =>{
        setDonateOpen(true)
    }

    const closeDonate = () => {
        setDonateOpen(false)
    }

  return (
    <div className=' md:h-[90vh] bg-black'>
        <footer className=" lg:grid lg:grid-cols-5">
  <div className="relative block  lg:col-span-2 lg:h-full  md:ml-10 ml-4">
    <h1 className='md:mt-20 pt-10 sm:pt-0 font-bold text-2xl text-[#833556] opacity-80 uppercase '>Our Mission</h1>
    <p className='mt-5 text-white/70'>Through a holistic approach, we strive to create a supportive environment that enables young individuals and families to make informed choices, pursue meaningful careers, and thrive as responsible members of society. </p>

    <button className="mt-4 flex justify-center md:mt-8 " onClick={openDonate}>
            <p
              
              className="text-orange-100 font-bold rounded-full hover:text-pink-300 text-sm bg-[#833556] px-7 py-3 border-1 border-[#b56b8a]"
            >
              DONATE
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

          <p className='text-white text-base font-bold mt-6'>Nairobi, Kenya</p>

          <p
            className="block text-base  mt-2 text-white hover:opacity-75 sm:text-lg"
          >
            +254712027836
          </p>

          <p className='text-orange-200 underline text-base  mt-3'><a href='mailto:ceo@tepa.co.ke'>ceo@tepa.co.ke</a></p>
        </div>

        
        <ul className="mt-8 flex gap-6 text-2xl">
          <li>
            <a
              href="https://web.facebook.com/Teenage.PA?_rdc=1&_rdr"
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
              href="https://instagram.com/tepa.ke?igshid=MzRlODBiNWFlZA=="
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
              href="http://www.google.com/url?q=http%3A%2F%2Fwa.me%2F254712027836&sa=D&sntz=1&usg=AOvVaw1DuOoLXcFnEORAcNhe9VmI"
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
          &copy; 2023. Tenage Pregnancy Awareness Project. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
<Drawer isOpen={isDonateOpen} onClose = {closeDonate}>
  <Donate />
</Drawer>

    </div>
  )
}

export default Footer