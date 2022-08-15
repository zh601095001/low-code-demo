import React from "react";
export default function TextInput({ hover, ...restProps }) {
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
        stroke="#D8D8D8"
        stroke-width="1.6"
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
      <path
        d="M7.25 22.074V20.98a.73.73 0 0 1 .73-.73H11m3.75 1.824V20.98a.73.73 0 0 0-.73-.73H11m0 0v7.5m0 0H9.11m1.89 0h2.051"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
