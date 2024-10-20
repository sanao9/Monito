import React from 'react';
import ADImg from '../assets/pngegg (4) 1.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-beige rounded-xl p-8 md:p-16">
      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Adoption <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block h-8 w-8 "><path fill="#003459"  d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-900 mb-6">
          We Need Help. So Do They.
        </p>
        <p className="text-sm md:text-base text-darkGray mb-2">
          Adopt a pet and give it a home,
        </p>
        <p className="text-sm md:text-base text-darkGray mb-8">
          it will love you back unconditionally.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-950">
            Explore Now
          </button>
          <button className="border border-darkBlue text-darkBlue px-6 py-3 rounded-full hover:bg-darkBlue hover:text-white">
            View Intro
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="mt-8 md:mt-0">
        <img
          src={ADImg}
          alt="A happy pet adoption scene"
          className="rounded-lg object-cover max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
