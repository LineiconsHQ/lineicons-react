import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiamonds2 = ({
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
      d="M5.165 4.46A2.25 2.25 0 0 1 7.16 3.25h9.681a2.25 2.25 0 0 1 1.995 1.21l2.111 4.045a2.25 2.25 0 0 1-.283 2.502l-8.093 9.48a.75.75 0 0 1-1.14 0l-8.093-9.48a2.25 2.25 0 0 1-.284-2.502L5.165 4.46Zm1.995.29a.75.75 0 0 0-.665.403L4.384 9.2a.75.75 0 0 0 .094.834l7.523 8.812 7.522-8.812a.75.75 0 0 0 .094-.834l-2.11-4.046a.75.75 0 0 0-.666-.403H7.16Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDiamonds2;
