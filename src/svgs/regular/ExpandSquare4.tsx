import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpandSquare4 = ({
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
      d="M3.563 5.5a2.25 2.25 0 0 1 2.25-2.25h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 0-.75.75V8a.75.75 0 0 1-1.5 0V5.5ZM15.561 4a.75.75 0 0 1 .75-.75h2.5a2.25 2.25 0 0 1 2.25 2.25V8a.75.75 0 1 1-1.5 0V5.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 1-.75-.75ZM4.313 15.25a.75.75 0 0 1 .75.75v2.5c0 .414.335.75.75.75h2.5a.75.75 0 0 1 0 1.5h-2.5a2.25 2.25 0 0 1-2.25-2.25V16a.75.75 0 0 1 .75-.75ZM20.311 15.25a.75.75 0 0 1 .75.75v2.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75V16a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);
export default SvgExpandSquare4;
