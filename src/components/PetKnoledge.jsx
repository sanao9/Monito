import React from 'react';
import img1 from '../assets/pknoledge/Frame 7.png'
import img2 from '../assets/pknoledge/Frame 7 (1).png'
import img3 from '../assets/pknoledge/Frame 7 (2).png'

const PetKnowledgeSection = () => {
  const articles = [
    {
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circ...",
      image: img1, 
      tag: "Pet knowledge"
    },
    {
      title: "Dog Diet You Need To Know",
      description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet...",
      image: img2, 
      tag: "Pet knowledge"
    },
    {
      title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
      image: img3, 
      tag: "Pet knowledge"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-16">
      {/* Header */}
      
        <div className="mb-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-700">You already know?</h2>
            <h3 className="text-3xl font-bold text-blue-900 mt-2">Useful Pet Knowledge</h3>
            <div className="flex justify-end">
            <button className="flex items-center space-x-2 text-blue-900 font-semibold border border-blue-900 px-4 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
            <span>View More</span>

             <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
           </svg>
          </button>
          </div>
          </div>
      

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
            <span
  className="inline-block text-white px-3 py-1 rounded-full text-sm mb-2"
  style={{ backgroundColor: '#00A7E7' }} 
>
  {article.tag}
</span>
              <h3 className="text-lg font-bold text-darkBlue mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {article.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default PetKnowledgeSection;
