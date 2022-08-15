import React from "react";
export default function EditableTextArea({ hover ,...restProps}) {
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
      <g clip-path="url(#clip0_3461_15387)">
        <g clip-path="url(#clip1_3461_15387)">
          <path
            d="M45.0772 19.5893C45.4027 19.2638 45.9303 19.2638 46.2558 19.5893L47.4343 20.7678C47.7597 21.0932 47.7597 21.6208 47.4343 21.9463L46.845 22.5355L44.488 20.1785L45.0772 19.5893Z"
            fill="#B2B2B2"
          />
          <rect
            x="43.8989"
            y="20.7676"
            width="3.33333"
            height="6.66667"
            transform="rotate(45 43.8989 20.7676)"
            fill="#B2B2B2"
          />
          <path
            d="M38.5952 26.0713L40.9522 28.4283L38.6188 28.895C38.3273 28.9533 38.0702 28.6963 38.1285 28.4047L38.5952 26.0713Z"
            fill="#B2B2B2"
          />
        </g>
        <line
          x1="15"
          y1="22"
          x2="33"
          y2="22"
          stroke="#D8D8D8"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="15"
          y1="27"
          x2="26"
          y2="27"
          stroke="#D8D8D8"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M0.96875 22.565V21.6073C0.96875 21.2546 1.25462 20.9688 1.60726 20.9688H4.25M7.53125 22.565V21.6073C7.53125 21.2546 7.24538 20.9688 6.89274 20.9688H4.25M4.25 20.9688V27.5312M4.25 27.5312H2.59696M4.25 27.5312H6.04493"
          stroke="#B2B2B2"
          stroke-width="1.3125"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3461_15387">
          <rect width="48" height="48" fill="white" />
        </clipPath>
        <clipPath id="clip1_3461_15387">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(38 19)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
