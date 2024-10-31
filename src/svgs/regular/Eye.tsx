import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEye = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.023 7.625a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75ZM9.148 12a2.875 2.875 0 1 1 5.75 0 2.875 2.875 0 0 1-5.75 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.023 4.5c-4.312 0-8.025 2.556-9.722 6.235a3.022 3.022 0 0 0 0 2.53c1.697 3.679 5.41 6.235 9.722 6.235 4.312 0 8.026-2.556 9.723-6.235.37-.802.37-1.728 0-2.53-1.697-3.679-5.41-6.235-9.723-6.235Zm-8.36 6.863C5.125 8.194 8.32 6 12.023 6c3.704 0 6.899 2.194 8.36 5.363.187.404.187.87 0 1.274C18.923 15.806 15.728 18 12.024 18c-3.703 0-6.898-2.194-8.36-5.363a1.521 1.521 0 0 1 0-1.274Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
