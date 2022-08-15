import React from "react";
export default function RichtextEditor({ hover, ...restProps }) {
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
        y="18"
        width="46"
        height="24"
        rx="3"
        fill="#FCFCFC"
        stroke="#D8D8D8"
        stroke-width="1.6"
      />
      <path
        d="M1 13.727h2.937c1.448 0 2.279-.773 2.279-1.831 0-.946-.687-1.54-1.48-1.576v-.064c.72-.15 1.224-.67 1.224-1.419 0-.987-.76-1.655-2.23-1.655H1v6.545Zm1.582-1.275v-1.56h1.007c.604 0 .975.32.975.822 0 .463-.32.738-1.004.738h-.978Zm0-2.58V8.439h.901c.528 0 .863.271.863.706 0 .46-.37.729-.888.729h-.876ZM29.044 7h-1.636v1.023a3.18 3.18 0 0 1-.46 1.704l.971.495c.546-.478 1.125-1.364 1.125-2.2V7Zm2.114 0h-1.636v1.023a3.18 3.18 0 0 1-.46 1.704l.971.495c.545-.478 1.125-1.364 1.125-2.2V7ZM12.135 7.182h-1.384l-1.086 6.545h1.383l1.087-6.545ZM20.196 10.046c.003.659-.448 1.004-.937 1.004-.514 0-.846-.361-.85-.94V7.228h-1.361v3.125c.003 1.148.674 1.848 1.662 1.848.738 0 1.269-.38 1.49-.956h.05v.892h1.307v-4.91h-1.361v2.82Z"
        fill="#949494"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 13.25a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75Z"
        fill="#949494"
      />
      <path
        stroke="#D8D8D8"
        stroke-width="2"
        stroke-linecap="round"
        d="M6 25h28M6 30h17"
      />
      <path
        d="M39 23h1.5m1.5 0h-1.5m0 0v8m0 0H39m1.5 0H42"
        stroke="#949494"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
