import React from 'react';

const Governance = () => {
  return (
    <div className=" max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 mt-20 ">Governance and organizational development  </h1>

      <div className="flex items-center justify-center">
        <img src="/images/governance.jpg" alt="" className='w-[900px]' />
      </div>

      <h2 className="text-xl font-semibold text-green-600 mb-4 mt-20">Strategic Objective</h2>
      <p className="text-gray-700 mb-6">
        To promote good governance, effective and efficient leadership, and organizational development at all levels of the church.
      </p>
      
      <h2 className="text-xl font-semibold text-green-600 mb-4">Strategies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Develop leaders’ code of conduct</li>
        <li>Create conflict management and resolution manual</li>
        <li>Expand Zion and Boma presence in areas affected by splinter groups</li>
        <li>Establish a disciplinary and conflict resolution committee</li>
        <li>Develop ID cards for all key church leaders</li>
        <li>Distribute the code of conduct to all Zion and Bomas</li>
        <li>Review church constitution to address current challenges</li>
        <li>Establish a welfare program for senior apostles</li>
        <li>Set up a welfare committee</li>
        <li>Develop payroll and compensation scheme for key church personnel</li>
        <li>Organize annual visitations to the apostle mkuu and deputy apostle</li>
        <li>Operationalize all key church departments:</li>
        <ul className="list-disc list-inside ml-5 space-y-1">
          <li>Agriculture and Food Security</li>
          <li>Environment and Climate Change</li>
          <li>Education, Training, and Capacity Building</li>
          <li>Disciplinary and Conflict Resolution Committee</li>
          <li>Strategic Plant Implementation Committee</li>
          <li>Remuneration and Welfare Committee</li>
          <li>Fundraising and Resource Mobilization Committee</li>
          <li>Children and Youth Ministry Committee</li>
          <li>Church Assets Management Committee</li>
        </ul>
      </ul>
    </div>
  );
};

export default Governance;
