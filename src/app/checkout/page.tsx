import Frame from "../components/Frame";
export default function BillingForm() {
  return (
    <div>
      <div
        className="h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/chekout.png')" }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 pt-[98px] pb-[123px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Billing Details */}
          <div className="md:col-span-2 mr-[120px]">
            <h2 className="text-3xl font-bold mb-6">Billing details</h2>
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name (optional)
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Country/Region */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-2">
                  Country / Region
                </label>
                <select id="country" className="w-full p-2 border border-gray-300 rounded">
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>India</option>
                </select>
              </div>

              {/* Street Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Street address
                </label>
                <input
                  id="address"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Town/City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2">
                  Town / City
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Province */}
              <div>
                <label htmlFor="province" className="block text-sm font-medium mb-2">
                  Province
                </label>
                <select id="province" className="w-full p-2 border border-gray-300 rounded">
                  <option>Sindh</option>
                  <option>Balochistan</option>
                  <option>KPK</option>
                  <option>Punjab</option>
                </select>
              </div>

              {/* ZIP Code */}
              <div>
                <label htmlFor="zip" className="block text-sm font-medium mb-2">
                  ZIP code
                </label>
                <input
                  id="zip"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                  Additional information
                </label>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <span>Total</span>
                <span className="text-lg font-semibold text-[#B88E2F]">Rs. 250,000.00</span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-2">
                  <input type="radio" id="bank" name="payment" className="mt-1" />
                  <label htmlFor="bank" className="text-sm">
                    Direct Bank Transfer
                    <p className="text-gray-500 text-sm mt-2">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" id="cash" name="payment" />
                  <label htmlFor="cash" className="text-sm">Cash on Delivery</label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-black py-[17px] px-[102px] rounded-lg border border-black mt-6 hover:bg-black hover:text-white"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}
