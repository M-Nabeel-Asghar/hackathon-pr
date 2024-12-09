'use client';
import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const Frame = () => {
  return (
    <div className="bg-[#FAF3EA] py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-6 md:gap-8 px-4 md:px-8">
        {/* High Quality */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-2 md:gap-4">
          <div className="text-4xl md:text-5xl text-black">
            <FaTrophy />
          </div>
          <div>
            <h4 className="text-sm md:text-xl font-semibold text-black">High Quality</h4>
            <p className="text-xs md:text-sm text-gray-500">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-2 md:gap-4">
          <div className="text-4xl md:text-5xl text-black">
            <FaShieldAlt />
          </div>
          <div>
            <h4 className="text-sm md:text-xl font-semibold text-black">Warranty Protection</h4>
            <p className="text-xs md:text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-2 md:gap-4">
          <div className="text-4xl md:text-5xl text-black">
            <FaShippingFast />
          </div>
          <div>
            <h4 className="text-sm md:text-xl font-semibold text-black">Free Shipping</h4>
            <p className="text-xs md:text-sm text-gray-500">Order over 150 $</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-2 md:gap-4">
          <div className="text-4xl md:text-5xl text-black">
            <FaHeadset />
          </div>
          <div>
            <h4 className="text-sm md:text-xl font-semibold text-black">24/7 Support</h4>
            <p className="text-xs md:text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
