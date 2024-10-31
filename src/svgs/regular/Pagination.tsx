import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPagination = ({
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
      d="M2.72 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L4.31 12l3.47-3.47a.75.75 0 1 0-1.06-1.06l-4 4ZM22.28 12.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L20.69 12l-3.47 3.47a.75.75 0 1 0 1.06 1.06l4-4Z"
    />
    <path
      fill="#323544"
      d="M8.5 11.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM11.6 12a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM15.6 12a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0Z"
    />
  </svg>
);
export default SvgPagination;
