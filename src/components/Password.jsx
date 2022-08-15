import React from "react";
export default function Password({ hover, ...restProps }) {
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
        d="M24.031 26.264a2.031 2.031 0 1 0 0-4.062 2.031 2.031 0 0 0 0 4.062ZM30.912 26.264a2.031 2.031 0 1 0 0-4.063 2.031 2.031 0 0 0 0 4.063Z"
        fill="#D8D8D8"
      />
      <g clip-path="url(#a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.178 25.824a4.067 4.067 0 1 0-2.047-2.222l-4.021 4.02a.375.375 0 0 0-.11.266v1.735c0 .207.168.375.375.375h1.25A.375.375 0 0 0 7 29.623v-.248c0-.207.168-.375.375-.375h1.25A.375.375 0 0 0 9 28.625v-1.246c0-.207.168-.375.375-.375h.47c.1 0 .194-.04.265-.11l1.068-1.07Zm1.754-4.687a1.017 1.017 0 1 0 2.034 0 1.017 1.017 0 0 0-2.034 0Z"
          fill="#B2B2B2"
        />
      </g>
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
