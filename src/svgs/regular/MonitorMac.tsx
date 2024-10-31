import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonitorMac = ({
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
      d="M2 5.701a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 5.701V15.287a2.25 2.25 0 0 1-2.25 2.25h-5.5v1.512h1a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h1v-1.512h-5.5A2.25 2.25 0 0 1 2 15.287V5.7ZM12.75 19.05v-1.512h-1.5v1.512h1.5Zm1.5-3.012h5.5a.75.75 0 0 0 .75-.75V13.45h-17v1.836c0 .414.336.75.75.75h5.5v-.01h1.5v.01h1.5v-.01h1.5v.01ZM20.5 5.7a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v6.25h17v-6.25Z"
    />
  </svg>
);
export default SvgMonitorMac;
