import React from "react";
import Avatar from "@/common/Avatar";
export default function FirstPromoterHeader() {
  return (
    <div className="bg-neutral-900 px-4 py-2 flex justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="bg-gray-400 h-3 w-3 rounded-full"></div>
        <div className="bg-gray-400 h-3 w-3 rounded-full"></div>
        <div className="bg-gray-400 h-3 w-3 rounded-full"></div>
      </div>
      <div className="bg-neutral-800 rounded-lg px-3 py-1 text-gray-400 flex-grow text-left text-[12px] sm:text-sm">
        https://firstpromoter.com/framer/fonsmans
      </div>
      <Avatar
        url="https://framerusercontent.com/images/1tjOmBRwSiHPDhkIee3WoyH6WnM.jpg"
        styles={`w-10 h-10 max-sm:hidden`}
      />
    </div>
  );
}
