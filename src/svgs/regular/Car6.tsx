import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCar6 = ({
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
      d="M7 12.125a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H7ZM14.75 12.875a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
    />
    <path
      fill="#323544"
      d="M7.699 3.25a2.25 2.25 0 0 0-2.107 1.46L3.706 9.746A3.74 3.74 0 0 0 2.5 12.5v.75c0 1.538.926 2.86 2.25 3.438V18a1.5 1.5 0 0 0 3 0v-1h8.5v1a1.5 1.5 0 0 0 3 0v-1.312a3.751 3.751 0 0 0 2.25-3.438v-.75a3.74 3.74 0 0 0-1.207-2.756L18.408 4.71A2.25 2.25 0 0 0 16.3 3.25H7.699ZM17.75 15.5H6.25A2.25 2.25 0 0 1 4 13.25v-.75a2.25 2.25 0 0 1 2.25-2.25h11.5A2.25 2.25 0 0 1 20 12.5v.75a2.25 2.25 0 0 1-2.25 2.25Zm.586-6.705a3.777 3.777 0 0 0-.586-.045H6.25c-.2 0-.395.016-.587.046l1.333-3.56A.75.75 0 0 1 7.7 4.75H16.3a.75.75 0 0 1 .702.487l1.333 3.558Z"
    />
  </svg>
);
export default SvgCar6;
