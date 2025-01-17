import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmex = ({
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
      d="M3.904 14.024h.94l.29-.944h1.78l.292.944h1.78v-3.125l1.133 3.125h.841l1.133-3.028v3.028h.81V9.857h-1.328l-1.035 2.8-1.036-2.8H8.047v3.971L6.591 9.857H5.458l-1.554 4.167Zm16.096 0-1.554-2.084L20 9.857h-1.133l-1.036 1.237-.841-1.237H13.59v4.167h3.302l1.035-1.368 1.036 1.368H20Zm-14.024-3.32.518 1.432H5.458l.518-1.433Zm8.424.097h2.072l.841 1.14-.938 1.236H14.4v-.814h1.878v-.846H14.4v-.716Z"
    />
    <path
      fill="#323544"
      d="M19.381 6.047c.789 0 1.428.64 1.428 1.429v9.048c0 .789-.64 1.428-1.428 1.428H4.619c-.789 0-1.429-.64-1.429-1.428V7.476c0-.789.64-1.429 1.429-1.429h14.762ZM4.619 4.857A2.619 2.619 0 0 0 2 7.476v9.048a2.619 2.619 0 0 0 2.619 2.619h14.762A2.619 2.619 0 0 0 22 16.523V7.477a2.619 2.619 0 0 0-2.619-2.62H4.619Z"
    />
  </svg>
);
export default SvgAmex;
