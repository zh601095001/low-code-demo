import React from "react";
export default function EditableText({ hover ,...restProps}) {
  return (
    <svg
      width="48"
      className={hover}
      {...restProps}
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#a)" fill="#B2B2B2">
        <path d="M44.078 19.59a.833.833 0 0 1 1.178 0l1.179 1.178a.833.833 0 0 1 0 1.178l-.59.59-2.356-2.358.589-.589ZM42.899 20.768l2.357 2.356-4.715 4.715-2.356-2.357zM37.596 26.071l2.357 2.357-2.334.467a.417.417 0 0 1-.49-.49l.467-2.334Z" />
      </g>
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M16 24h12"
      />
      <path
        d="M3.25 22.074v-1.277c0-.302.245-.547.547-.547H7m3.75 1.824v-1.277a.547.547 0 0 0-.547-.547H7m0 0v7.5m0 0H5.11m1.89 0h2.051"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(37 19)" d="M0 0h10v10H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
