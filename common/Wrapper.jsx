import React from "react";

export default function Wrapper(props) {
  const {
    styles,
    background,
    contentContainerStyle,
    title,
    paragraph,
    children,
  } = props;
  return (
    <div
      className={`${styles} ${background} h-[450px] rounded-xl m-3 overflow-hidden`}
    >
      {title && (
        <div className={contentContainerStyle}>
          <h1
            className={`${
              paragraph ? "" : "pl-6"
            } text-2xl mb-4 max-sm:text-[21px]`}
          >
            {title}
          </h1>
          {paragraph && (
            <p className="text-sm max-sm:text-[14px] font-normal">
              {paragraph}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
