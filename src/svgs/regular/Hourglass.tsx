import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHourglass = ({
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
      d="M4 3.25a.75.75 0 0 0 0 1.5h1.25V6a6.75 6.75 0 0 0 3.655 6 6.75 6.75 0 0 0-3.655 6v1.25H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V18a6.75 6.75 0 0 0-3.655-6 6.75 6.75 0 0 0 3.655-6V4.75H20a.75.75 0 0 0 0-1.5H4Zm7.99 9.5h.02A5.25 5.25 0 0 1 17.25 18v1.25H6.75V18a5.25 5.25 0 0 1 5.24-5.25Zm.02-1.5h-.02A5.25 5.25 0 0 1 6.75 6V4.75h10.5V6a5.25 5.25 0 0 1-5.24 5.25Z"
    />
  </svg>
);
export default SvgHourglass;
