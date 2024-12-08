import React from 'react';
import '../style/style.css';

const Header = () => {
  return (
    <div className="home-background h-[716.83px] flex items-center justify-center">
      <div className='responsive-container bg-[#FFF3E3] w-[643px] h-[443px] mr-[58px] ml-[739px] mt-[153px] rounded-[10px]'>
        <div className='content-wrapper w-[561px] h-[344px] ml-[39px] mt-[62px]'>
            <h2 className=' header-subtitle font-semibold tracking-[3px] leading-6 text-[16px]'>New Arrival</h2>
            <h1 className='header-title text-[#B88E2F] text-[52px] font-bold leading-[65px] mb-[17px]'>Discover Our New Collection</h1>
            <p className='header-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className='buy-button w-[222px] h-[74px] py-[25px] px-[72px] bg-[#B88E2F] text-white mt-[46px]'>BUY NOW</button>
        </div>
      </div>
    </div>

  );
};

export default Header;