import React from "react";
export default function JSONEditor({ hover,...restProps }) {
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
        y="9"
        width="46"
        height="31"
        rx="3"
        fill="#FCFCFC"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <path
        d="M8.462 13.5H7.341a1 1 0 0 0-1 1v1.739a1 1 0 0 1-.372.778l-1.082.872a.133.133 0 0 0 .007.213l1.024.724a1 1 0 0 1 .423.817V21.5a1 1 0 0 0 1 1H8.5M11.538 22.5h1.121a1 1 0 0 0 1-1v-1.739a1 1 0 0 1 .372-.778l1.082-.872a.133.133 0 0 0-.007-.213l-1.024-.724a1 1 0 0 1-.423-.817V14.5a1 1 0 0 0-1-1H11.5"
        stroke="#B2B2B2"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M6 29h28M6 34h17"
      />
      <path
        d="M39 27h1.5m1.5 0h-1.5m0 0v8m0 0H39m1.5 0H42"
        stroke="#949494"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
