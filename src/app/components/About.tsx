import React from "react";
import Image from "next/image";

const About = () => {
  const features = [
    { id: 1, title: "Personalization Features" },
    { id: 2, title: "Ease Of Use" },
    { id: 3, title: "User Friendly Cards" },
    { id: 4, title: "Low Fee" },
    { id: 5, title: "Broad Acceptance" }
  ];

  return (
    <div className="mt-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2">
          <div className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0">
           
            <h2 className="text-4xl leading-tight font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-5xl">
              What Features Make Our 
               {/* Pill */}
            <div className="inline-flex items-center align-middle gap-3 text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-3">
              <span>From 2020</span>
              <span className="w-10 h-4 bg-gray-300 dark:bg-gray-700 rounded-full relative">
                <span className="w-4 h-4 bg-purple-500 rounded-full absolute right-0 top-1/2 -translate-y-1/2 ring-2 ring-white dark:ring-gray-900"></span>
              </span>
            </div>Bank Card <span className="text-purple-500">Distinctive</span>
              <br />
              And <span className="text-purple-500">Popular</span>?
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              According To The Needs Of Users And Different Strata, We Have
              Provided A New Bank Card That Can Be The Answer To All Your Needs.
            </p>

            {/* Feature List */}
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* First Column (1, 2, 3) */}
              <div className="space-y-4">
                {features.slice(0, 3).map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-lime-400 text-black font-bold text-sm rounded-full flex-shrink-0">
                      {feature.id}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Second Column (4, 5) */}
              <div className="space-y-4">
                {features.slice(3).map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-lime-400 text-black font-bold text-sm rounded-full flex-shrink-0">
                      {feature.id}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/about-section-image.png"
              alt="About section illustration"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;