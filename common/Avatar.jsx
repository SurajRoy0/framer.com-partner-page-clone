import React from "react";

export default function Avatar({ styles, url }) {
  return (
    <div className={`${styles} rounded-full overflow-hidden`}>
      <img src={url} className="w-[100%] h-[100%]" alt="profile-pic" />
    </div>
  );
}
