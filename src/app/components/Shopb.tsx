import React from 'react';
import Image from 'next/image';
import '../style/style.css'
import ci from '../../../public/images/ci.png'
import li from '../../../public/images/li.png'
import filter from '../../../public/images/filter.png'

const  Sbanner= () => {
  return (
    <div>
      <div className=' shop-background h-[316px]'>
        
      </div>
      <div className='h-[100px] bg-[#F9F1E7] flex py-[35px] pl-[98px]'>
            <ul className='flex gap-3 text-xl items-center'>
                <li><Image src={filter} alt='ic'/></li>Filter
                <li><Image src={ci} alt='ic'/></li>
                <li><Image src={li} alt='ic'/></li>
                <li>|    Showing 1 16 of 32 results</li>
            </ul>
            <ul className='flex gap-3 text-xl items-center ml-[348px]'>
                <li>Show</li>
                <li className='border-white bg-white text-[#9F9F9F] py-[12px] px-[30px]'>16</li>
                <li>Sort by</li>
                <li className='border-white bg-white text-[#9F9F9F] py-[12px] pr-[86px] pl-[30px]'>Defalt</li>
            </ul>
      </div>
    </div>
  );
};

export default Sbanner;