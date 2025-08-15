"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Square Card</span>
        </a>

        {/* Navigation */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center relative">
          <a className="mr-7 hover:text-gray-900">Home</a>

          {/* Learn with dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLearnOpen(!isLearnOpen)}
              className="mr-7 hover:text-gray-900 flex items-center"
            >
              Learn
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLearnOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  HTML
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  CSS
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  JavaScript
                </a>
              </div>
            )}
          </div>

          <a className="mr-7 hover:text-gray-900">Help</a>
          <a className="mr-7 hover:text-gray-900">Blog</a>
          <a className="mr-7 hover:text-gray-900">About</a>
        </nav>

        {/* Sign in button */}
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign in
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
