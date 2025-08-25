import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

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
          <Button>Explore More</Button>
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
