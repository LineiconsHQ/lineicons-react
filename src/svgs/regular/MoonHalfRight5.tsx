import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoonHalfRight5 = ({
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
      fillRule="evenodd"
      d="M13.744 3.17a.75.75 0 0 0 .094.895A7.252 7.252 0 0 1 3.589 14.314a.75.75 0 0 0-1.236.74c1.13 4.286 5.03 7.446 9.67 7.446 5.523 0 10-4.477 10-10 0-4.64-3.16-8.541-7.445-9.67a.75.75 0 0 0-.834.34Zm2.678 2.055A8.5 8.5 0 1 1 4.748 16.9 8.752 8.752 0 0 0 16.423 5.225Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoonHalfRight5;
