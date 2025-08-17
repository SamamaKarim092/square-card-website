import React from "react";

const UpToDate = () => {
  return (
    <section className="bg-[#eeebf0]">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        
        {/* Left Side (Heading) */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-5xl">
            Up-To-Date And Fast Banking Services In One Place
          </h1>
        </div>

        {/* Right Side (Buttons) */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center mr:10">
          <div className="flex gap-4">
            {/* Previous Button */}
            <button className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300">
              Previous
            </button>

            {/* Forward Button */}
            <button className="px-6 py-2 rounded-lg bg-green-300 text-white hover:bg-green-400">
              Forward
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpToDate;
