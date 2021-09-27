import * as React from "react";

function SvgDoubleArrow(props) {
  return (
    <svg
      width={80}
      height={80}
      fill="none"
      viewBox=" 0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M42.156 69.563l-6.625-6.626L58.47 40 35.53 17.062l6.625-6.625L71.72 40 42.156 69.563z"
        fill="#fff"
      />
      <path
        d="M14.906 69.563l-6.625-6.626L31.22 40 8.28 17.062l6.625-6.625L44.47 40 14.906 69.563z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgDoubleArrow;
