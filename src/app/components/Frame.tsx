'use client';
import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const Frame = () => {
  return (
    <div className="bg-[#FAF3EA] h-[270px] flex items-center">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-8 px-4">
        {/* High Quality */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="text-5xl text-black">
            <FaTrophy />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black">High Quality</h4>
            <p className="text-sm text-gray-500">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="text-5xl text-black">
            <FaShieldAlt />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black">
              Warranty Protection
            </h4>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="text-5xl text-black">
            <FaShippingFast />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black">Free Shipping</h4>
            <p className="text-sm text-gray-500">Order over 150 $</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="text-5xl text-black">
            <FaHeadset />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black">24/7 Support</h4>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
