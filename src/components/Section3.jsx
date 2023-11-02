import React from 'react';

function Section3() {
  const images = [
    {
      src: '/image2.jpg',
      alt: 'tepa2',
    },
    {
      src: '/image1.jpg',
      alt: 'tepa1',
    },
    {
      src: '/image3.jpg',
      alt: 'tepa3',
    },
  ];

  return (
    <div>
      <section className="mt-5 mb-10">
        <div className="max-w-screen-xl py-8 sm:py-12">
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 px-3">
            {images.map((image, index) => (
              <li key={index}>
                <a href="#" className="block overflow-hidden group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[550px]"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section3;
