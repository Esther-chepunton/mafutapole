import React, { useState, useEffect,  } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const VolunteerPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Check local storage for the flag
    const hasPopupBeenShown = localStorage.getItem('hasPopupBeenShown');

    if (!hasPopupBeenShown) {
      // If the flag is not set, show the popup and set the flag in local storage
      setShowPopup(true);
      localStorage.setItem('hasPopupBeenShown', 'true');
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleContactsClick = () => {
    console.log('Handling contacts click');
    closePopup();
    navigate('/contacts')
     // Close the popup when "Contacts" is clicked
  };

  

  return (
    <div>
      {showPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 blur-md"
            onClick={closePopup}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 md:w-[900px] w-[380px] h-[400px]" >
            <button className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={closePopup}>
              Close
            </button>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
              <div className="col-span-1 hidden md:block">
                <img
                  alt="Volunteer"
                  src="/image1.jpg"
                  className="h-32 md:w-full object-cover md:h-[350px] mb-4 rounded"
                />
              </div>
              <div className="col-span-2 mt-10">
                <div className="text-center">
                  <h1 className="md:text-3xl text-2xl font-bold mb-4">Call for Volunteers</h1>
                  <p className="text-sm">
                    If you wish to volunteer your time to create a supportive, informed, and
                    empowered community that effectively combats teenage pregnancies within the
                    slums of Nairobi, we would love to hear from you.
                  </p>
                  <p className="mt-6 text-sm">
                    Call/Text us on{' '}
                    <a href="tel:+254712027836" className="text-blue-500">
                      +254712027836
                    </a>
                  </p>
                  

                  <button
                    className="mt-8 w-60 inline-block  bg-pink-700 py-4 text-sm font-bold uppercase tracking-widest text-white"
                    onClick={handleContactsClick}
                    >
                  
                    Contacts
                  </button>
               
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerPopup;
