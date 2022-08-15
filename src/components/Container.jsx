import React from "react";
export default function Container({ hover ,...restProps}) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.2"
        y="7.2"
        width="41.6"
        height="33.6"
        rx="4.8"
        fill="#fff"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <path stroke="#D8D8D8" stroke-width="1.6" d="M4 16.2h40" />
      <rect x="7" y="19" width="34" height="18" rx="2" fill="#EEE" />
    </svg>
  );
}