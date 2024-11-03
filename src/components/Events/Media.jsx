import React from 'react';

const Media = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20">
      <h1 className="text-2xl font-semibold  mb-6">Media and Advocacy  </h1>

      <div className="flex items-center justify-center">
        <img src="/images/advocacy.jpg" alt="" className='w-[700px]' />
      </div>

      <h2 className="text-xl font-semibold text-green-600 mb-4 mt-20">Strategic Objective</h2>
      <p className="text-gray-700 mb-6">
        To engage the media as a tool for outreach, information, education, entertainment, and holistic transformation.
      </p>
      
      <h2 className="text-xl font-semibold text-green-600 mb-4">Strategies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Enhance wholesome entertainment, information, and educational programs.</li>
        <li>Enhance our creative outreach to the youth.</li>
        <li>Establish a platform to exploit and utilize creative skills within the DRMPA family.</li>
        <li>Position Hope TV to compete with other players in the industry.</li>
        <li>Provide counselling services in conjunction with our assemblies where applicable on a 24-hour basis.</li>
        <li>Develop and implement a program to train media staff in sound basic biblical doctrines.</li>
        <li>Partner with other like-minded organizations to fulfil the media outreach.</li>
        <li>Establish an effective resource mobilization mechanism to support media outreach and function.</li>
      </ul>
    </div>
  );
};

export default Media;
