import React from "react";

const GallerySection = () => {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <div className="gallery-section bg-white p-8">
      <h2 className="text-center text-2xl font-bold mb-4">
        Share your setup with #FuniroFurniture
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-48"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
