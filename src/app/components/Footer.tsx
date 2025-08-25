import React from 'react';

const Footer = () => {
  return (
    <div className="relative">
      {/* Main curved section */}
      <div className="relative bg-black text-white overflow-hidden">
        {/* Top curved border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        {/* Content area */}
        <div className="relative z-10 pt-24 pb-16 px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left section - Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded"></div>
                <span className="text-xl font-bold">Brand</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A Modern Design For A Modern World And Advanced Features For Your Convenience
              </p>
            </div>

            {/* Middle section - Quick Access */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Access</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="space-y-3">
                  <a href="#" className="block hover:text-white transition-colors">About Us</a>
                  <a href="#" className="block hover:text-white transition-colors">Services</a>
                  <a href="#" className="block hover:text-white transition-colors">Careers</a>
                  <a href="#" className="block hover:text-white transition-colors">Learn</a>
                </div>
                <div className="space-y-3">
                  <a href="#" className="block hover:text-white transition-colors">Branches</a>
                  <a href="#" className="block hover:text-white transition-colors">FAQ</a>
                  <a href="#" className="block hover:text-white transition-colors">Blog</a>
                </div>
              </div>
            </div>

            {/* Right section - Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">
                To Know The Latest News And Updates, Enter Your Email So That We Can Contact You
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex-1 px-4 py-3 rounded-l-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <button className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-r-full hover:bg-lime-300 transition-colors">
                  Subscribe →
                </button>
              </div>
              
              {/* Social icons */}
              <div className="flex space-x-4 pt-4">
                <span className="text-sm text-gray-300">Contact Us:</span>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">🌐</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">🐦</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">💼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative curved elements at bottom */}
        <div className="absolute bottom-0 left-0 w-full mt-5">
          <svg
            className="w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="squares" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="20" height="20" fill="white" opacity="0.2"/>
                <rect x="20" y="20" width="20" height="20" fill="white" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#squares)"/>
          </svg>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-600">
            Copyright © 2023 Square Card. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;