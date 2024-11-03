import React from 'react';

const Training = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <h1 className="text-2xl font-semibold   mb-6 mt-10">Training and Capacity Building</h1>

      <div className="flex items-center justify-center mt-20 ">
        <img src="/images/training.jpg" alt="" className=' w-[900px]' />
      </div>
      
      <ul className="list-disc list-inside text-gray-700 space-y-2 mt-20">
        <li>Establish a church theological college at Keringet</li>
        <li>Train all Tols, Maalimun, and Apostles in theology with a minimum training of 6 months</li>
        <li>Introduce adult literacy classes in the Boma and Zion</li>
        <li>Organize exposure and benchmarking tours for senior apostles to Israel, Rwanda, and Machakos</li>
        <li>Establish training for married couples</li>
        <li>
          Establish:
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>Mafuta Pole Professional Forum</li>
            <li>Mafuta Pole Mother’s Union</li>
            <li>Mafuta Pole Teacher’s Association</li>
            <li>Mafuta Pole Trader’s Association</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Training;
