import React from "react";
export default function Listbox({ hover, ...restProps }) {
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
        x="2.2"
        y="5.2"
        width="43.6"
        height="37.6"
        rx="3.8"
        fill="#FCFCFC"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path d="M3 34h42v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5Z" fill="#ECF5FD" />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M8 20h13M8 11h13M8 29h15"
      />
      <path
        stroke="#757575"
        stroke-width="2"
        stroke-linecap="round"
        d="M8 38h17"
      />
      <path
        stroke="#E8E8E8"
        stroke-width="1.6"
        d="M3 24.2h42M3 15.2h42M3 33.2h42"
      />
      <path
        d="m39 38.361 1.361 1.134L42.63 37"
        stroke="#3C92DC"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
