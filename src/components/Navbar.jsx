import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' md:bg-transparent md:absolute z-10'>
<header className="pt-2">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12 flex">
        <div className="  flex w-20">
          <img src="tepa-removebg-preview.png" alt="logo" className='' />
          <h1 className='pt-6 font-bold text-2xl text-pink-400 pl-1'>TePA</h1>
        </div>
      </div>

      <div className="md:flex md:items-center md:gap-12 lg:ml-[650px]">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-base font-semibold">

            <Link to={'/'}>
            <li className="text-white transition hover:text-white/75">
              
                Home
              
            </li>
            </Link>

            <Link to={'/about'}>

            <li className='text-white transition hover:text-white/75'>
              
                About
            
            </li>
            </Link>

            <Link>

            <li className="text-white transition w-[100px] hover:text-white/75">
              
                What we do
             
            </li>
            </Link>

            <Link to={'/contacts'}>

            <li className="text-white transition hover:text-white/75">
              
                Contact
              
            </li>
            </Link>

            
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className=" bg-pink-500  px-7 py-3.5 text-sm font-medium text-white shadow"
              href="/"
            >
              DONATE
            </a>
          </div>

          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar