import React from "react";
import dogImage from '../assets/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air-young-girl-being-love-with-her-dog-clothed-trendy-jumper-display-affection 3.png'; // Replace with the correct path to your image
import img9 from '../assets/Rectangle 1.png'

const BannerGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center bg-blue-900 rounded-lg h-100  p-8">
        
      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <img 
          src={dogImage} 
          alt="Woman holding dog" 
          className="w-full max-w-md rounded-lg" 
        />
      </div>

      {/* Text Section */}
      <div className="text-white space-y-6 md:pl-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          One More Friend
        </h1>
        <h2 className="text-2xl md:text-3xl">
          Thousands More Fun!
        </h2>
        <p className="text-lg max-w-lg">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition">
            View Intro
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-950 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
