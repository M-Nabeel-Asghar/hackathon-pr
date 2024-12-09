import React from "react";
import Image from "next/image";
import "../style/style.css";
import ci from "../../../public/images/ci.png";
import li from "../../../public/images/li.png";
import filter from "../../../public/images/filter.png";

const Sbanner = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="shop-background h-[316px]"></div>

      {/* Filter and Sorting Section */}
      <div className="bg-[#F9F1E7] py-6 px-4 lg:px-8 flex justify-between items-center gap-6 flex-wrap">
        {/* Filter & Search Options */}
        <ul className="flex gap-3 items-center text-lg md:text-xl">
          <li>
            <Image src={filter} alt="filter-icon" width={20} height={20} />
          </li>
          <li>Filter</li>
          <li>
            <Image src={ci} alt="ci-icon" width={20} height={20} />
          </li>
          <li>
            <Image src={li} alt="li-icon" width={20} height={20} />
          </li>
          <li>| Showing 1 - 16 of 32 results</li>
        </ul>

        {/* Show & Sort Options */}
        <ul className="flex gap-3 items-center text-lg md:text-xl">
          <li>Show</li>
          <li className="border border-[#9F9F9F] bg-white text-[#9F9F9F] py-2 px-4">16</li>
          <li>Sort by</li>
          <li className="border border-[#9F9F9F] bg-white text-[#9F9F9F] py-2 px-4">Default</li>
        </ul>
      </div>
    </div>
  );
};

export default Sbanner;
