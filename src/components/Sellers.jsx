import React from 'react';
import sheba from '../assets/sellers/Frame 34.png';
import whiskas from '../assets/sellers/image 6 (1).png';
import bakers from '../assets/sellers/Frame 36.png';
import felix from '../assets/sellers/Frame 41.png';
import goodBoy from '../assets/sellers/Frame 37.png';
import butchers from '../assets/sellers/Frame 38.png';
import pedigree from '../assets/sellers/Frame 39.png';

const PetSellers = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-8">
            <p>Proud to be part of</p>
          <h2 className="text-2xl font-bold text-blue-900">Pet Sellers</h2>
          <button className="flex items-center space-x-2 text-blue-900 font-semibold border border-blue-900 px-4 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
            <span>View all our sellers</span>
            <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
           </svg>
          </button>
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <img src={sheba} alt="Sheba" className="mx-auto h-16" />
          <img src={whiskas} alt="Whiskas" className="mx-auto h-16" />
          <img src={bakers} alt="Bakers" className="mx-auto h-16" />
          <img src={felix} alt="Felix" className="mx-auto h-16" />
          <img src={goodBoy} alt="Good Boy" className="mx-auto h-16" />
          <img src={butchers} alt="Butchers" className="mx-auto h-16" />
          <img src={pedigree} alt="Pedigree" className="mx-auto h-16" />
        </div>
      </div>
    </section>
  );
};

export default PetSellers;
