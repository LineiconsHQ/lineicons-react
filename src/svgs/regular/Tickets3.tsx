import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTickets3 = ({
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
      d="M9.57 6.897a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM10.47 10.598a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0ZM9.57 12.498a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM10.47 16.198a.9.9 0 1 0-1.8 0 .9.9 0 0 0 1.8 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.919 5.066a.75.75 0 0 1 .75-.75h12.663a.75.75 0 0 1 .75.75 2.419 2.419 0 0 0 2.418 2.42.75.75 0 0 1 .75.75v7.527a.75.75 0 0 1-.75.75 2.418 2.418 0 0 0-2.418 2.418.75.75 0 0 1-.75.75H5.669a.75.75 0 0 1-.75-.75A2.419 2.419 0 0 0 2.5 16.513a.75.75 0 0 1-.75-.75V8.235a.75.75 0 0 1 .75-.75 2.42 2.42 0 0 0 2.419-2.419Zm1.428.75A3.923 3.923 0 0 1 3.25 8.914v6.17a3.923 3.923 0 0 1 3.097 3.097h11.307a3.923 3.923 0 0 1 3.096-3.097v-6.17a3.923 3.923 0 0 1-3.096-3.098H6.347Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTickets3;
