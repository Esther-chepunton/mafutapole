import React from 'react';

const Supplementary = () => {
  return (
    <div className=" max-w-5xl mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-6">Supplementary Income streams  </h1>

      <div className="flex items-center justify-center">
        <img src="/images/supplementary.jpg" alt="" className='w-[700px]' />
      </div>

      <h2 className="text-xl font-semibold text-green-600 mb-4 mt-20">Strategic Objective</h2>
      <p className="text-gray-700 mb-6">
        To ensure the church is financially sustainable and has the capacity to uninterruptedly finance all its operations through investment in reliable business ventures.
      </p>
      
      <h2 className="text-xl font-semibold text-green-600 mb-4">Investment Opportunities</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Annual fundraising on 3rd Nov</li>
        <li>Establish a petrol station at Chepareria, Tamugh, or Makutano</li>
        <li>Develop a large hardware store in Makutano</li>
        <li>Set up a music recording studio at Keringet</li>
        <li>Launch a radio station in Amudat</li>
        <li>Implement a goats multiplication center at Kaptulwo-Katikomor</li>
        <li>Establish a Vocational Training Center (VTC) at Lokna Nakwijit</li>
        <li>Start a tailoring business in Jerusalem</li>
        <li>Conduct a beehive development workshop at Chepareria</li>
        <li>Set up a honey processing and packaging industry at Sakale</li>
        <li>Engage in crop and livestock production in every Zion and Boma</li>
        <li>Develop a private school at Keringet</li>
        <li>Build rental houses at Chepareria and Makutano</li>
      </ul>
    </div>
  );
};

export default Supplementary;
