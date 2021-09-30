import * as React from "react";

function SvgGithub(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 .75C12.504.75.75 12.797.75 27.668c0 11.895 7.523 21.973 17.953 25.535 1.313.246 1.793-.586 1.793-1.3 0-.645-.023-2.333-.035-4.583-7.3 1.63-8.848-3.61-8.848-3.61-1.195-3.105-2.918-3.937-2.918-3.937-2.379-1.675.176-1.64.176-1.64 2.637.187 4.02 2.777 4.02 2.777 2.343 4.113 6.14 2.93 7.64 2.238.235-1.734.914-2.93 1.664-3.597-5.824-.68-11.953-2.989-11.953-13.301 0-2.941 1.02-5.344 2.695-7.219-.269-.68-1.171-3.422.258-7.125 0 0 2.203-.726 7.22 2.754 2.097-.598 4.335-.89 6.573-.902 2.227.012 4.477.305 6.575.902 5.015-3.48 7.206-2.754 7.206-2.754 1.43 3.703.528 6.446.258 7.125 1.676 1.887 2.696 4.29 2.696 7.219 0 10.336-6.141 12.61-11.989 13.277.938.832 1.782 2.473 1.782 4.98 0 3.599-.035 6.505-.035 7.384 0 .715.468 1.558 1.804 1.289C45.738 49.629 53.25 39.55 53.25 27.668 53.25 12.797 41.496.75 27 .75z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgGithub;