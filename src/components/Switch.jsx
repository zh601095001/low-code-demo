import React from "react";
export default function Switch({ hover, ...restProps }) {
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
        y="21.5"
        width="13"
        height="7"
        rx="3.5"
        fill="#3C92DC"
        stroke="#3C92DC"
      />
      <rect x="15" y="23" width="4" height="4" rx="2" fill="#fff" />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M25 25h16"
      />
    </svg>
  );
}
