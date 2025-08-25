import React from 'react'
import Image from 'next/image'   // ✅ Import Next.js Image
import { Button } from "./ui/button";

const Features = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-[#eeebf0]">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-7xl w-full">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side: Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
              We Tried To Provide You With All Global Banking Services
            </h2>
          </div>

          {/* Right side: Paragraph + Button */}
          <div className="text-center lg:text-left">
            <p className="mt-3 text-gray-600">
              We Made Every Effort To Ensure That You Have Access To A Comprehensive Range Of Global Banking Services. Our Aim Was To Provide You With A Seamless Banking Experience That Caters To Your Financial Needs Regardless Of Your Location.
            </p>
            <Button className="mt-4">Explore More</Button>
          </div>
        </div>

        {/* Features Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          
          {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Simultaneous And Fast Operation
          </h2>
          <img
            src="/operations.svg"
            alt="Operations"
            className="mx-auto w-36 h-36"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Can Be Connected To All Accounts
          </h2>
          <img
            src="/connected.svg"
            alt="Connected"
            className="mx-auto w-36 h-36"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Strong And Advanced Encryption
          </h2>
          <img
            src="/encryption.svg"
            alt="Encryption"
            className="mx-auto w-36 h-36"
          />
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Comprehensive Electronic Banking Services
          </h2>
          <img
            src="/secure.svg"
            alt="Secure"
            className="mx-auto w-36 h-36"
          />
        </div>

        </div>
      </div>
    </section>
  )
}

export default Features
