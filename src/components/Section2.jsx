import React from 'react'
import { Link } from 'react-router-dom'

function Section2() {
  return (
    <div className='md:h-[220vh] '>
        <div className='sm:mt-48 mt-28'>
            <h1 className=' text-black md:text-6xl text-4xl font-black md:ml-20 ml-4'>What we do</h1>
            <hr className='w-11/12 border-t-1 mx-auto border-gray-300 my-10' />
            
            <div className='md:ml-[600px] ml-2'>
                <h2 className=' font-bold md:text-xl text-lg'>
                Dini Ya Roho Mafuta Pole Ya Africa is religious organization and a church which is legally registered in Kenya and  Uganda and  whose vision is to spires to be the voice and the hand that encourages people to change their lives with hope, comfort and peace for the Glory of God and whose mission statement is to connect with God through Faith, connect with others through love, and connect others with God through His Word and to be the voice of Hope for the poor and vulnerable people in Kenya, Africa and the world. Some of our activities are :   
                  </h2>
                <Link to={"/work"} aria-label="Learn More About TePA">
                <button className='mt-5'>
                    <span className='mt-5 text-sm text-green-800 font-bold'>READ MORE ABOUT OUR WORK</span>
                </button>
                </Link>
            </div>

            <div>
              
            <section>
  <div className="max-w-screen-xl py-8  sm:py-12 ">
    

    <ul className="grid mt-10 sm:grid-cols-2 lg:grid-cols-4 text-white">
      <li className='block overflow-hidden group bg-green-500 opacity-70 sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Outreach discipleship and church planting  </h1>
            <p className=' text-lg mt-7'>

              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-green-600 opacity-80 sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Training and capacity Building  </h1>
            <p className=' text-lg mt-7'>

              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-green-700 opacity-90 sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Children and youth ministry  </h1>
            <p className=' text-lg mt-7'>
              
              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-green-800  sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Governance and organizational development  </h1>
            <p className=' text-lg mt-7'>

              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      
    </ul>
  </div>

  <div className="max-w-screen-xl py-8  sm:py-5  ">
    

    <ul className="grid  sm:grid-cols-2 lg:grid-cols-4 text-white">
      <li className='block overflow-hidden group bg-green-500 opacity-70 sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Social-Economic Development   </h1>
            <p className=' text-lg mt-7'>

              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-green-600 opacity-80 sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Infrastructure Development    </h1>
            <p className=' text-lg mt-7'>

              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-green-700 opacity-90 sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Documentation and Literature development   </h1>
            <p className=' text-lg mt-7'>
              
              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      <li className='block overflow-hidden group bg-green-800  sm:h-[350px] h-[350px]'>
        <div className='ml-10 pr-5' >

            <h1 className='font-bold text-4xl  pt-14'>Supplementary Income streams    </h1>
            <p className=' text-lg mt-7'>

              </p>
            <hr className='w-12 border-t-[6px] mt-14 border-white' />

        </div>
      </li>

      
    </ul>
  </div>
</section>
            </div>
        </div>
    </div>
  )
}

export default Section2