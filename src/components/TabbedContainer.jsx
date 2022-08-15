import React from "react";
export default function TabbedContainer({ hover, ...restProps }) {
  return (
    <svg
      className={hover}
      {...restProps}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.2"
        y="7.2"
        width="41.6"
        height="33.6"
        rx="4.8"
        fill="white"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <rect x="7" y="26" width="34" height="10" rx="1" fill="#E5E5E5" />
      <line
        x1="4"
        y1="22.2"
        x2="44"
        y2="22.2"
        stroke="#E5E5E5"
        stroke-width="1.6"
      />
      <path
        d="M27.6881 18H30.3376C31.8365 18 32.5716 17.2362 32.5716 16.2166C32.5716 15.2259 31.8685 14.6442 31.1717 14.609V14.5451C31.8109 14.3949 32.3159 13.9474 32.3159 13.1516C32.3159 12.1768 31.6128 11.4545 30.1938 11.4545H27.6881V18ZM28.8738 17.0092V15.0916H30.181C30.9129 15.0916 31.3667 15.5391 31.3667 16.1239C31.3667 16.6449 31.0087 17.0092 30.149 17.0092H28.8738ZM28.8738 14.2383V12.4325H30.0723C30.769 12.4325 31.1302 12.8001 31.1302 13.305C31.1302 13.8803 30.6636 14.2383 30.0467 14.2383H28.8738Z"
        fill="#2B2B2B"
      />
      <rect x="7" y="9" width="17" height="11" rx="5.5" fill="#DAECFC" />
      <path
        d="M13.7298 18L14.2699 16.386H16.7309L17.2742 18H18.5398L16.2323 11.4545H14.7685L12.4642 18H13.7298ZM14.5895 15.4336L15.4748 12.7969H15.526L16.4113 15.4336H14.5895Z"
        fill="#3C92DC"
      />
    </svg>
  );
}
