import React from 'react';
import Image from 'next/image';
import gallery from '../../../public/images/gallery.png'

const  Gallery = () => {
  return (
    <div className='my-[50px]'>
      <div>
        <p className='font-semibold text-[20px] text-center text-[#616161]'>Share your setup with</p>
        <h1 className='font-bold text-[40px] text-center' >#FuniroFurniture</h1>
      </div>
      <div>
          <Image src={gallery} height={721} alt='gallery'/>
      </div>
    </div>
  );
};

export default Gallery;