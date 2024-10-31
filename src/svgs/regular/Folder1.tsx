import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolder1 = ({
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
      d="M2 6a2.25 2.25 0 0 1 2.25-2.25H8.5a2.25 2.25 0 0 1 1.8.9l1.35 1.8a.75.75 0 0 0 .6.3h7.5A2.25 2.25 0 0 1 22 9v9a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 18V6Zm2.25-.75A.75.75 0 0 0 3.5 6v12c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-7.5a2.25 2.25 0 0 1-1.8-.9L9.1 5.55a.75.75 0 0 0-.6-.3H4.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolder1;
