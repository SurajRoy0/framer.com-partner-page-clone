import React from "react";

export default function Input(props) {
  const { onChange, value, type, placeholder, styles } = props;
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${styles} bg-gray-800 outline-violet-700 opacity-70 rounded-lg p-4`}
    />
  );
}
