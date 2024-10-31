import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKnifeFork1 = ({
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
      d="M4.5 5.75A3.75 3.75 0 0 1 8.25 2H9a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0v-6.5h-1.5A2.25 2.25 0 0 1 4.5 12.5V5.75ZM8.25 3.5A2.25 2.25 0 0 0 6 5.75v6.75c0 .414.336.75.75.75h1.5V3.5Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M13.5 2.75a.75.75 0 0 0-1.5 0v5a3.751 3.751 0 0 0 3 3.675v9.825a.75.75 0 0 0 1.5 0v-9.825c1.712-.348 3-1.86 3-3.675v-5a.75.75 0 0 0-1.5 0v5a2.25 2.25 0 0 1-4.5 0v-5Z"
    />
    <path
      fill="#323544"
      d="M15.75 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);
export default SvgKnifeFork1;
