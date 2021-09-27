import * as React from "react";

function SvgLinkidIn(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"
        fill="#FFFEFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.883 43.823V25.524h-5.655v18.3h5.655zm0-24.785c-.034-1.637-1.125-2.884-2.898-2.884-1.773 0-2.932 1.247-2.932 2.884 0 1.602 1.125 2.885 2.864 2.885h.034c1.807 0 2.932-1.283 2.932-2.885zm9.227 24.785V33.397c0-.558.04-1.115.204-1.513.45-1.116 1.47-2.27 3.184-2.27 2.246 0 3.654 1.274 3.654 3.783v10.426h5.694V33.118c0-5.734-3.06-8.402-7.144-8.402-3.348 0-4.817 1.871-5.633 3.145l.04-2.447h-5.683c.081 1.752 0 18.41 0 18.41h5.684z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgLinkidIn;
