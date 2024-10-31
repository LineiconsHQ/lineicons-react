import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBook1 = ({
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
      d="M8.25 5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-7.5ZM9 9V6.5h6V9H9Z"
    />
    <path
      fill="#323544"
      d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25V19a3 3 0 0 0 3 3h11.25a.75.75 0 0 0 0-1.5H18v-3h.75a.75.75 0 0 0 .75-.75V4.25A2.25 2.25 0 0 0 17.25 2H6.75ZM18 16H7.5c-.546 0-1.059.146-1.5.401V4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75V16Zm-1.5 1.5v3h-9a1.5 1.5 0 0 1 0-3h9Z"
    />
  </svg>
);
export default SvgBook1;
