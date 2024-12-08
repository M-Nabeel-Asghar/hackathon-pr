import Image from "next/image";

export default function ProductGrid() {
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
    {
      id: 5,
      name: "Grifo",
      description: "Ergonomic desk chair",
      price: "Rp 1.200.000",
      originalPrice: "Rp 1.500.000",
      image: "/images/image-5.png",
    },
    {
      id: 6,
      name: "Muggo",
      description: "Stylish mug",
      price: "Rp 150.000",
      image: "/images/image-6.png",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute pink chair",
      price: "Rp 850.000",
      originalPrice: "Rp 1.000.000",
      image: "/images/image-7.png",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 300.000",
      image: "/images/image-8.png",
    },
  ];

  return (
    <div className="p-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden p-4 w-[285px] h-[446px] transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-[320px]"
            />

            {/* Hover "Add to Cart" Button */}
            <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 hover:opacity-100 transition-opacity">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700">
                Add to Cart
              </button>
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
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 border rounded-md text-lg font-bold text-[#B88E2F] border-[#B88E2F] hover:shadow-md hover:bg-[#B88E2F] hover:text-white transition-all"
        >
          Show More
        </button>
      </div>
    </div>
  );
}
