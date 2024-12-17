'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, User } from 'lucide-react'
import Pcart from '../components/Pcart'
import Link from 'next/link'

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const thumbnails = [
    '/images/s1.png?height=80&width=80',
    '/images/s2.png?height=80&width=80',
    '/images/s3.png?height=80&width=80',
    '/images/s4.png?height=80&width=80',
  ]
  
  return (
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 mt-4 md:mt-0">
                {thumbnails.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                />
                ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-[#F9F1E7] rounded-xl">
                <Image
                src="/images/sofa.png?height=500&width=500"
                alt="Asgaard sofa"
                width={500}
                height={500}
                className="w-full rounded-lg"
                />
            </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-semibold mb-2">Asgaard sofa</h1>
                <p className="text-2xl text-primary mb-4">Rs. 250,000.00</p>
                <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(5 Customer Reviews)</span>
                </div>
                <p className="text-muted-foreground">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
            </div>

            {/* Size */}
            <div>
                <p className="font-medium mb-2">Size</p>
                <div className="flex gap-3">
                {['L', 'XL', 'XS'].map((size) => (
                    <button key={size} className="px-4 py-2 border rounded-md hover:bg-gray-100">
                    {size}
                    </button>
                ))}
                </div>
            </div>

            {/* Color */}
            <div>
                <p className="font-medium mb-2">Color</p>
                <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-purple-500 ring-2 ring-offset-2 ring-primary" />
                <button className="w-8 h-8 rounded-full bg-black" />
                <button className="w-8 h-8 rounded-full bg-amber-800" />
                </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center border rounded-md">
                <button
                    className="px-3 py-2 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                    -
                </button>
                <span className="px-3 py-2">{quantity}</span>
                <button
                    className="px-3 py-2 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </button>
                </div>
                <Link href='/cart'>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add To Cart
                </button>
                </Link>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                + Compare
                </button>
            </div>

            {/* SKU, Category, Tags */}
            <div className="space-y-2 text-sm">
                <p><span className="font-medium">SKU:</span> SS001</p>
                <p><span className="font-medium">Category:</span> Sofas</p>
                <p><span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop</p>
            </div>
            </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-12 ">
            <div className="border-t ">
            <nav className="flex gap-7 justify-center mt-[48px]">
                {['description', 'additional', 'reviews'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-lg ${
                    activeTab === tab
                        ? 'border-b-2 border-primary font-medium'
                        : 'text-gray-500'
                    }`}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {tab === 'reviews' && ' [5]'}
                </button>
                ))}
            </nav>
            </div>
            <div className="mt-6 flex justify-center">
            {activeTab === 'description' && (
                <div className="max-w-3xl space-y-4">
                <p className="text-muted-foreground">
                    Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className="text-muted-foreground">
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                </div>
            )}
            {activeTab === 'additional' && (
                <table className="w-full border-collapse">
                <tbody>
                    <tr className="border-b">
                    <td className="py-2 font-medium">Weight</td>
                    <td className="py-2">7 pounds</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-2 font-medium">Dimensions</td>
                    <td className="py-2">10 x 20 x 15 inches</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-2 font-medium">Materials</td>
                    <td className="py-2">Wood, Leather, Metal</td>
                    </tr>
                    <tr className="border-b">
                    <td className="py-2 font-medium">Color Options</td>
                    <td className="py-2">Black, Brown, White</td>
                    </tr>
                    <tr>
                    <td className="py-2 font-medium">Warranty</td>
                    <td className="py-2">2 Years Limited</td>
                    </tr>
                </tbody>
                </table>
            )}
            {activeTab === 'reviews' && (
                <div className="space-y-8">
                {/* Existing Reviews */}
                {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4">
                    <div className="flex items-center gap-4 mb-2">
                        <User className="w-10 h-10 bg-gray-200 rounded-full p-2" />
                        <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        </div>
                    </div>
                    <p className="text-muted-foreground">
                        Great product! The Asgaard sofa is comfortable and stylish. It fits perfectly in my living room.
                    </p>
                    </div>
                ))}

                {/* Add a Review */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Add a Review</h3>
                    <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block mb-2">Rating</label>
                        <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button">
                            <Star className="w-6 h-6 text-gray-300 hover:text-yellow-400" />
                            </button>
                        ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="review" className="block mb-2">Review</label>
                        <textarea
                        id="review"
                        placeholder="Write your review here"
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Submit Review
                    </button>
                    </form>
                </div>
                </div>
            )}
            </div>
        </div>

        {/* Additional Sofa Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
            src="/images/sofa1.png?height=300&width=600"
            alt="Sofa view 1"
            width={600}
            height={300}
            className="w-full rounded-lg"
            />
            <Image
            src="/images/sofa2.png?height=300&width=600"
            alt="Sofa view 2"
            width={600}
            height={300}
            className="w-full rounded-lg"
            />
        </div>
        <Pcart />
        </div>
  )
}

