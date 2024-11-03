import React from 'react';

const DRMPAInfo = () => {
  return (
    <div className=" p-8 max-w-5xl mx-auto">
      
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Annual General Meeting (AGM)</h2>
        <p className="text-gray-700 mt-2">
          The Annual General Meeting (AGM), held on 3rd November each year, is the supreme governing body of DRMPA.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Apostles Board</h2>
        <p className="text-gray-700 mt-2">
          The Apostles Board exercises delegated authority from the AGM, with responsibilities outlined in the constitution of DRMPA. This meeting, consisting of up to twenty members, oversees spiritual, disciplinary, and doctrinal matters of the Ministry.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Leadership Structure</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Leader of Boma:</strong> Teachers are elected/selected by Tolis (leaders of Zion) of which the Boma is a member.
          </li>
          <li>
            <strong>Leaders of Zion:</strong> Appointed by the Jerusalem executive committee (apostles) for a period of three years, with re-appointments based on recommendations.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Day-to-Day Management</h2>
        <p className="text-gray-700 mt-2">
          The day-to-day operations are supervised by the Apostle Mkuu, who oversees Zions and coordinates with the Deputy Apostle Mkuu. The Director of Administration in the Secretariat manages church operations and business units, while property custody is entrusted to a Trust.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Office Bearers</h2>
        <p className="text-gray-700 mt-2">
          The following office bearers are appointed for a minimum term of three years:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>The Chairman</li>
          <li>The Vice Chairman</li>
          <li>The Secretary</li>
          <li>The Assistant Secretary</li>
          <li>The Treasurer</li>
          <li>The Elder Man and Elder Woman</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Office bearers may be re-appointed and are subject to removal by the executive committee and council of elders if found to affect the church’s reputation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600">Duties of Office Bearers</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>
            <strong>Chairman:</strong> Presides over meetings of the executive committee and general meetings, and represents the church publicly.
          </li>
          <li>
            <strong>Vice Chairman:</strong> Performs the Chairman's duties in their absence or as delegated.
          </li>
          <li>
            <strong>Secretary:</strong> Handles correspondences, consults the Chairman on urgent matters, and is responsible for minutes and records.
          </li>
          <li>
            <strong>Assistant Secretary:</strong> Supports the Secretary.
          </li>
          <li>
            <strong>Treasurer:</strong> Manages funds, issues receipts, and maintains proper books of accounts for AGM review.
          </li>
        </ul>
      </section>

      <div className='my-20'>
        <img src="images/governance.jpg" alt="" className=' ' />
      </div>

      <section className="mb-6 mt-20">
        <h2 className="text-2xl font-semibold text-green-600">Church Governing Council (Apostles)</h2>
        <p className="text-gray-700 mt-2">
          The Church Governing Council, composed of the apostles, is the supreme organ of the church and acts as the policy and implementing body of DRMPA. The council’s responsibilities include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Oversight of evangelism and spiritual growth of the church.</li>
          <li>Collaborating with members to design and prioritize development projects for Jerusalem, Zions, and Bomas.</li>
          <li>Custodianship of all church assets, spiritual, and legal documents.</li>
          <li>Ensuring proper record-keeping and documentation of church activities and projects.</li>
          <li>Conducting monitoring and evaluation of projects periodically as per church policy.</li>
        </ul>
      </section>

      <div className='my-20'>
        <img src="images/ls4.jpg" alt="" className=' ' />
      </div>
    </div>
  );
};

export default DRMPAInfo;
