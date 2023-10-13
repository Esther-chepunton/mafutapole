import React, {useState} from 'react'
import Drawer from './Drawer';
import Donate from './Donate';

function Section4() {

  const [isDonateOpen, setDonateOpen] = useState(false);

    const openDonate = () =>{
        setDonateOpen(true)
    }

    const closeDonate = () => {
        setDonateOpen(false)
    }
  return (
    <div className='md:h-[90vh] bg-[#833556] pb-20'>
        <section>
            <h1 className='uppercase text-white tracking-wider text-center pt-28 font-bold'>Help us, Help Them</h1>
            <p className='text-white text-center md:text-6xl text-3xl pt-8 font-bold'>Support us and change the course of a child's life today!</p>
            <div className="mt-4 flex justify-center md:mt-16">
            <button
              
              className="text-[#833556] font-semibold hover:text-pink-300 text-sm bg-white px-9 py-4 border-1 border-[#b56b8a]"
              onClick={openDonate}
            >
              DONATE
            </button>
          </div>
        </section>

        <Drawer isOpen={isDonateOpen} onClose = {closeDonate}>
  <Donate />
</Drawer>

    </div>
  )
}

export default Section4