import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPause = ({
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
      fillRule="evenodd"
      d="M7 3.25A2.25 2.25 0 0 0 4.75 5.5v13A2.25 2.25 0 0 0 7 20.75h1.75A2.25 2.25 0 0 0 11 18.5v-13a2.25 2.25 0 0 0-2.25-2.25H7ZM6.25 5.5A.75.75 0 0 1 7 4.75h1.75a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-13ZM16.25 3.25A2.25 2.25 0 0 0 14 5.5v13a2.25 2.25 0 0 0 2.25 2.25H18a2.25 2.25 0 0 0 2.25-2.25v-13A2.25 2.25 0 0 0 18 3.25h-1.75ZM15.5 5.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-1.75a.75.75 0 0 1-.75-.75v-13Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPause;
