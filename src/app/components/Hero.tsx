import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-#eeebf0">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
            A Modern Bank Card For A Modern World
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            This Modern Bank Card Embraces The Era Of Contactless Payments, Enabling
            Swift And Effortless Transactions With Just A Tap Or Wave. No More Fumbling For
            Cash Or Struggling With Outdated Payment Methods.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Explore More
          </a>
        </div>

        {/* Optimized Image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/hero-section-image.png"
            alt="mockup"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
