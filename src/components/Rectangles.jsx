import React from "react";
import Dec1 from "../assets/Rectangle 5.png";
import Dec2 from "../assets/Rectangle 7.png";

const Rectangles = () => {
  return (
      <div className="">
        <div className="z-10 xl:mt-[140px] lg:mt-[180px] lg:left-[140px] xl:left-[170px] absolute">
          <img src={Dec2} alt="Back" width={20} />
        </div>
        <div className="z-0  xl:mt-[200px] lg:mt-[260px] xl:left-[130px] lg:left-[100px] absolute">
          <img src={Dec1} alt="Background 1" width={30} />
        </div>
        <div className="z-10 xl:mt-[190px] lg:mt-[250px] xl:left-[130px] lg:left-[100px] absolute">
          <img src={Dec2} alt="Back" />
        </div>
      </div>
    );
  }
export default Rectangles;
