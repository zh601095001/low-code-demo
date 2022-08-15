import React from "react";
export default function ButtonGgroup({ hover,...restProps }) {
  return (
    <svg
      width="48"
      height="48"
      className={hover}
      {...restProps}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="12"
        width="20"
        height="24"
        rx="2"
        fill="#fff"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <rect x="10" y="15" width="9" height="9" rx="4.5" fill="#3C92DC" />
      <rect
        x="26"
        y="12"
        width="20"
        height="24"
        rx="2"
        fill="#fff"
        stroke="#EEE"
        stroke-width="1.6"
      />
      <path
        stroke="#DEDEDE"
        stroke-width="2"
        stroke-linecap="round"
        d="M7 32h10M7 28h10M31 32h10M31 28h10"
      />
      <path
        d="m12.556 19.694 1.36 1.134 2.27-2.495"
        stroke="#fff"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
