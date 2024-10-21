import React from 'react';

import Rectangles from "./Rectangles";
import img from "../assets/whd.png"
import BG2 from "../assets/Rectangle 2.png";
import BG3 from "../assets/Rectangle 1 (1).png";
import BG4 from "../assets/Rectangle 8.png";
import OBG from "../assets/Rectangle 3.png";
import { Play } from "lucide-react"


const Hero = () => {
  return (
    <div className="flex  items-center justify-between  bg-[linear-gradient(102.87deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] w-full 2xl:h-[700px] xl:h-[600px] lg:h-[550px] overflow-hidden ">
      
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-2 lg:mt-[22%] xl:mt-[18%] 2xl:mt-[21%]">
          <div>
            <div className="relative space-y-5 2xl:mt-[23%] xl:mt-[26%] lg:mt-[28%]">
              {/* Background image behind "O" */}
              <div className="absolute z-0 ml-[115px] xl:mt-[-5px] lg:mt-[-20px]">
                <img
                  src={OBG}
                  alt="Letter O Background"
                  width={80}
                  height={80}
                />
              </div>

              {/* Heading Text */}
              <h1 className="font-['SVN-Gilroy'] text-[60px] font-extrabold lg:leading-[38px] xl:leading-[68px] text-left w-[465px] h-[68px] mt-[180px] ml-[130px] text-[#002A48] relative z-10">
                One more friend
              </h1>

              {/* Subheading */}
              <p className="ml-[130px] font-['SVN-Gilroy'] text-[46px] font-bold lg:leading-[40px]  xl:leading-[60px] text-left text-[#002A48] relative z-10">
                Thousands more fun!
              </p>

              {/* Description Text */}
              <p className=" ml-[130px] font-['SVN-Gilroy'] text-base font-medium leading-6 text-left text-[#242B33] relative z-10">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>

               {/* Buttons */}
        <div className="flex ml-36 space-x-4">
        <button className="flex items-center justify-center rounded-full bg-darkBlue px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-950 md:text-base">
              <Play className="mr-2 h-4 w-4" />
              View Intro
            </button>
            <button className="rounded-full bg-transparent px-6 py-2 text-sm font-medium text-darkBlue ring-2 ring-darkBlue transition-colors hover:bg-blue-950 hover:text-white md:text-base">
              Explore Now
            </button>
        </div>

              {/* BG4 Image */}
              <div className="mt-5">
                <img src={BG4} alt="Background 4" className="mt-[6%]" />
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full h-[800px] ">
              {/* Background Image 1 (BG2) */}
              <div className="absolute top-0 2xl:left-10 xl:left-5 z-10 2xl:mt-[21%] xl:mt-[33%] xl:w-[100%] lg:w-[80%] lg:left-8  lg:mt-[62%] ">
                <img
                  src={BG2}
                  alt="Background 2"
                  className="rounded-tl-[99px]"
                />
              </div>

              <Rectangles/>

              {/* Background Image 2 (BG3) */}
              <div className="absolute lg:right-[15%] xl:right-[7%] z-0 2xl:mt-[40%] w-[90%] h-[120%] xl:mt-[50%]  lg:w-[80%]  lg:left-2 lg:mt-[71%] ">
                <img
                  src={BG3}
                  alt="Background 3"
                  className="rounded-tl-[99px]"
                />
              </div>

              {/* Main Hero Image */}
              <div className="relative z-10 flex justify-center items-center lg:w-[100%] lg:h-[100%] xl:w-[100%] xl:h-[100%]">
                <img
                  src={img}
                  alt="Hero Image"
                  className="xl:mt-[-3%] 2xl:mt-[-18%] lg:mt-[-4%]"
                  width={1000}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
