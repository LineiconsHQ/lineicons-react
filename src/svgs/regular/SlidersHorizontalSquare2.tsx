import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlidersHorizontalSquare2 = ({
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
      d="M14.313 7a.75.75 0 0 0-1.5 0v1.25h-5.5a.75.75 0 1 0 0 1.5h5.5V11a.75.75 0 0 0 1.5 0V7ZM17.313 8.25h-1.5v1.5h1.5a.75.75 0 0 0 0-1.5ZM9.56 12.25a.75.75 0 0 0-.75.75v1.25H7.313a.75.75 0 0 0 0 1.5h1.499V17a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75ZM11.809 14.25h5.504a.75.75 0 0 1 0 1.5h-5.504v-1.5Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M3.563 5.5a2.25 2.25 0 0 1 2.25-2.25h13a2.25 2.25 0 0 1 2.25 2.25v13a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25v-13Zm2.25-.75a.75.75 0 0 0-.75.75v13c0 .414.335.75.75.75h13a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75h-13Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlidersHorizontalSquare2;
