import React from "react";
export default function SwitchGroup({ hover, ...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="27" y="11" width="14" height="8" rx="4" fill="#DEDEDE" />
      <rect x="27" y="31" width="14" height="8" rx="4" fill="#DEDEDE" />
      <rect x="29" y="13" width="4" height="4" rx="2" fill="#F5F5F5" />
      <rect x="29" y="33" width="4" height="4" rx="2" fill="#F5F5F5" />
      <rect
        x="27.5"
        y="21.5"
        width="13"
        height="7"
        rx="3.5"
        fill="#3C92DC"
        stroke="#3C92DC"
      />
      <rect x="35" y="23" width="4" height="4" rx="2" fill="#fff" />
      <path
        stroke="#DEDEDE"
        stroke-width="2"
        stroke-linecap="round"
        d="M7 15h14M7 25h11M7 35h14"
      />
    </svg>
  );
}
