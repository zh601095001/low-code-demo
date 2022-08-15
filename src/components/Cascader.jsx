import React from "react";
export default function Cascader({ hover,...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#a)">
        <rect
          x=".2"
          y="3.2"
          width="47.6"
          height="14.6"
          rx="3.8"
          fill="#FCFCFC"
          stroke="#DEDEDE"
          stroke-width="1.6"
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
          stroke="#757575"
          stroke-width="2"
          stroke-linecap="round"
          d="M7 11h2M20 11h9"
        />
        <path
          stroke="#BEBEBE"
          stroke-width="1.6"
          stroke-linecap="round"
          d="M17 9.131 13.131 13"
        />
        <path d="M24 34h22v7a2 2 0 0 1-2 2H24v-9Z" fill="#ECF5FD" />
        <path
          stroke="#757575"
          stroke-width="2"
          stroke-linecap="round"
          d="M17 20h19M26 29h15M28 39h8"
        />
        <path
          d="m16 28 2.5 2 2.5-2M8 19l2.5 2 2.5-2M37 10l2.5 2 2.5-2"
          stroke="#BEBEBE"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="m40 39.361 1.361 1.134L43.63 38"
          stroke="#3C92DC"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
