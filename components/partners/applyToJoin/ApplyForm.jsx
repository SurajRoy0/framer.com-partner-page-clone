import Input from "@/common/Input";
import React from "react";

export default function ApplyForm() {
  return (
    <form className="flex flex-col justify-center items-center gap-3">
      <div className="flex max-sm:flex-col justify-center items-center gap-3 w-full">
        <Input type="text" placeholder="Name" styles={`sm:w-1/2 w-full`} />
        <Input type="email" placeholder="Email" styles={`sm:w-1/2 w-full`} />
      </div>
      <textarea
        placeholder="Message"
        className="w-full bg-gray-800 outline-violet-700 opacity-60 rounded-lg p-4 min-h-[150px]"
      />
      <Input type="text" placeholder="Twitter username" styles={`w-full`} />
      <div className="flex items-center justify-start gap-3 w-full">
        <input
          type="checkbox"
          className="w-6 h-6 bg-gray-800 outline-violet-700 opacity-60 rounded-lg"
        />
        <p className="text-[12px]">
          I agree to Framer Partner Program Terms and Conditions
        </p>
      </div>
      <button className="py-4 bg-violet-700 w-full rounded-lg cursor-pointer hover:via-violet-900 transition-all">
        Apply Now
      </button>
    </form>
  );
}
