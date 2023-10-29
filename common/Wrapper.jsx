import React from "react";

export default function Wrapper(props) {
  return (
    <div
      className={`${props.styles} ${props.background} h-[450px] rounded-xl m-3 overflow-hidden `}
    >
      {props.title && (
        <div className={props.contentContainerStyle}>
          <h1
            className={`${
              props.paragraph ? "" : "pl-6"
            } text-2xl mb-4 max-sm:text-[21px]`}
          >
            {props.title}
          </h1>
          {props.paragraph && (
            <p className="text-sm max-sm:text-[14px] font-normal">
              {props.paragraph}
            </p>
          )}
        </div>
      )}
      {props.children}
    </div>
  );
}
