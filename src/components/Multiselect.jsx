import React from "react";
export default function Multiselect({ hover, ...restProps }) {
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
        y="4"
        width="46"
        height="13"
        rx="3"
        fill="#FCFCFC"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path
        stroke="#757575"
        stroke-width="2"
        stroke-linecap="round"
        d="M7 11h6M18 11h11"
      />
      <rect
        x="4"
        y="15"
        width="43"
        height="29"
        rx="3"
        fill="#FCFCFC"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path
        fill="#ECF5FD"
        d="M5 26h41v8H5zM5 35h41v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6Z"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M10 21h13"
      />
      <path
        stroke="#757575"
        stroke-width="2"
        stroke-linecap="round"
        d="M10 30h15M10 39h17"
      />
      <path stroke="#D8D8D8" stroke-width="1.6" d="M4 25.2h43M4 34.2h43" />
      <path
        d="m38 10 2.5 2 2.5-2"
        stroke="#BEBEBE"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="m39 39.361 1.361 1.134L42.63 38M39 30.361l1.361 1.134L42.63 29"
        stroke="#3C92DC"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
