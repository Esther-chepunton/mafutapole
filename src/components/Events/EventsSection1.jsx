import { eventData } from "../Data/EventData";
import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Import arrow icons
import { SlArrowRight } from 'react-icons/sl'; // Import arrow icons

function EventsSection() {
  const [currentImages, setCurrentImages] = useState(Array(eventData.length).fill(0));

  const handleNextImage = (sectionIndex) => {
    const newImages = [...currentImages];
    newImages[sectionIndex] = (currentImages[sectionIndex] + 1) % eventData[sectionIndex].imageUrls.length;
    setCurrentImages(newImages);
  };

  const handlePrevImage = (sectionIndex) => {
    const newImages = [...currentImages];
    newImages[sectionIndex] = (currentImages[sectionIndex] - 1 + eventData[sectionIndex].imageUrls.length) % eventData[sectionIndex].imageUrls.length;
    setCurrentImages(newImages);
  };

  return (
    <div className='md:pt-40'>
      <div className='mt-20'>
        <h1 className='text-black md:text-5xl text-4xl font-black md:ml-20 ml-5'>Our Events</h1>
      </div>

      <div className='mt-10'>
        <div className='flex flex-wrap gap-10 justify-center'>
          {eventData.map((event, sectionIndex) => (
            <div key={sectionIndex} className="block bg-gray-50 p-2 ">
              <div className="manual-carousel" style={{ position: "relative" }}>
                <img
                  src={event.imageUrls[currentImages[sectionIndex]]}
                  alt={`Event ${sectionIndex + 1} Image ${currentImages[sectionIndex] + 1}`}
                  className="h-64 w-[550px] object-cover sm:h-80 lg:h-96"
                />
                <BsArrowLeft
                  onClick={() => handlePrevImage(sectionIndex)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  size={32}
                />
                <BsArrowRight
                  onClick={() => handleNextImage(sectionIndex)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  size={32}
                />
              </div>

              <h2 className="mt-4 text-gray-500 text-sm">
                {event.date}
              </h2>

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {event.title}
              </h3>

              <p className="mt-2 max-w-sm text-gray-700">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
