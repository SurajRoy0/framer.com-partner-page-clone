import Avatar from "@/common/Avatar";
import Button from "@/common/Button";
import Wrapper from "@/common/Wrapper";
import React from "react";

export default function TemplateSite() {
  return (
    <Wrapper
      styles={`flex flex-row max-lg:flex-col text-start gap-7 p-8`}
      contentContainerStyle={`lg:w-4/12`}
      background={`bg-gradient-to-b from-red-500 to-violet-700`}
      title={`Use your unique URL when selling templates.`}
      paragraph={`It doesn’t matter if your template is free or paid; when a user duplicates it, they use your unique referral link. If they get on a paid plan afterward, you’ll earn 50% of that subscription for a year. `}
    >
      <div className="relative">
        <div
          className={`w-[1000px] h-[700px] rounded-2xl bg-white shadow-lg overflow-hidden shadow-black absolute top-6 `}
        >
          <div className="bg-white w-full px-4 py-2 flex justify-between items-center border-gray-100 gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 h-3 w-3 rounded-full"></div>
              <div className="bg-gray-400 h-3 w-3 rounded-full"></div>
              <div className="bg-gray-400 h-3 w-3 rounded-full"></div>
            </div>
            <div className="bg-gray-200 rounded-lg font-light px-3 py-1 text-gray-400 flex-grow text-left text-[12px] sm:text-sm">
              framer.com/projects/new?duplicate=123
              <span className=" ml-2 rounded-md bg-gradient-to-l from-violet-500 to-red-400 p-1 text-white">
                &via=huseyin
              </span>
            </div>
            <Avatar
              url="https://framerusercontent.com/images/1tjOmBRwSiHPDhkIee3WoyH6WnM.jpg"
              styles={`w-10 h-10 max-sm:hidden`}
            />
          </div>
          <div className="md:px-[100px] pt-[70px]">
            <div className="flex justify-start items-start gap-10">
              <div className="rounded-xl overflow-hidden w-64 shadow-gray-800 shadow-lg">
                <img
                  className="cursor-pointer w-full"
                  src="https://framerusercontent.com/images/dyocZg30147zQ0AEqCai5BqHtPU.jpg?scale-down-to=512"
                  alt="template"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-12">
                <h1 className="text-black mb-6">LOGO</h1>
                <h1 className="text-black font-semibold text-xl">Feather</h1>
                <h1 className="text-gray-600 mb-8 font-semibold text-lg">
                  Huseyin Emanet
                </h1>
                <Button
                  styles={`px-6 text-[16px] font-md py-3 rounded-lg font-semibold bg-gray-400 text-white`}
                  title={`Copy Template`}
                  handleClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
