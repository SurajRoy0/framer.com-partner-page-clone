import React from "react";

export default function Avatar(props) {
  return (
    <div className={`${props.styles} rounded-full overflow-hidden`}>
      <img src={props.url} className="w-[100%] h-[100%]" alt="profile-pic" />
    </div>
  );
}
