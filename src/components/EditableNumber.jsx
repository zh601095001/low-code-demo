import React from "react";
export default function EditableNumber({ hover,...restProps }) {
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
        d="M2.5 26.06h8.555M9.629 19.5l-1.426 8.555M6.064 19.5l-1.426 8.555M3.213 22.067H11.5"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#a)" fill="#B2B2B2">
        <path d="M43.078 19.59a.833.833 0 0 1 1.178 0l1.179 1.178a.833.833 0 0 1 0 1.178l-.59.59-2.356-2.358.589-.589ZM41.899 20.768l2.357 2.356-4.715 4.715-2.356-2.357zM36.596 26.071l2.357 2.357-2.334.467a.417.417 0 0 1-.49-.49l.467-2.334Z" />
      </g>
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M16 24h12"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(36 19)" d="M0 0h10v10H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
