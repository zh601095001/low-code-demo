import React from "react";
export default function MultiselectListbox({ hover, ...restProps }) {
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
      <path
        fill="#ECF5FD"
        d="M3 25h42v8H3zM3 34h42v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5Z"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M8 20h13M8 11h13"
      />
      <path
        stroke="#757575"
        stroke-width="2"
        stroke-linecap="round"
        d="M8 29h15M8 38h17"
      />
      <path
        stroke="#E8E8E8"
        stroke-width="1.6"
        stroke-linecap="round"
        d="M3.8 24.2h40.4M3.8 15.2h40.4M3.8 33.2h40.4"
      />
      <path
        d="m38 38.361 1.361 1.134L41.63 37M38 29.361l1.361 1.134L41.63 28"
        stroke="#3C92DC"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
