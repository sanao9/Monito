import React, { useState } from 'react';

import IMg1 from '../assets/pdetails/Section 1 Image 7.png';
import IMg2 from '../assets/pdetails/Section 1 Image 2.png';
import IMg3 from '../assets/pdetails/Section 1 Image 3.png';
import IMg4 from '../assets/pdetails/Section 1 Image 4.png'; 
import IMg9 from '../assets/pdetails/Frame 118.png';
import IMg10 from '../assets/pdetails/Frame 119.png';
import IMg11 from '../assets/pdetails/Frame 120.png';
import IMg12 from '../assets/pdetails/Frame 121.png';
import img13 from "../assets/petcard/image 4.png";
import img14 from "../assets/petcard/image 5.png";
import img15 from "../assets/petcard/image 6.png";
import img16 from "../assets/petcard/image 7.png";
import img17 from "../assets/petcard/image 8.png";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(IMg1);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div>
      
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-5">
          <ul className="flex space-x-2 text-gray-500">
            <li>Home</li>
            <li>Dog</li>
            <li>Large Dog</li>
            <li className="text-blue-600 font-bold">Shiba Inu Sepia</li>
          </ul>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Images */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={selectedImage}
              alt="Shiba Inu"
              className="rounded-lg w-full h-96 object-cover"
            />
            <div className="flex space-x-3 mt-3">
              {[IMg1, IMg2, IMg3, IMg4].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Shiba Inu"
                  className={`w-16 h-16 rounded-lg border ${selectedImage === img ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h1 className="text-3xl font-bold mb-3">Shiba Inu Sepia</h1>
            <p className="text-xl font-semibold text-darkBlue mb-2">34,000,000 VND</p>
            <div className="flex space-x-4 mb-6">
              <button className="px-6 py-3 bg-darkBlue text-white rounded-full hover:bg-blue-950 transition">
                Contact us
              </button>
              <button className="flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-white hover:text-blue-950 transition">
                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                </svg>
                <strong>Chat with Monito</strong>
              </button>
            </div>

            <ul className="text-sm text-gray-700 space-y-2 divide-y divide-gray-200">
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">SKU:</strong> <span>#1000078</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Gender:</strong> <span>Female</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Age:</strong> <span>2 months</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Size:</strong> <span>Small</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Color:</strong> <span>Apricot & Tan</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Vaccinated:</strong> <span>Yes</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Dewormed:</strong> <span>Yes</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Location:</strong> <span>Vietnam</span>
              </li>
              <li className="grid grid-cols-2 items-center py-2">
                <strong className="text-gray-500">Published Date:</strong> <span>12-Oct-2022</span>
              </li>
              <li className="grid grid-cols-2 items-center pt-4">
                <strong className="text-gray-500">Additional Information:</strong>
                <p className="text-gray-700">Pure breed Shih Tzu. Good body structure.<br />With MKA cert and Microchip.<br />Father from champion lineage.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Our Lovely Customers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
  {[IMg9, IMg10, IMg11, IMg12].map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`Customer ${idx + 1}`}
      className="rounded-lg w-50 h-100 object-cover" // Adjusted height here
    />
  ))}
</div>

        </div>

        {/* Related Products */}
        <div className="mt-12">
          <p className="text-sm font-semibold mb-2">What's New?</p>
          <h2 className="text-xl font-semibold mb-4 text-darkBlue">See more puppies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={img13}
                alt="Puppy 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-bold">MO231 - Pomeranian White</h3>
                <p className="text-sm">6,900,000 VND</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={img14}
                alt="Puppy 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-bold">MO502 - Poodle Tiny Yellow</h3>
                <p className="text-sm">3,900,000 VND</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={img15}
                alt="Puppy 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-bold">MO554 - Golden Retriever</h3>
                <p className="text-sm">5,500,000 VND</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={img16}
                alt="Puppy 4"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-bold">MO234 - Bichon Frise</h3>
                <p className="text-sm">4,900,000 VND</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetailPage;
