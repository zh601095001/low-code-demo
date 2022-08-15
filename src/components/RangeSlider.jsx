import React from "react";
export default function RangeSlider({ hover, ...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="23" width="44" height="3" rx="1.5" fill="#D8D8D8" />
      <rect x="12" y="23" width="22" height="3" rx="1.5" fill="#3c92dc" />
      <circle cx="34.333" cy="24.399" r="3.899" fill="#fff" stroke="#BEBEBE" />
      <circle cx="14.399" cy="24.399" r="3.899" fill="#fff" stroke="#BEBEBE" />
    </svg>
  );
}
