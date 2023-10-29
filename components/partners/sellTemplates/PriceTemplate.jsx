import Avatar from "@/common/Avatar";
import Wrapper from "@/common/Wrapper";
import React from "react";

export default function PriceTemplate() {
  return (
    <Wrapper
      styles={`flex flex-col text-start gap-7 p-8`}
      background={`bg-neutral-900`}
      title={`Pricing your template`}
      paragraph={`You can choose to make your template free or paid. Free templates get a lot of exposure in the app and are easy to pick by many users but convert a bit lower to site plans. Paid templates have a higher barrier to entry because users first have to buy your template but convert at a higher rate to site plans.

  `}
    >
      <div className="relative">
        <div className="w-64 max-sm:w-52 z-10 absolute -bottom-96 max-sm:-bottom-72 right-60 max-sm:right-44 rounded-xl overflow-hidden bg-gradient-to-t from-white via-gray-400 to-gray-50 p-1">
          <img
            className="w-full h-full rounded-xl"
            src="https://framerusercontent.com/images/iFQUNt6KSHKJZ00KpBwRVqhWEkI.jpg"
            alt="papers"
          />
        </div>
        <button className="max-sm:hidden py-2 px-3 rounded-full bg-white text-pink-600 shadow-2xl shadow-white absolute top-16  left-28 z-20">
          Free
        </button>
        <div className="w-64 max-sm:w-52 z-20 absolute -bottom-72 max-sm:-bottom-60 right-4 shadow-2xl shadow-pink-600 rounded-xl overflow-hidden bg-gradient-to-t from-pink-600 via-red-600 to-pink-600 p-1">
          <img
            className="w-full h-full rounded-xl relative"
            src="https://framerusercontent.com/images/CoAYpNVSP8zfDe269HZzerP53zY.jpg?scale-down-to=1024"
            alt="papers"
          />
        </div>

        <button className="py-2 px-3 rounded-full bg-pink-600 text-white shadow-2xl shadow-pink-800 absolute -top-8 max-sm:-top-0 max-sm:left-3 left-[340px] z-20">
          $28
        </button>
      </div>
    </Wrapper>
  );
}
