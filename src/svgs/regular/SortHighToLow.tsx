import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortHighToLow = ({
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
      d="M13.504 3.25a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5h-6.996ZM13.504 15.417a.75.75 0 0 1 0-1.5H17.5a.75.75 0 0 1 0 1.5h-3.996ZM16 20.75h-2.496a.75.75 0 0 1 0-1.5H16a.75.75 0 0 1 0 1.5ZM13.504 10.083H19a.75.75 0 0 0 0-1.5h-5.496a.75.75 0 0 0 0 1.5ZM8.252 18.19l1.722-1.72a.75.75 0 0 1 1.06 1.06l-3.002 3a.75.75 0 0 1-1.06 0l-3.002-3a.75.75 0 0 1 1.06-1.06l1.722 1.72V4.5a.75.75 0 1 1 1.5 0v13.69Z"
    />
  </svg>
);
export default SvgSortHighToLow;
