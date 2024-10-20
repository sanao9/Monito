import React from 'react';
import PetCard from './PetCard';
import BImg from "../assets/group-portrait-adorable-puppies 1.png";
import BImg2 from "../assets/Rectangle 1 (2).png"
import { Play } from "lucide-react"
const CategoryPage = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
      
        {/* Banner */}
        <div className="w-full h-auto bg-darkBlue rounded-xl flex flex-col-reverse md:flex-row items-center justify-between p-8 text-white">
        
        <img
            src={BImg}
            alt="Dogs"
            className="md:w-1/2 h-full object-fill rounded-xl"
          />
          <div className="flex flex-col justify-center p-6 md:w-1/2">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">One More Friend</h1>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-3xl">Thousands More Fun!</h2>
          <p className="mb-6 text-sm md:text-base">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We
            have 200+ different pets that can meet your needs!
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-medium text-[#0A2342] transition-colors hover:bg-gray-100 md:text-base">
              <Play className="mr-2 h-4 w-4" />
              View Intro
            </button>
            <button className="rounded-full bg-transparent px-6 py-2 text-sm font-medium text-white ring-2 ring-white transition-colors hover:bg-white hover:text-[#0A2342] md:text-base">
              Explore Now
            </button>
          </div>
        </div>
          </div>
          
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row mt-8">
          {/* Filter Section */}
          <div className="md:w-1/4 w-full m-20">
            <h3 className="font-semibold text-lg mb-4">Filter</h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Gender</h4>
              <div>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Male
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Female
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Color</h4>
              <div>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Red
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Apricot
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Black
                </label>
              </div>
            </div>

            <div className="mb-6">
  <h4 className="font-semibold mb-2">Price</h4>
  <div className="flex space-x-2">
    <select className="w-1/2 px-2 py-1 border rounded-md">
      <option value="">Min</option>
      <option value="10000">10,000 VND</option>
      <option value="50000">50,000 VND</option>
      <option value="100000">100,000 VND</option>
      <option value="500000">500,000 VND</option>
      <option value="1000000">1,000,000 VND</option>
    </select>
    <select className="w-1/2 px-2 py-1 border rounded-md">
      <option value="">Max</option>
      <option value="100000">100,000 VND</option>
      <option value="500000">500,000 VND</option>
      <option value="1000000">1,000,000 VND</option>
      <option value="5000000">5,000,000 VND</option>
      <option value="10000000">10,000,000 VND</option>
    </select>
  </div>
</div>


            <div className="mb-6">
              <h4 className="font-semibold mb-2">Breed</h4>
              <div>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Small
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Medium
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Large
                </label>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="md:w-3/4 w-full mt-8 md:mt-0">
            <h3 className="font-semibold text-lg mb-4">
              Small Dog <span className="text-gray-500">(52 puppies)</span>
            </h3>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {/* Card Example */}
              <div className="border rounded-lg overflow-hidden shadow-lg">
                <div className="p-4">
                  <PetCard />
                  <PetCard />
                  
                </div>
              </div>
              {/* Add more product cards as needed */}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center space-x-2">
              <button className="px-4 py-2 border rounded-md">1</button>
              <button className="px-4 py-2 border rounded-md">2</button>
              <button className="px-4 py-2 border rounded-md">3</button>
              {/* Add more pagination as needed */}
            </div>
          </div>
        </div>
      </div>
  );
};

export default CategoryPage;
