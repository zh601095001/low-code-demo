import React from "react";
export default function Email({ hover ,...restProps}) {
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m5.75 22.635 4.687 3.185c.34.23.786.23 1.126 0l4.687-3.185v3.615A2.25 2.25 0 0 1 14 28.5H8a2.25 2.25 0 0 1-2.25-2.25v-3.615Z"
        fill="#B2B2B2"
      />
      <path
        d="M14.572 19.5H7.428c-.927 0-1.678.751-1.678 1.678 0 .123.061.239.163.308l4.335 2.956c.454.31 1.05.31 1.504 0l4.335-2.956a.373.373 0 0 0 .163-.308c0-.927-.751-1.678-1.678-1.678Z"
        fill="#B2B2B2"
      />
    </svg>
  );
}
