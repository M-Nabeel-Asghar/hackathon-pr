"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import head from '../../../public/images/head.jpg';
import { RiAccountCircleFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFFFFF] text-black shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[100px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={head} alt="logo" width={40} height={40} />
          <h1 className="ml-2 text-[24px] sm:text-[28px] lg:text-[34px] font-bold">Furniro</h1>
        </div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-10">
          <ul className="flex items-center gap-6 text-sm sm:text-base lg:text-lg">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">Shop</li>
            <li className="hover:text-gray-600 cursor-pointer">Blog</li>
            <li className="hover:text-gray-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6">
          <RiAccountCircleFill className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          <CiSearch className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          <CiHeart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          <AiOutlineShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX className="w-8 h-8 text-black cursor-pointer" />
            ) : (
              <HiOutlineMenuAlt3 className="w-8 h-8 text-black cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] text-black">
          <ul className="flex flex-col items-center gap-4 text-center py-4">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">Shop</li>
            <li className="hover:text-gray-600 cursor-pointer">Blog</li>
            <li className="hover:text-gray-600 cursor-pointer">Contact</li>
            <div className="flex gap-4 mt-4">
              <RiAccountCircleFill className="w-6 h-6 cursor-pointer" />
              <CiSearch className="w-6 h-6 cursor-pointer" />
              <CiHeart className="w-6 h-6 cursor-pointer" />
              <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
