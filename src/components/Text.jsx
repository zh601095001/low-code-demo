import React from "react";
export default function Text({ hover, ...restProps }) {
  return (
    <svg
      className={hover}
      {...restProps}
      width="48"
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11H6a2 2 0 0 0-2 2v4M38 38h4a2 2 0 0 0 2-2v-4M44 17v-4a2 2 0 0 0-2-2h-4M4 32v4a2 2 0 0 0 2 2h4"
        stroke="#D8D8D8"
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M28 17h11M28 22h11M9 28h30M9 33h24"
      />
      <path
        d="M8.622 15.844V23h1.468v-4.675h.059l1.852 4.64h1l1.851-4.623h.06V23h1.467v-7.156h-1.866l-1.97 4.808h-.084l-1.971-4.808H8.622Z"
        fill="#8E8E8E"
      />
      <path
        d="M21.006 16v7m0 0L24 20m-2.994 3L18 20"
        stroke="#8E8E8E"
        stroke-width="1.4"
      />
    </svg>
  );
}
