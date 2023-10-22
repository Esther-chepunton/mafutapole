import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Donate from './Donate';
import Drawer from './Drawer';
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {

  const [isDonateOpen, setDonateOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const openDonate = () =>{
        setDonateOpen(true)
    }

    const closeDonate = () => {
        setDonateOpen(false)
    }

    const closeMobileMenu = () => {
      setIsMenuOpen(false);
    };

  return (
    <div className=' bg-transparent absolute z-10'>
<header className="pt-2 z-10">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12 flex">
        <Link to={"/"}>
        <div className="  flex w-20">
          <img src="tepa-removebg-preview.png" alt="logo" className='' />
          <h1 className='pt-6 font-bold text-2xl text-pink-400 pl-1'>TePA</h1>
        </div>
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12 lg:ml-[550px]">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-base font-semibold">

            <Link to={'/'}>
            <li className="text-white transition hover:text-white/75">
              
                Home
              
            </li>
            </Link>

            <Link to={'/about'}>

            <li className='text-white transition w-[100px] hover:text-white/75'>
              
                What we do
            
            </li>
            </Link>

            <Link to={'/events'}>

            <li className="text-white transition  hover:text-white/75">
              
                Events
             
            </li>
            </Link>

            <Link to={'/blog'}>

            <li className="text-white transition  hover:text-white/75">
              
                Blog
             
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
          <div className="sm:flex sm:gap-4 ml-[135px] md:ml-0">
            <button
              className=" bg-pink-500  px-7 py-3.5 text-sm font-medium text-white shadow"
              onClick={openDonate}
            >
              DONATE
            </button>
          </div>

          <div className="block md:hidden bg-white rounded">
          {isMenuOpen ? (
              <HiX onClick={toggleMenu} className="text-2xl" />
            ) : (
              <HiMenu onClick={toggleMenu} className="text-2xl" />
            )}
           
          </div>

          {isMenuOpen && (
          <div className="md:hidden absolute top-11 right-0 w-full p-4 z-[900px] ">
            <ul className="bg-black px-3 py-2 gap-10  ">

<Link to={'/'} onClick={closeMobileMenu} >
<li className="text-white transition p-3 hover:text-white/75 hover:bg-pink-500">
  
    Home
  
</li>
</Link>

<Link to={'/about'} onClick={closeMobileMenu}>

<li className='text-white transition  p-3 hover:text-white/75 hover:bg-pink-500'>
  
    What we do

</li>
</Link>

<Link to={'/events'} onClick={closeMobileMenu}>

<li className="text-white transition p-3  hover:text-white/75 hover:bg-pink-500">
  
    Events
 
</li>
</Link>

<Link to={'/blog'} onClick={closeMobileMenu}>

<li className="text-white transition p-3  hover:text-white/75 hover:bg-pink-500">
  
    Blog
 
</li>
</Link>

<Link to={'/contacts'} onClick={closeMobileMenu}>

<li className="text-white transition p-3 hover:text-white/75 hover:bg-pink-500">
  
    Contact
  
</li>
</Link>


</ul>
            
          </div>
        )}


        </div>
      </div>
    </div>
  </div>
</header>

<Drawer isOpen={isDonateOpen} onClose = {closeDonate}>
  <Donate />
</Drawer>

    </div>
  )
}

export default Navbar