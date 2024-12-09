import React from "react";

const Footer = () => {
  return (
    <footer className="h-[505px] p-8 border-t border-[#00000063]">
      <div className="h-[370px] mt-[48px] flex justify-between items-start">
        {/* Company Info */}
        <div className="w-[285px]">
          <h3 className="text-xl font-bold">Funiro.</h3>
          <p className="text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="w-[68px]">
          <h4 className="font-bold text-[#9F9F9F]">Links</h4>
          <ul className="space-y-[48px] mt-[54px]">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Helps */}
        <div className="w-[140px]">
          <h4 className="font-bold text-[#9F9F9F]">Helps</h4>
          <ul className="space-y-[48px] mt-[54px]">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-[286px]">
          <h4 className="font-bold text-[#9F9F9F]">Newsletter</h4>
          <div className="flex flex-col items-start mt-[54px]">
            <div className="flex items-center w-full mb-2">
              <input
                type="text"
                placeholder="Your Email"
                className="border-0 border-b-2 border-black focus:outline-none focus:ring-0 w-3/4"
              />
              <button className="ml-2 px-3 py-1 border-0 border-b-2 border-black text-black text-sm font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved Section */}
      <div className="text-sm flex text-black text-center border-t py-[35px]">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
