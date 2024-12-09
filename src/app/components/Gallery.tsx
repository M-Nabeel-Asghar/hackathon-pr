import React from "react";
import Image from "next/image";
import gallery from "../../../public/images/gallery.png";

const Gallery = () => {
  return (
    <div className="my-[50px]">
      {/* Header Section */}
      <div className="text-center mb-6 px-4">
        <p className="font-semibold text-[16px] sm:text-[20px] text-[#616161]">
          Share your setup with
        </p>
        <h1 className="font-bold text-[28px] sm:text-[40px]">
          #FuniroFurniture
        </h1>
      </div>

      {/* Image Section */}
      <div>
        <Image
          src={gallery}
          height={721}
          width={1920} // Adjusted to ensure full width for larger screens
          alt="gallery"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
