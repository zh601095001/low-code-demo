import React from "react";
export default function Table({ hover, ...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M43 38H5V17a1 1 0 0 1 1-1h36a1 1 0 0 1 1 1v21Z" fill="#fff" />
      <path d="M5 35h38v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1Z" fill="#DEDEDE" />
      <path
        d="M12 38V11M28 38V11M5 22h38M5 29h38M20 38V11M36 38V11"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path d="M43 16H5v-5a1 1 0 0 1 1-1h36a1 1 0 0 1 1 1v5Z" fill="#DEDEDE" />
      <rect
        x="4.8"
        y="10.8"
        width="38.4"
        height="27.4"
        rx="2.2"
        stroke="#757575"
        stroke-width="1.6"
      />
    </svg>
  );
}
