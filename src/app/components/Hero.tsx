import React from "react";
import Image from "next/image";
import InnerPeace from "../../../public/images/Rec.png";
import SideInner from "../../../public/images/in.png";

const Hero = () => {
  return (
    <div className="bg-[#FCF8F3] p-4 md:p-8 lg:p-16">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
        {/* Text Section */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h4 className="font-extrabold text-2xl md:text-3xl mb-4">
            50+ Beautiful rooms inspiration
          </h4>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] h-[48px] w-[176px] text-white rounded-md hover:bg-[#dfaf40]">
            Explore More
          </button>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Image */}
          <div className="flex justify-center">
            <Image
              src={SideInner}
              width={404}
              height={582}
              alt="Beautiful room inspiration"
              className="rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="flex justify-center">
            <Image
              src={InnerPeace}
              width={372}
              height={486}
              alt="Beautiful room inspiration"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
