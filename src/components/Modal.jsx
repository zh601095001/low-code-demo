import React from "react";
export default function Modal({ hover, ...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="33" width="20" height="9" rx="3" fill="#3C92DC" />
      <rect
        x="8.2"
        y="8.2"
        width="35.6"
        height="27.6"
        rx="4.8"
        fill="#fff"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <path stroke="#D8D8D8" stroke-width="1.6" d="M9 20.2h34" />
      <rect x="12" y="23" width="28" height="9" rx="1" fill="#EEE" />
      <path
        d="M34.203 12.063 39 17m-5-.063L38.797 12"
        stroke="#D8D8D8"
        stroke-width="1.4"
      />
    </svg>
  );
}
