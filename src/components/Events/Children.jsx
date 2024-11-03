import React from 'react';

const Children = () => {
  return (
    <div className=" max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold  mb-6">Children and Youth Ministry</h1>

      <div className="flex items-center justify-center">
        <img src="/images/children.jpg" alt="" className='w-[900px]' />
      </div>
      

      <h2 className="text-xl font-semibold text-green-600 mb-4 mt-20">Strategic Objective</h2>
      <p className="text-gray-700 mb-6">
        To raise a God-fearing generation of children and youth who are disciplined, ready to exploit their God-given potentials, and grow up as responsible citizens.
      </p>
      
      <h2 className="text-xl font-semibold text-green-600 mb-4">Objectives</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Develop Sunday School procedure manual</li>
        <li>Ensure each Boma and Zion holds separate services for children</li>
        <li>Identify and train children’s teachers/Tols, one per Boma and Zion</li>
        <li>Develop youth annual programs</li>
        <li>Organize an annual youth camp per Zion</li>
        <li>Arrange youth tours</li>
        <li>Hold an annual mentorship program per Zion</li>
        <li>Organize youth annual choir festivals and competitions</li>
        <li>Develop a youth teaching and preaching schedule for holidays</li>
      </ul>
    </div>
  );
};

export default Children;
