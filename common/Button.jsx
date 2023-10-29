import React from "react";

export default function Button(props) {
  return (
    <button className={`${props.styles} text-white`}>{props.title}</button>
  );
}
