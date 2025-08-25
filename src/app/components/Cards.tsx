import React from "react";
import Image from "next/image";
import { setCarouselApi } from "../components/carouselControl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const cardData = [
  {
    heading: "Types Of Business And Personal Accounts",
    paragraph: "You Can Easily Open Any Type Of Account, Including Personal And Business, And Use All The Services You Need Easily And Online. We Will Update And Add Global Services For You.",
    image: "/cards/Personal Account.svg"
  },
  {
    heading: "Opening Of Essential Bank Account",
    paragraph: "It Is Not Impossible To Open An Account In An Online And Simple Way With Just Two Clicks. You Can Now Save Your Time And Create A Fast And Safe Bank Account For Yourself Or Your Loved Ones.",
    image: "/cards/Opening Account.svg"
  },
  {
    heading: "Account Management",
    paragraph: "Access detailed account information anytime, without hidden charges. Easily manage your personal details, monitor your balance, and keep track of your financial activities.",
    image: "/cards/Account Management.svg"
  },
  {
    heading: "Secure Online Banking",
    paragraph: "Enjoy a safe and reliable online banking experience. Protect your funds with advanced security features and manage your accounts from anywhere in the world.",
    image: "/cards/Secure Banking.svg"
  },
  {
    heading: "24/7 Customer Support",
    paragraph: "Get assistance whenever you need it. Our dedicated support team is available around the clock to help you with any issues related to your accounts or transactions.",
    image: "/cards/Customer Support.svg"
  }
];


const Cards = () => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen-xl mx-auto"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {cardData.map((card, index) => (
            <CarouselItem key={index} className="basis-full md:basis-[40%] lg:basis-[40%]">
              <div className="p-1">
                <div className="w-full p-10 bg-white border border-gray-200 rounded-lg shadow-sm h-120">
                  <p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                      {card.heading}
                    </h5>
                  </p>
                  <p className="mb-3 font-normal text-gray-700 text-center">
                    {card.paragraph}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Image src={card.image} alt={card.heading} width={320} height={200} />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/** External controls via UpToDate buttons; internal arrows removed. */}
      </Carousel>
    </div>
  );
};

export default Cards;
