import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStopwatch = ({
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
      d="M9.749 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM11.248 13.25a.75.75 0 0 0 1.5 0V8.496a.75.75 0 1 0-1.5 0v4.756Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M11.999 4.502a8.749 8.749 0 1 0 6.694 3.115l1.339-1.339a.75.75 0 0 0-1.061-1.06l-1.339 1.338A8.714 8.714 0 0 0 12 4.502ZM4.75 13.25a7.249 7.249 0 1 1 14.498 0 7.249 7.249 0 0 1-14.498 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopwatch;
