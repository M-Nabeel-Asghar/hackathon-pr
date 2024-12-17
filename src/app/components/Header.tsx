import React from 'react';
import '../style/style.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="home-background relative min-h-screen flex items-center justify-center px-4 py-12 md:py-0">
      <div className='bg-[#FFF3E3] w-full max-w-[643px] md:mx-auto lg:mr-[58px] lg:ml-auto rounded-[10px] 
        md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2'>
        <div className='w-full max-w-[561px] p-6 md:p-8 lg:ml-[39px] lg:mt-[62px]'>
          <h2 className='text-sm md:text-base font-semibold tracking-[3px] leading-6 mb-2'>New Arrival</h2>
          <h1 className='text-3xl md:text-[52px] text-[#B88E2F] font-bold leading-tight mb-4'>
            Discover Our New Collection
          </h1>
          <p className='text-sm md:text-base mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href='./shop'>
          <button className='w-full md:w-[222px] h-[74px] py-4 px-6 md:px-[72px] bg-[#B88E2F] text-white 
            hover:bg-[#9c7a26] transition-colors duration-300'>
            BUY NOW
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;