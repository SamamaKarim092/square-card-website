import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
              What Features Make Our From 2020 Bank Card And Popular ?
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              According To The Needs Of Users And Different Strata, We Have
              Provided A New Bank Card That Can Be The Answer To All Your Needs.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <Image
              src="/about-section-image.png"
              alt="mockup"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
