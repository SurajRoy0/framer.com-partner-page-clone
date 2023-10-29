import React from "react";
import IntroContent from "@/components/partners/header/IntroContent";
import FirstPromoterContainer from "@/components/partners/header/FirstPromoterContainer";
export default function Header() {
  return (
    <div
      className={`radial-gradient mt-16 pt-24 text-center pb-6 md:pb-[100px] p-6`}
    >
      <IntroContent />
      <FirstPromoterContainer />
    </div>
  );
}
