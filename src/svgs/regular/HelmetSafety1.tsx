import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelmetSafety1 = ({
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
      d="M13 2.5c1.2 0 2.18.939 2.246 2.122a9.004 9.004 0 0 1 6.254 8.573v1.414h.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h.25v-1.414a9.004 9.004 0 0 1 6.254-8.573A2.25 2.25 0 0 1 12 2.5h1ZM13 4h-1a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-1.5 0V6.216A7.503 7.503 0 0 0 5 13.196v1.413h3.75v-1.75a.75.75 0 0 1 1.5 0v1.75h1.5v-1.75a.75.75 0 0 1 1.5 0v1.75h1.5v-1.75a.75.75 0 0 1 1.5 0v1.75H20v-1.414a7.503 7.503 0 0 0-4.75-6.98V7.25a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 0 13 4Z"
    />
  </svg>
);
export default SvgHelmetSafety1;
