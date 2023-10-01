import React from 'react'

function Stats() {
  return (
    <div>
        <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
        Our numbers that speak
      </h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
      We have numbers that push us to give in our best and make sure that we break our own records. We are happy to be growing and helping more day by day.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          className="flex flex-col rounded-lg border border-b-2 border-b-orange-200 border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last pt-2 text-xl font-bold text-gray-500">
            Children helped
          </dt>

          <dd className="text-4xl font-extrabold text-pink-900 md:text-6xl">
            1000+
          </dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-b-2 border-b-orange-200 border-gray-100 px-4 py-8 text-center"
        >
            
          <dt className="order-last pt-2 text-xl font-bold text-gray-500">
            Funds raised
          </dt>
         

          <dd className="text-4xl font-extrabold text-pink-900 md:text-6xl">$ 24m</dd>

          
        </div>
        

        <div
          className="flex flex-col rounded-lg border border-b-2 border-b-orange-200 border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last pt-2 text-xl font-bold text-gray-500">
            Members worldwode
          </dt>

          <dd className="text-4xl font-extrabold text-pink-900 md:text-6xl">86</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
    </div>
  )
}

export default Stats