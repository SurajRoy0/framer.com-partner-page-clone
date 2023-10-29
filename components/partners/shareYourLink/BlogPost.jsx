import Avatar from "@/common/Avatar";
import Wrapper from "@/common/Wrapper";
import React from "react";

export default function BlogPost() {
  return (
    <Wrapper
      styles={`flex flex-col text-start gap-7 p-8`}
      background={`bg-neutral-900`}
      title={`Blog Posts`}
      paragraph={`Link back to Framer from a blog post or tutorial on your own website. `}
    >
      <div className="relative">
        <div
          className={`w-[1000px] h-[700px] p-12 rounded-2xl bg-white shadow-lg overflow-hidden shadow-black absolute top-6 `}
        >
          <h1 className="text-black text-4xl font-extrabold max-w-[400px] mb-3">
            How I Created a Portfolio in{" "}
            <span className="text-orange-700">Framer.</span>
          </h1>
          <p className="text-neutral-700 text-lg font-light max-w-[450px]">
            A step-by-step guide on how to build a portfolio with{" "}
            <span className="text-orange-700">Framer</span> in a matter of
            hours.
          </p>
          <div className="bg-white w-full py-2 border-gray-100 gap-4 text-start">
            <div className="flex justify-start items-center gap-3 my-3">
              <Avatar
                url="https://framerusercontent.com/images/B8580pOtLEBrg7wIFp62oXfFQ.png"
                styles={`w-12 h-12 bg-pink-300`}
              />
              <div className="text-start">
                <p className="text-black font-semibold">Alex James</p>
                <p className="text-gray-400 font-light text-sm">21 NOV 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
