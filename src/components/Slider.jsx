import React from "react";
export default function Slider({ hover, ...restProps }) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="22" width="34" height="3" rx="1.5" fill="#D8D8D8" />
      <rect x="5" y="22" width="29" height="3" rx="1.5" fill="#4AA1ED" />
      <circle cx="31.399" cy="23.399" r="3.899" fill="#fff" stroke="#BEBEBE" />
    </svg>
  );
}
