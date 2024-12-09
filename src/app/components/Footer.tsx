import React from "react";

const Footer = () => {
  return (
    <footer className="p-8 border-t border-[#00000063] bg-[#FCF8F3]">
      <div className="flex flex-wrap justify-between gap-8 lg:gap-0 lg:flex-nowrap lg:justify-between items-start mt-[48px]">
        {/* Company Info */}
        <div className="flex-1 min-w-[280px]">
          <h3 className="text-xl font-bold">Funiro.</h3>
          <p className="text-[#9F9F9F] mt-4">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 min-w-[140px]">
          <h4 className="font-bold text-[#9F9F9F]">Links</h4>
          <ul className="space-y-4 mt-4">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Helps */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="font-bold text-[#9F9F9F]">Helps</h4>
          <ul className="space-y-4 mt-4">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[280px]">
          <h4 className="font-bold text-[#9F9F9F]">Newsletter</h4>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Your Email"
              className="border-0 border-b-2 border-black w-full focus:outline-none focus:ring-0 px-2 py-1"
            />
            <button className="mt-2 px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#dfaf40] transition-all w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* All Rights Reserved Section */}
      <div className="text-center text-sm text-black border-t py-4 mt-8">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
