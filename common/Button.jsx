import React from "react";

export default function Button({ styles, title }) {
  return (
    <button className={`${styles} text-white`}>{title}</button>
  );
}
