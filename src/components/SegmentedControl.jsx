import React from "react";
export default function SegmentedControl({ hover, ...restProps }) {
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
        opacity=".75"
        d="M.8 18A3.2 3.2 0 0 1 4 14.8h40a3.2 3.2 0 0 1 3.2 3.2v13a3.2 3.2 0 0 1-3.2 3.2H4A3.2 3.2 0 0 1 .8 31V18Z"
        fill="#EDEDED"
        stroke="#DEDEDE"
        stroke-width="1.6"
      />
      <path
        d="M22.956 19a3 3 0 0 1 3-3h16.957a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H25.957a3 3 0 0 1-3-3V19Z"
        fill="#fff"
        stroke="#EDEDED"
      />
      <path
        d="M13.134 21.454h-.962l-1.633 1.068v.946l1.566-1.023h.038V28h.991v-6.546Z"
        fill="#979797"
      />
      <path
        d="M32.826 28h4.309v-.847h-2.947v-.048l1.3-1.361c1.2-1.212 1.541-1.79 1.541-2.522 0-1.052-.856-1.857-2.09-1.857-1.224 0-2.12.793-2.12 1.988h.944c-.003-.703.45-1.163 1.157-1.163.664 0 1.17.409 1.17 1.06 0 .58-.346.995-1.049 1.74l-2.215 2.294V28Z"
        fill="#3D3D3D"
      />
    </svg>
  );
}
