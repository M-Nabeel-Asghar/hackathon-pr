'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import Frame from '../components/Frame'
import Link from 'next/link'

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
        <div
        className="h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cart.png')" }}
        ></div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
{/* Cart Items */}
<div className="lg:w-2/3">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-[#F9F1E7]">
        <tr>
          <th className="text-left py-4 px-6">Product</th>
          <th className="text-left py-4 px-6">Price</th>
          <th className="text-left py-4 px-6">Quantity</th>
          <th className="text-left py-4 px-6">Subtotal</th>
          <th className="py-4 px-6"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="py-4 px-6">
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Image
                src="/images/sofa.png?height=100&width=100"
                alt="Asgaard sofa"
                width={100}
                height={100}
                className="rounded-lg bg-[#d8d1c9]"
              />
              <span className="text-gray-600">Asgaard sofa</span>
            </div>
          </td>
          <td className="py-4 px-6">
            <span className="text-gray-600">Rs. 250,000.00</span>
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center border rounded-md w-24">
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
          </td>
          <td className="py-4 px-6">
            <span className="text-gray-600">Rs. 250,000.00</span>
          </td>
          <td className="py-4 px-6">
            <button className="text-gray-500 hover:text-gray-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        {/* Cart Totals */}
        <div className="lg:w-1/3">
  <div className="bg-[#F9F1E7] p-6 px-[50px]">
    <h2 className="text-2xl font-bold mb-6 text-center">Cart Totals</h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-4">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-400">Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between items-center pb-4">
        <span className="text-gray-600">Total</span>
        <span className="text-[#B88E2F] text-xl">Rs. 250,000.00</span>
      </div>

      {/* Centering the button */}
      <div className="flex justify-center">
        <Link href='/checkout'>
        <button className="border-2 border-black py-[14px] px-[50px] rounded-xl hover:bg-black hover:text-white transition-colors">
          Check Out
        </button>
        </Link>
      </div>
  
     </div>
          </div>
        </div>
      </div>
    </div>
    <Frame />
    </div>
  )
}

