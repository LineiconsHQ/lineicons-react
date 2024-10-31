import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScoter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M9.75 4.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 3.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0-1.5Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M10.5 17.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3ZM15.675 3.5a3.765 3.765 0 0 1 0 1.5H18.5a.75.75 0 0 0 0-1.5h-2.825ZM15.261 6.102c-.25.441-.589.827-.99 1.133a3.87 3.87 0 0 1 1.604 3.14v4.5c0 .933-.33 1.79-.88 2.458.004.056.005.111.005.167v1.836a5.37 5.37 0 0 0 2.375-4.461v-4.5c0-1.742-.829-3.29-2.114-4.273ZM9.73 7.235a3.769 3.769 0 0 1-.991-1.133 5.366 5.366 0 0 0-2.114 4.273v4.5A5.37 5.37 0 0 0 9 19.335V17.5c0-.056.002-.111.005-.167a3.86 3.86 0 0 1-.88-2.458v-4.5a3.87 3.87 0 0 1 1.604-3.14ZM8.325 5H5.5a.75.75 0 0 1 0-1.5h2.825a3.767 3.767 0 0 0 0 1.5Z"
    />
  </svg>
);
export default SvgScoter;
