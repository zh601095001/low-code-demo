import React from "react";
export default function Navigation({ hover, ...restProps }) {
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
        x="2.8"
        y="15.8"
        width="42.4"
        height="14.4"
        rx="3.2"
        fill="#fff"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <path
        d="M18 21v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1Z"
        fill="#3C92DC"
      />
      <path
        d="M27 21v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1ZM35 21v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1Z"
        fill="#EEE"
      />
      <g clip-path="url(#a)" fill="#BEBEBE">
        <path d="m13.866 22.642-1.213-1.213v-1.4a.458.458 0 0 0-.917 0v.483l-.903-.902a1.206 1.206 0 0 0-1.667 0l-3.032 3.032a.459.459 0 0 0 .649.648l3.031-3.031a.27.27 0 0 1 .371 0l3.032 3.031a.458.458 0 1 0 .649-.648Z" />
        <path d="M10.16 21.129a.225.225 0 0 0-.32 0l-2.666 2.666a.226.226 0 0 0-.066.16v1.944c0 .456.37.826.827.826h1.32V24.68h1.49v2.045h1.32c.457 0 .827-.37.827-.826v-1.945a.225.225 0 0 0-.066-.16l-2.667-2.665Z" />
      </g>
      <path stroke="#383838" stroke-width="1.6" d="M18 30.2h5" />
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(6 19)" d="M0 0h8v8H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
