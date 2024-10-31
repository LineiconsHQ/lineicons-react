import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServiceBell1 = ({
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
      d="M11.25 7.532V6H10a.75.75 0 0 1 0-1.5h4A.75.75 0 0 1 14 6h-1.25v1.532a8.75 8.75 0 0 1 8 8.718V18h.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.5v-1.75a8.75 8.75 0 0 1 8-8.718ZM4.75 18h14.5v-1.75a7.25 7.25 0 1 0-14.5 0V18Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgServiceBell1;
