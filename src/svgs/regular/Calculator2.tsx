import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculator2 = ({
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
      fill="#343C54"
      d="M7.5 5.75A.75.75 0 0 1 8.25 5h7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-1.5ZM8.5 9.85a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM11.1 10.75a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM15.5 9.85a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM7.6 14.25a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM12 13.35a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM14.6 14.25a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM8.5 16.85a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM11.1 17.75a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM15.5 16.85a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"
    />
    <path
      fill="#343C54"
      fillRule="evenodd"
      d="M4.5 4.25A2.25 2.25 0 0 1 6.75 2h10.5a2.25 2.25 0 0 1 2.25 2.25v15.5A2.25 2.25 0 0 1 17.25 22H6.75a2.25 2.25 0 0 1-2.25-2.25V4.25Zm2.25-.75a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H6.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalculator2;
