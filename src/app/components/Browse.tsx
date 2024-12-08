import React from 'react';
import Image from 'next/image';
import Maskgroup from '../../../public/images/Mask Group.png';
import Maskgroup1 from '../../../public/images/Mask Group (1).png';
import living from '../../../public/images/Image-living room.png';

const Browse = () => {
  return (
    <div className="h-[685px] w-[1183px] mx-auto mb-[56px] flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Browse The Range</h1>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Image Row Section */}
      <div className="flex justify-center space-x-8 mt-4">
        {/* First Image */}
        <div className="text-center">
          <Image src={Maskgroup} alt="dining" width={381} height={480} className="object-cover" />
          <h1 className='font-semibold leading-10'>Dining</h1>
        </div>
        {/* Second Image */}
        <div className="text-center">
          <Image src={living} alt="living" width={381} height={480} className="object-cover" />
          <h1 className='font-semibold leading-10'>Living</h1>
        </div>
        {/* Third Image */}
        <div className=" text-center">
          <Image src={Maskgroup1} alt="bedroom" width={381} height={480} className="object-cover" />
          <h1 className='font-semibold leading-10'>Bedroom</h1>
        </div>
      </div>
    </div>
  );
};

export default Browse;
