"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./ui/logo";

const Navbar = () => {
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  return (
    <header className="text-gray-900 body-font">
      <div className="max-w-screen-xl px-4 py-4 mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <a className="flex items-center">
          <Logo color="black" className="h-8" />
          <span className="ml-3 text-xl font-medium">Square Card</span>
        </a>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center text-base gap-7 relative">
          <a className="hover:text-gray-900">Home</a>

          {/* Learn with dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLearnOpen(!isLearnOpen)}
              className="hover:text-gray-900 flex items-center"
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

          <a className="hover:text-gray-900">Help</a>
          <a className="hover:text-gray-900">Blog</a>
          <a className="hover:text-gray-900">About</a>
        </nav>

        {/* Right: Search + CTA */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="p-2 rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
