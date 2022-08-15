import React from "react";
export default function NumberInput({ hover, ...restProps }) {
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
        x="1"
        y="15"
        width="46"
        height="18"
        rx="3"
        fill="#FCFCFC"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path
        d="M4.5 26.06h8.555M11.629 19.5l-1.426 8.555M8.064 19.5l-1.426 8.555M5.213 22.067H13.5"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M21 24h12"
      />
      <path
        d="M38 20h1.5m1.5 0h-1.5m0 0v8m0 0H38m1.5 0H41"
        stroke="#949494"
        stroke-width="1.6"
        stroke-linecap="round"
      />
    </svg>
  );
}
