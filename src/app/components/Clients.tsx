import React from 'react'
import { SiMeta, SiFacebook, SiGoogle, SiApple, SiAmazon } from "react-icons/si";

const Clients = () => {
  return (
    <div className=" py-6">
      <div className="flex justify-center items-center gap-20">
        <SiMeta size={50} className="text-gray-700 hover:text-blue-500 transition-colors duration-300" />
        <SiFacebook size={50} className="text-gray-700 hover:text-blue-600 transition-colors duration-300" />
        <SiGoogle size={50} className="text-gray-700 hover:text-red-500 transition-colors duration-300" />
        <SiApple size={50} className="text-gray-700 hover:text-black transition-colors duration-300" />
        <SiAmazon size={50} className="text-gray-700 hover:text-yellow-500 transition-colors duration-300" />
      </div>
    </div>
  )
}

export default Clients
