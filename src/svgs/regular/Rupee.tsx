import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRupee = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.918 4.251a.75.75 0 0 1 .75-.75h11.165a.75.75 0 0 1 0 1.5h-3.43a5.385 5.385 0 0 1 1.611 3.146h1.819a.75.75 0 0 1 0 1.5h-1.818a5.4 5.4 0 0 1-5.347 4.65H8.86l6.916 5.36a.75.75 0 0 1-.92 1.186L6.21 14.141a.75.75 0 0 1 .459-1.343h4a3.9 3.9 0 0 0 3.827-3.15H6.668a.75.75 0 0 1 0-1.5h7.826A3.9 3.9 0 0 0 10.668 5h-4a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
export default SvgRupee;
