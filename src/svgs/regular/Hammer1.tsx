import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHammer1 = ({
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
      d="M6.664 2a.75.75 0 0 0-.75.75v4.184c0 .414.336.75.75.75h3.716l-.557 11.961A2.25 2.25 0 0 0 12.07 22h.857a2.25 2.25 0 0 0 2.248-2.355l-.557-11.961h3.717a.75.75 0 0 0 .75-.75V6.75A4.75 4.75 0 0 0 14.335 2h-7.67Zm6.453 5.684.56 12.031a.75.75 0 0 1-.75.785h-.857a.75.75 0 0 1-.749-.785l.56-12.031h1.236Zm4.419-1.5H7.415V3.5h6.92a3.251 3.251 0 0 1 3.2 2.684Z"
    />
  </svg>
);
export default SvgHammer1;
