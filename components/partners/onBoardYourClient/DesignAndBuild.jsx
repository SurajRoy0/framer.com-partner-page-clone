import Wrapper from "@/common/Wrapper";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

export default function DesignAndBuild() {
  return (
    <Wrapper
      styles={`flex flex-col text-start gap-7 p-8`}
      background={`bg-neutral-900`}
      title={`Design and build for free`}
      paragraph={`Start client projects on your own account and keep iterating for free. When the time is right, hand it over to your client.`}
    >
      <div className="w-full">
        <div className="bg-neutral-800 mb-3 rounded-lg shadow-inner shadow-neutral-700 px-2 py-2 flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-light w-auto">
            <div className="bg-gray-700 p-1 rounded-md">
              <BiSolidRightArrow size={12} color="white" />
            </div>
            <p className="max-sm:text-[12px]">Desktop · 1200</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-light w-auto">
            <p className="max-sm:text-[12px]">Breakpoint</p>
            <div className="bg-gray-700 p-1 rounded-md">
              <AiOutlinePlus size={12} color="white" />
            </div>
          </div>
        </div>
        <img
          className="w-full"
          src="https://framerusercontent.com/images/27lZESu5i7MclY5NRaELtmJNw4.jpg?scale-down-to=1024"
          alt=""
        />
      </div>
    </Wrapper>
  );
}
