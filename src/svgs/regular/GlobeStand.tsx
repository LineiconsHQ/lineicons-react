import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlobeStand = ({
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
      d="M8.267 2.1a8.63 8.63 0 0 0 2.997 16.002.75.75 0 0 0-.015.148v2.25h-4a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-4v-2.25a.73.73 0 0 0-.001-.047 8.592 8.592 0 0 0 4.149-1.156.75.75 0 0 0-.75-1.299A7.13 7.13 0 1 1 9.017 3.4a.75.75 0 1 0-.75-1.3Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M9.793 4.743a5.58 5.58 0 1 0 5.58 9.664 5.58 5.58 0 0 0-5.58-9.664Zm-.743 6.871a4.08 4.08 0 1 1 7.065-4.079 4.08 4.08 0 0 1-7.065 4.08Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGlobeStand;
