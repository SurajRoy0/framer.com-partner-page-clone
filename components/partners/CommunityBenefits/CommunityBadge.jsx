import Button from "@/common/Button";
import CirculerBackground from "@/common/CirculerBackground";
import React from "react";

export default function CommunityBadge() {
  return (
    <div className="bg-neutral-900 h-[450px] rounded-xl m-3 relative overflow-hidden p-8 shadow-inner-glow">
      <div className="absolute top-8 text-start">
        <h1 className="text-2xl mb-4 max-sm:text-[21px]">Community badge</h1>
        <p className="text-sm max-sm:text-[14px] font-normal">
          You’ll get a community badge to show your Partner status.
        </p>
      </div>
      <CirculerBackground color={`bg-sky-600`} />
      <div className="absolute left-[50%] top-[70%] translate-x-[-50%] translate-y-[-50%] w-fit shadow-2xl shadow-sky-600">
        <Button
          styles={`px-6 py-4 rounded-xl font-semibold text-xl md:text-2xl lg:text-3xl tracking-widest bg-gradient-to-r from-sky-400  to-sky-500 z-10`}
          title={`PARTNER`}
          handleClick={() => {}}
        />
      </div>
    </div>
  );
}
