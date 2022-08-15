import React from "react";
export default function Checkbox({ hover,...restProps }) {
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
        x="7.5"
        y="19.5"
        width="9"
        height="9"
        rx="2.5"
        fill="#3C92DC"
        stroke="#3C92DC"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M21 24h20"
      />
      <path
        d="m10 24.361 1.361 1.134L13.63 23"
        stroke="#fff"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
