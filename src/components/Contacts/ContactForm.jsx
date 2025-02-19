import React, {useRef} from 'react'
import VolunteerCall from '../Volunteering'
import emailjs from '@emailjs/browser';

function ContactForm() {

  const form = useRef();

  /*const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e6jozwt', 'template_0eas49o', form.current, 'd7pYOb-Palj2HZL5x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }; */


  return (

    

  <section className="bg-gray-100 md:pt-40">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <h1 className="max-w-xl text-5xl font-black">
         Get in touch
        </h1>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-green-700">
          (+254) 718787950  <span className='text-base text-black'> - Secretary General </span>
          </h1>

          <address className="mt-2 not-italic">
          P.O.Box 594-30600 <br/>Kapenguria, Kenya  
          </address>

          <h1 className=' underline text-base  mt-3'><a href='mailto:mafutapole@gmail.com '>mafutapole@gmail.com </a></h1>
        </div>
      </div>


      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

        <h1 className='mb-8 font-bold text-2xl text-green-700'>Message Us</h1>
        
        <form  className="space-y-6">
          

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="fname">Name</label>
              <input
                className="w-full rounded-lg bg-gray-100 border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="fname"
                name="user_name"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">Last Name</label>
              <input
                className="w-full rounded-lg bg-gray-100 border-gray-200 p-3 text-sm"
                placeholder="Email Address"
                type="email"
                id="email"
                name="user_email"
              />
            </div>
          </div>

          


          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg bg-gray-100 border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-green-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
      
    </div>
</section>

    /*<div className='mt-52'>
         <div className='flex justify-center align-middle w-full gap-10 '>
            <div className='w-500px bg-blue-500 ml-10 '>
                <h1 className='text-5xl font-black' >Get in touch</h1>
            </div>
      <div className="text-gray-700 body-font ml-60 relative w-[50%] bg-red-500">
        <div className="container px-5 pb-24">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">example@email.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>*/

  
  )
}

export default ContactForm