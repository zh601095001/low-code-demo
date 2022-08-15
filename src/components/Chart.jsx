import React from "react";
export default function Chart({ hover,...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#DEDEDE"
        stroke-width="1.6"
        stroke-linecap="round"
        d="M7.8 29.2h32.4M7.8 19.2h32.4M7.8 9.2h32.4"
      />
      <rect
        x="16"
        y="23"
        width="16"
        height="3"
        rx=".5"
        transform="rotate(90 16 23)"
        fill="#DAECFC"
      />
      <rect
        x="22"
        y="26"
        width="13"
        height="3"
        rx=".5"
        transform="rotate(90 22 26)"
        fill="#85C1F4"
      />
      <rect
        x="34"
        y="12"
        width="27"
        height="3"
        rx=".5"
        transform="rotate(90 34 12)"
        fill="#3C92DC"
      />
      <rect
        opacity=".91"
        x="28"
        y="18"
        width="21"
        height="3"
        rx=".5"
        transform="rotate(90 28 18)"
        fill="#4AA1ED"
      />
      <path
        stroke="#DEDEDE"
        stroke-width="1.6"
        stroke-linecap="round"
        d="M7.8 39.2h32.4"
      />
    </svg>
  );
}
