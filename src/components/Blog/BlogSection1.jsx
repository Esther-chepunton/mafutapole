import React, { useState } from 'react';

function BlogSection1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const blogData = [
    {
      title: 'Effects of Prolonged Rains on Kibera and Kangemi',
      image: '/SlumFloods.jpg',
      summary: " In the heart of Nairobi, the slums of Kibera and Kangemi are enduring an unprecedented crisis due to ongoing heavy rains. These rains have led to substantial loss of life, displacement of over 50,000 people, and severe food shortages",
      content: '/TepaFloods.pdf', // URL to the PDF file for this card
  },
    {
        title: 'The Story Behind Tepa',
        image: '/image13.jpg',
        summary: " In the heart of Kibera, one of Africa's largest slums, where dreams are often overshadowed by the harsh realities of life, a remarkable story of resilience and hope emerges. It's the story of Reuben Apuya Mutua, a young man who, against all odds",
        content: '/Tepa_story.pdf', // URL to the PDF file for this card
    },
    

  ];

  return (
    <div className='mb-20'>
      <div className='md:mt-[260px] mt-14 '>
        <h1 className='text-black md:text-5xl text-4xl font-black md:ml-20 ml-5'>Our Blog</h1>
      </div>
      <div className='mt-10 md:grid md:grid-cols-3 mx-5 gap-8  pt-5'>
        {blogData.map((card, index) => (
          <article className="overflow-hidden rounded-lg border mb-20 border-gray-100 bg-white/80 shadow-sm" key={index}>
            
            <img
              alt="photo"
              src={card.image}
              className="h-56 w-full object-cover"
              loading='lazy'
            />

            <h3 className="text-lg font-medium text-gray-900 px-3 pt-3">{card.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 px-3">{card.summary}</p>
            <button
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium px-3 text-pink-600"
              onClick={() => window.open(card.content, '_blank')}
            >
              Find Out More
              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogSection1;
