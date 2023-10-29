import React from "react";

export default function Input(props) {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      className={`${props.styles} bg-gray-800 outline-violet-700 opacity-70 rounded-lg p-4`}
    />
  );
}
