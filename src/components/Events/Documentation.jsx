import React from 'react';

const Documentation = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-6">Documentation and Literature development  </h1>

      <div className="flex items-center justify-center">
        <img src="/images/documentation.jpg" alt="" className='w-[700px]' />
      </div>

      <h2 className="text-xl font-semibold text-green-600 mb-4 mt-20">Strategic Objective</h2>
      <p className="text-gray-700 mb-6">
        To diligently report, document, communicate, and archive all the church interventions for future reference and generations.
      </p>
      
      <h2 className="text-xl font-semibold text-green-600 mb-4">Strategies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Develop liturgical books on worship</li>
        <li>Create manuals for the above</li>
        <li>Brand all Zions with the same signboard and paint</li>
        <li>Develop and host a church website</li>
        <li>Build the capacity of the church to file annual returns regularly</li>
        <li>Document and tag all church assets and develop a repository unit</li>
        <li>Maintain registers in each Boma, Zion, and Jerusalem</li>
      </ul>
    </div>
  );
};

export default Documentation;
