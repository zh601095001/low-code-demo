import React from "react";
export default function CheckboxGroup({ hover,...restProps }) {
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
        d="m8.166 13.791 1.75 1.458 2.917-3.208M8.166 34.458l1.75 1.458 2.917-3.208"
        stroke="#F5F5F5"
        stroke-width="1.2"
      />
      <rect
        x="9.5"
        y="6.5"
        width="9"
        height="9"
        rx="2.5"
        fill="#3C92DC"
        stroke="#3C92DC"
      />
      <rect
        x="9.5"
        y="32.5"
        width="9"
        height="9"
        rx="2.5"
        fill="#3C92DC"
        stroke="#3C92DC"
      />
      <path
        d="m12 11.361 1.361 1.134L15.63 10M12 37.361l1.361 1.134L15.63 36"
        stroke="#fff"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke="#DEDEDE"
        stroke-width="2"
        stroke-linecap="round"
        d="M23 10.666h14M23 36.666h14"
      />
      <rect
        x="9.5"
        y="19.5"
        width="9"
        height="9"
        rx="2.5"
        fill="#fff"
        stroke="#DEDEDE"
      />
      <path
        stroke="#DEDEDE"
        stroke-width="2"
        stroke-linecap="round"
        d="M23 23.334h11"
      />
    </svg>
  );
}
