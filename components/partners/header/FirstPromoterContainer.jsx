import React from "react";

import FirstPromoterHeader from "./FirstPromoterHeader";
import FirstPromoterNavbar from "./FirstPromoterNavbar";
import FirstPromoterBody from "./FirstPromoterBody";

export default function FirstPromoterContainer() {
  return (
    <div
      className={`md:max-w-[75%] rounded-2xl m-auto mt-10 overflow-hidden bg-gray-100 shadow-lg shadow-black`}
    >
      <FirstPromoterHeader />
      <FirstPromoterNavbar />
      <div className="md:px-[100px] py-[60px]">
        <FirstPromoterBody />
      </div>
    </div>
  );
}
