// VolunteerCall.js
import React from 'react';


const VolunteerCall = () => {
  return (
    <div className="bg-white mb-10 p-8 md:p-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#833556]">
        CALL FOR VOLUNTEERS
      </h2>
      <p className="text-lg mb-4">
        Do you wish to volunteer your time to impact the community? Contact us.
        We operate in Kibera informal settlement.
      </p>
      <p className="text-lg mb-4">
        Our mission is to create a supportive, informed, and empowered community
        that effectively combats teenage pregnancies within the slums of Nairobi.
      </p>
      <p className="text-lg mb-4">
        Call/Text us on <a href="tel:0712027836" className="text-blue-500">0712027836</a> or Send us a message below
      </p>
     
    </div>
  );
};

export default VolunteerCall;
