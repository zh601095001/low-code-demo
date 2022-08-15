import React from "react";
export default function CheckboxTree({ hover,...restProps }) {
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
        d="M11.174 17.757a1 1 0 0 1 0 1.486L8.67 21.498c-.644.58-1.669.122-1.669-.743v-4.51c0-.865 1.025-1.322 1.669-.743l2.505 2.255ZM11.174 29.757a1 1 0 0 1 0 1.486L8.67 33.498c-.644.58-1.669.122-1.669-.743v-4.51c0-.865 1.025-1.322 1.669-.743l2.505 2.255Z"
        fill="#DEDEDE"
      />
      <rect
        x="14.5"
        y="14.5"
        width="9"
        height="9"
        rx="2.5"
        fill="#3C92DC"
        stroke="#3C92DC"
      />
      <path
        d="m17 19.361 1.361 1.134L20.63 18"
        stroke="#fff"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke="#DEDEDE"
        stroke-width="2"
        stroke-linecap="round"
        d="M28 18.666h14"
      />
      <rect
        x="14.5"
        y="26.5"
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
        d="M28 30.334h11"
      />
    </svg>
  );
}
