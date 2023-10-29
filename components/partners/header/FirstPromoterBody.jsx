import Avatar from "@/common/Avatar";
import React from "react";

export default function FirstPromoterBody() {
  return (
    <div className="bg-white flex lg:flex-row flex-col justify-between items-center px-[60px] py-[60px] max-lg:pb-0 m-auto gap-6">
      <div className="flex flex-col items-center justify-center gap-3">
        <Avatar
          url="https://framerusercontent.com/images/1tjOmBRwSiHPDhkIee3WoyH6WnM.jpg"
          styles={`w-32 h-32`}
        />
        <h1 className="text-gray-950 text-2xl tracking-wider">Fons Mans</h1>
        <p className="text-sky-500 underline text-sm">Edit Profile</p>
      </div>
      <div className="grid-cols-2 grid">
        <div className="items-center p-9">
          <h1 className="text-sky-500 text-3xl">40k</h1>
          <p className="text-gray-700 mt-2 text-[11px]">CLICKS</p>
        </div>
        <div className="items-center p-9">
          <h1 className="text-sky-500 text-3xl">32</h1>
          <p className="text-gray-700 mt-2 text-[11px]">NEW REFERRALS</p>
        </div>
        <div className="items-center p-9">
          <h1 className="text-sky-500 text-3xl">$720</h1>
          <p className="text-gray-700 mt-2 text-[11px]">AWAITING PAYOUT</p>
        </div>
        <div className="items-center p-9">
          <h1 className="text-sky-500 text-3xl">12</h1>
          <p className="text-gray-700 mt-2 text-[11px]">NEW CUSTOMERS</p>
        </div>
      </div>
    </div>
  );
}
