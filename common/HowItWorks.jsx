import Wrapper from "./Wrapper";
import React from "react";

export default function HowItWorks({ items, itemBackground, numberColor }) {
  return (
    <Wrapper
      styles="px-4 py-2 text-start"
      background="bg-neutral-900"
      title="How it works"
    >
      {items?.map((item) => (
        <div
          className={`flex items-center rounded-full my-2 ${
            item?.selected
              ? itemBackground
              : "bg-gradient-to-l from-neutral-800 to-neutral-700 shadow-white"
          }`}
          key={item.id}
        >
          <div
            className={`text-[10px] m-3 px-2 py-1 rounded-full font-extrabold ${
              item?.selected
                ? `bg-white ${numberColor}`
                : "bg-gray-500 text-white"
            }`}
          >
            {item.id}
          </div>
          <p className="text-white font-light">{item.title}</p>
        </div>
      ))}
    </Wrapper>
  );
}
