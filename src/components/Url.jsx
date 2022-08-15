import React from "react";
export default function Url({ hover, ...restProps }) {
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
        y="15"
        width="46"
        height="18"
        rx="3"
        fill="#FCFCFC"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <g
        clip-path="url(#a)"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
      >
        <path d="m12 21.703-2.024-2.088a2.321 2.321 0 0 0-3.222-.091l-.099.091a2.181 2.181 0 0 0-.09 3.14l2.025 2.087M10.217 26.521l1.76 1.815a2.39 2.39 0 0 0 3.318.094v0a2.246 2.246 0 0 0 .092-3.233l-1.76-1.815M12.5 25.5l-3-3" />
      </g>
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M21 24h12"
      />
      <path
        d="M38 20h1.5m1.5 0h-1.5m0 0v8m0 0H38m1.5 0H41"
        stroke="#949494"
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(5 18)" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
