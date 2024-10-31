import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDashboardSquare1 = ({
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
      d="M5.604 3.25a2.25 2.25 0 0 0-2.25 2.25V9a2.25 2.25 0 0 0 2.25 2.25h3.5A2.25 2.25 0 0 0 11.354 9V5.5a2.25 2.25 0 0 0-2.25-2.25h-3.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V5.5ZM5.604 12.75A2.25 2.25 0 0 0 3.354 15v3.5a2.25 2.25 0 0 0 2.25 2.25h3.5a2.25 2.25 0 0 0 2.25-2.25V15a2.25 2.25 0 0 0-2.25-2.25h-3.5ZM4.854 15a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V15ZM12.854 5.5a2.25 2.25 0 0 1 2.25-2.25h3.5a2.25 2.25 0 0 1 2.25 2.25V9a2.25 2.25 0 0 1-2.25 2.25h-3.5A2.25 2.25 0 0 1 12.854 9V5.5Zm2.25-.75a.75.75 0 0 0-.75.75V9c0 .414.335.75.75.75h3.5a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75h-3.5ZM15.104 12.75a2.25 2.25 0 0 0-2.25 2.25v3.5a2.25 2.25 0 0 0 2.25 2.25h3.5a2.25 2.25 0 0 0 2.25-2.25V15a2.25 2.25 0 0 0-2.25-2.25h-3.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V15Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDashboardSquare1;
