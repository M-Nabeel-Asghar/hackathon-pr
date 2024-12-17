'use client';
import React from 'react';
import '../style/style.css';
import Frame from '../components/Frame';


export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>

      
      <div className="contact-background h-[316px] bg-cover bg-center"></div>
      
      {/* Header Section */}
      <div className="w-full px-4 lg:px-16">
        <div className="text-center mt-12 mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Get In Touch With Us</h2>
          <p className="text-sm lg:text-lg text-gray-600 leading-relaxed px-4 md:px-20">
            For More Information About Our Product & Services Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mx-4 lg:mx-[50px] py-6 md:py-12">
          {/* Contact Info Section */}
          <div className="space-y-6 p-4 md:p-6">
            {/* Address Info */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 md:h-9 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Address</h3>
                <p className="text-sm text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            {/* Phone Info */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 md:h-9 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Phone</h3>
                <div className="text-sm text-gray-600">
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
            </div>

            {/* Working Time Info */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 md:h-9 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Working Time</h3>
                <div className="text-sm text-gray-600">
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm md:text-base block mb-2">Your Name</label>
                <input 
                  type="text"
                  placeholder="Your name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm md:text-base block mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm md:text-base block mb-2">Subject</label>
                <input 
                  type="text"
                  placeholder="Subject" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm md:text-base block mb-2">Message</label>
                <textarea 
                  placeholder="Hi! I'd like to ask about..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                ></textarea>
              </div>
              <button 
                className="w-full md:w-auto bg-[#B88E2F] hover:bg-[#9c7849] text-white font-bold py-2 px-[20px] md:px-[50px] rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Frame />
    </div>
  );
}
