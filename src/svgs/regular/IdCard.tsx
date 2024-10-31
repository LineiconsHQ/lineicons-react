import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIdCard = ({
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
      d="M6.837 9.861a1.616 1.616 0 1 1 3.232 0 1.616 1.616 0 0 1-3.232 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M7.24 12.087A2.238 2.238 0 0 0 5 14.325v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.238 2.238 0 0 0-2.238-2.238H7.239ZM6.5 14.325c0-.407.33-.738.738-.738h2.429c.407 0 .738.33.738.738v.18H6.501v-.18Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M19 10.501a.75.75 0 0 1-.75.75h-4.1a.75.75 0 0 1 0-1.5h4.1a.75.75 0 0 1 .75.75ZM16.15 14.251a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.25 4.501A2.25 2.25 0 0 0 2 6.751v10.5a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-10.5a2.25 2.25 0 0 0-2.25-2.25H4.25Zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-10.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIdCard;
