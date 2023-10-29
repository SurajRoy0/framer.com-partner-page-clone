import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

export default function FirstPromoterNavbar() {
  return (
    <div className="flex justify-between p-4 items-center text-gray-500 font-semibold ">
      <h1 className="text-sky-400 max-lg:hidden">FIRST PROMOTER</h1>
      <h1 className="text-sky-400 lg:hidden">L</h1>
      <ul className="flex justify-center items-center gap-4 text-sm">
        <li className="max-lg:hidden">Dashboard</li>
        <li>Rewards</li>
        <li>Payouts</li>
        <li className="max-lg:hidden">Assets</li>
        <li className="max-lg:hidden">info@fonsmans.com</li>
        <AiOutlinePoweroff size={18} fontSize={18} />
      </ul>
    </div>
  );
}
