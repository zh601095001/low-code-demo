import React from "react";
export default function KeyValue({ hover,...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 39H7V16a1 1 0 0 1 1-1h31a1 1 0 0 1 1 1v23Z" fill="#fff" />
      <path
        d="M23 38V10M7 27h33.25M7 21h33.25M7 33h33.25"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path d="M40 15H7v-5a1 1 0 0 1 1-1h31a1 1 0 0 1 1 1v5Z" fill="#EEE" />
      <path d="M6.875 15h33.25" stroke="#DEDEDE" stroke-width="1.6" />
      <rect
        x="6.8"
        y="9.8"
        width="33.4"
        height="28.4"
        rx="2.2"
        stroke="#757575"
        stroke-width="1.6"
      />
    </svg>
  );
}
