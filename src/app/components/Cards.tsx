import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-16">

      {/* Card 1 */}
      <div className="max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow-sm h-104">
        <p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
            Types Of Business And Personal Accounts
          </h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 text-center">
          You Can Easily Open Any Type Of Account, Including Personal And
          Butiness, And Use All The Services You Noed Eatily And Online. We
          Wil Update And Add Global Services For You.
        </p>
      </div>

      {/* Card 2 */}
      <div className="max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow-sm h-104">
        <p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
            Opening Of Essential Bank Account
          </h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 text-center">
          It Is Not impossible To Open An Account in An Online And Simple
          Way With Just Two Clicks. You Can Now Save Your Time And
          Creato A Fast And Safe flank Account For Yourself Or Your Loved Ones.
        </p>
      </div>

      {/* Card 3 */}
      <div className="max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow-sm h-104">
        <p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
            Noteworthy technology acquisitions 2021
          </h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 text-center">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>

    </div>
  );
};

export default Cards;
