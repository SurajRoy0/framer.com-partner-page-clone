import CirculerBackground from "@/common/CirculerBackground";
import ApplyForm from "@/components/partners/applyToJoin/ApplyForm";
import React from "react";

export default function ApplyToJoin() {
  return (
    <section className="text-center font-bold p-6 pt-12 lg:p-28 w-full relative overflow-hidden h-[800px] max-sm:h-[900px] shadow-inner-glow">
      <CirculerBackground isBigComponent={true} color={`bg-violet-700`} />
      <div className="max-w-[600px] w-full max-sm:px-3 absolute left-1/2 -translate-x-1/2">
        <h1 className="md:text-5xl text-4xl  mb-4">Become a partner today</h1>
        <p className="text-lg mb-16">
          Join today to start making money and get access to our exclusive
          partner channel on the Framer Community.
        </p>
        <ApplyForm />
        <p className="mt-6 text-white font-normal ">Terms and Conditions</p>
      </div>
    </section>
  );
}
