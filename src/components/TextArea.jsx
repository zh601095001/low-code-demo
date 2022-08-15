import React from "react";
export default function TextArea({ hover, ...restProps }) {
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
        y="9"
        width="46"
        height="31"
        rx="3"
        fill="#FCFCFC"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <path
        d="M5.5 22.5h9M5.5 20.25h9M13 18h1.5M5.5 14.919v-.787c0-.35.283-.632.632-.632H8.5m3 1.419v-.787a.632.632 0 0 0-.632-.632H8.5m0 0V18m0 0H6.957M8.5 18h1.543"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M6 29h28M6 34h17"
      />
      <path
        d="M39 27h1.5m1.5 0h-1.5m0 0v8m0 0H39m1.5 0H42"
        stroke="#949494"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
