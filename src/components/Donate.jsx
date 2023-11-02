

import React, { useState, useEffect } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import DonateButton from './Events/DonateButton';

function Donate() {
  const [copiedText, setCopiedText] = useState('');

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText('Copied!');
  };

  useEffect(() => {
    if (copiedText) {
      setTimeout(() => setCopiedText(''), 2000);
    }
  }, [copiedText]);

  return (
    <div>
      <div className='md:ml-5'>
        <h1 className='text-4xl font-bold text-pink-700 mt-5 uppercase'>Mpesa Donation</h1>
        <h2 className=' font-semibold'>"Help Us, Help Them"</h2>
      </div>

      


      <div className='sm:mt-6 mt-3 md:ml-5 sm:flex bg-gray-500 py-5 px-5'>
        <div className=''>
          <img src="/mpesalogo.avif" alt="" className='sm:h-20 h-12' loading='lazy' />
       
          <h1 className=' font-bold text-white sm:text-lg text-sm'>Account Name: </h1>
          <span className='font-semibold sm:text-base text-sm'>Teenage Pregnancy Awareness Project</span>
        </div>

        <div className='sm:ml-12 sm:mt-0 mt-3 '>


        <div className='w-40'>
        <label className='uppercase text-white font-medium sm:text-base text-sm'>Paybill number :</label>
        <p
          onClick={() => copyText('22222')}
          className='bg-gray-200 flex pl-10 pr-1 py-2'
        >
          <span>303030</span>
          
          <FaCopy
            style={{
              cursor: 'pointer',
              marginLeft: '40px',
            }}
            className='pt-[1px]'
          />
        </p>
        </div>

        <div className='mt-2 w-44'>
        <label className='uppercase text-white font-medium sm:text-base text-sm'>Account no :</label>
        <p
          onClick={() => copyText('239494848484')}
          className='bg-gray-200 flex pl-8 pr-1 py-2'
        >
          <span>2046214997</span>
          
          <FaCopy
            style={{
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
        </p>
        </div>
        </div>

        
      </div>
      <div className='sm:ml-5 ml-1'>
       
          <h1 className='mt-10 font-semibold text-xl text-[#833556] '>To donate through Mpesa follow these steps:</h1>
          <ol type='1' className='mt-2'>
            <li>1. Select Lipa na M-PESA</li>
            <li>2. Select Pay Bill</li>
            <li>3. Enter <span className='font-bold'>303030</span> (Business Number/Pay Bill number)</li>
            <li>4. Enter Account Number <span className='font-bold'>2046214997</span> (Copy above to avoid any errors)</li>
            <li>5. Enter Your Donation Amount</li>
            <li>6. Enter Your MPESA PIN</li>
            <li>7. Confirm Your Payment</li>
            <li>8. Wait For the MPESA SMS</li>
          </ol>
        </div>
      <p>{copiedText === 'Copied!' ? <FaCheck /> : null}</p>
    </div>
  );
}

export default Donate;
