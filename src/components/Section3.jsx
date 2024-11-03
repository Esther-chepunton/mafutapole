import React from 'react';

function Section3() {
  const images = [
    {
      src: 'images/ls1.jpg',
      alt: 'ls1',
      text: 'From right Apostle Mkuu Aristi kapel , Naibu Apostle Mkuu Ameme Limangura and secretary Meskina Lomuria  '
    },
    {
      src: 'images/ls2.jpg',
      alt: 'ls2',
      text: 'The church apostles  '
    },
    
  ];

  return (
    <div>
      <section className=" mb-10">
        <div className="max-w-screen-xl py-8 sm:py-12">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 px-3">
            {images.map((image, index) => (
              <li key={index}>
                <a href="#" className="block overflow-hidden group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[550px]"
                    loading="lazy"
                  />
                </a>
                <p className=' -mt-10'>{image.text}</p>
              </li>
              
              
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section3;
