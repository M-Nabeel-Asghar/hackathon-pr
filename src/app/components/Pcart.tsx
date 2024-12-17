import Image from "next/image";
import Link from "next/link";

export default function Scart() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: "/images/image-1.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/images/image-2.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury lounge chair",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      image: "/images/image-3.png",
    },
    {
      id: 4,
      name: "Respira",
      description: "Minimalist fan",
      price: "Rp 500.000",
      image: "/images/image-4.png",
    },
  ];

  return (
    <div className="p-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
        <Link href="/single_product">
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden p-4 w-[285px] h-[446px] transition-transform transform hover:scale-105 hover:shadow-lg group"
          >

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-[320px]"
                />
              

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Add to Cart Button */}
              <Link href="/cart">
                
                  <button className="bg-white text-yellow-500 px-6 py-2 rounded-md font-bold hover:bg-yellow-500 hover:text-white transition">
                    Add to Cart
                  </button>
                
              </Link>
              {/* Share, Like, Compare */}
              <div className="mt-2 text-white flex gap-4 text-sm">
                <button className="hover:text-yellow-500">Share</button>
                <button className="hover:text-yellow-500">Like</button>
                <button className="hover:text-yellow-500">Compare</button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-2">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>

              {/* Price Section */}
              <div className="mt-2">
                {product.originalPrice && (
                  <span className="text-gray-400 line-through mr-2">
                    {product.originalPrice}
                  </span>
                )}
                <span className="text-lg font-bold text-gray-800">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
            </Link>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <Link href='/shop'>
        <button className="px-[74px] py-[12px] border border-[#B88E2F] rounded-md text-lg font-bold text-[#B88E2F] hover:shadow-md hover:bg-[#B88E2F] hover:text-white transition-all m-3">
          Show More
        </button>
        </Link>
      </div>
    </div>
  );
}
