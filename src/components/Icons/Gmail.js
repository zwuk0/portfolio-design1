import * as React from "react";

function SvgGmail(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 58.881c15.95 0 28.881-12.93 28.881-28.881 0-15.95-12.93-28.881-28.881-28.881C14.05 1.119 1.118 14.049 1.118 30 1.118 45.95 14.05 58.881 30 58.881z"
        fill="#fff"
      />
      <path
        d="M45 15H15a3.761 3.761 0 00-3.75 3.75v22.5A3.761 3.761 0 0015 45h30a3.762 3.762 0 003.75-3.75v-22.5A3.762 3.762 0 0045 15zm0 26.25h-3.75v-16.5L30 31.875 18.75 24.75v16.5H15v-22.5h2.25L30 26.625l12.75-7.875H45v22.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgGmail;
