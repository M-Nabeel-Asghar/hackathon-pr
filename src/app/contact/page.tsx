'use client';
import Navbar from '../components/Navbar';
import React from 'react';
import '../style/style.css';
import Frame from '../components/Frame';
import Footer from '../components/Footer';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      {/* Navbar Section */}
      <Navbar />
      
      
      <div className="contact-background h-[316px]"></div>
      
      {/* Header Section */}
      <div className="w-full">
        <div className="text-center mt-[98px] mb-[14px]">
          <h2 className="text-2xl font-bold mb-3">Get In Touch With Us</h2>
          <p className="text-sm text-gray-600 px-[398px]">
            For More Information About Our Product & Services Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        
        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-8 mx-[191px] py-[119px]">
          <div className="space-y-6 p-[95px]">
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-sm text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <div className="text-sm text-gray-600">
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Working Time</h3>
                <div className="text-sm text-gray-600">
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6 pt-[px] px-[52px]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label style={{ marginBottom: '22px' }}>Your name</label>
                <input 
                  type="text"
                  placeholder="Your name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label style={{ marginBottom: '22px' }}>Email address</label>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label style={{ marginBottom: '22px' }}>Subject</label>
                <input 
                  type="text"
                  placeholder="Subject" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label style={{ marginBottom: '22px' }}>Message</label>
                <textarea 
                  placeholder="Hi! I'd like to ask about..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                ></textarea>
              </div>
              <button 
                className="w-[237px] bg-[#B88E2F] hover:bg-[#9c7849] text-white font-bold py-2 px-[89px] rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Frame />
      <Footer />
    </div>
  );
}
