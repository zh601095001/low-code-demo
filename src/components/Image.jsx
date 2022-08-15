import React from "react";
export default function Image({ hover ,...restProps}) {
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
        x="5.8"
        y="10.8"
        width="36.4"
        height="26.4"
        rx="3.2"
        fill="#fff"
        stroke="#757575"
        stroke-width="1.6"
      />
      <circle cx="13.5" cy="18.5" r="3.5" fill="#EECA86" />
      <path
        d="M27.923 18.366a1 1 0 0 1 1.696-.018l8.395 13.113A1 1 0 0 1 37.172 33H20.781a1 1 0 0 1-.854-1.52l7.996-13.114Z"
        fill="#82BF99"
      />
      <path
        d="M16.676 26.199a1 1 0 0 1 1.648 0l3.599 5.234A1 1 0 0 1 21.099 33H13.9a1 1 0 0 1-.824-1.567l3.599-5.234Z"
        fill="#82BF99"
      />
    </svg>
  );
}