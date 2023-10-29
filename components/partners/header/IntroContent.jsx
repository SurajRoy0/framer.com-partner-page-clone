import React from "react";
import Button from "@/common/Button";

export default function IntroContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <h3
        className={`text-gradient font-extrabold tracking-widest text-center  sm:text-md`}
      >
        PARTNER PROGRAM
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-[700px] text-center">
        Earn money doing what you love.
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl max-w-[750px] text-gray-300 font-semibold leading-relaxed text-center">
        Create content to help spread the word about Framer and earn 50% of
        every subscription you bring in. Join our community for exciting job and
        project opportunities.
      </p>
      <Button
        styles={`px-6 py-4 rounded-lg font-semibold text-xl md:text-2xl lg:text-3xl tracking-widest bg-gradient-to-r from-sky-400  to-sky-500`}
        title={`Apply For Partner`}
        handleClick={() => {}}
      />
    </div>
  );
}
