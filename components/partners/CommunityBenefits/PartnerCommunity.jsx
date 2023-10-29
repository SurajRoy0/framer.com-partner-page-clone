import React from "react";
import Wrapper from "@/common/Wrapper";

export default function PartnerCommunity() {
  return (
    <Wrapper
      contentContainerStyle={`pl-8`}
      styles={`flex flex-col text-start gap-7 pt-8`}
      background={`bg-neutral-900`}
      title={`Blog Posts`}
      paragraph={`Link back to Framer from a blog post or tutorial on your own website. `}
    >
      <div className="relative">
        <div
          className={`w-full h-[700px] rounded-2xl flex bg-white shadow-lg overflow-hidden shadow-black absolute top-6 -right-[42px] `}
        >
          <div className="h-full w-6/12 bg-neutral-800 p-2 text-[12px] tracking-widest text-neutral-400 flex flex-col justify-start gap-2">
            <h1 className="text-white text-sm px-3 pt-3 ">Community</h1>
            <div className="flex justify-between items-center px-2 ">
              <p>🎓 Tutorials</p>
              <span className="font-light px-2 py-1 border border-neutral-400 rounded-md">
                1
              </span>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>🎁 Remix</p>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>🌍 Templates</p>
              <span className="font-light px-1 py-1 border border-neutral-400 rounded-md">
                15
              </span>
            </div>
            <div className="flex justify-between items-center bg-gradient-to-r from-sky-700 to-blue-800 px-2 py-3 rounded-lg">
              <p>✅ Partners</p>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>💪🏼 Experts</p>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>🌟 Resources</p>
              <span className="font-light px-2 py-1 border border-neutral-400 rounded-md">
                5
              </span>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>✨ Showcase</p>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>🗓️ Events</p>
              <span className="font-light px-2 py-1 border border-neutral-400 rounded-md">
                2
              </span>
            </div>
            <div className="flex justify-between items-center px-2 ">
              <p>🖥️ Developers</p>
            </div>
          </div>
          <div className="h-full w-7/12 bg-[#111111]"></div>
        </div>
      </div>
    </Wrapper>
  );
}
