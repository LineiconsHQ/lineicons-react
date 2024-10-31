import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenToSquare = ({
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
      fillRule="evenodd"
      d="M20.875 2.513a1.75 1.75 0 0 0-2.475 0L13.242 7.67a2.25 2.25 0 0 0-.646 1.349l-.19 1.747a.75.75 0 0 0 .827.826l1.747-.189a2.25 2.25 0 0 0 1.35-.646L21.486 5.6a1.75 1.75 0 0 0 0-2.475l-.612-.612Zm-2.277 1.923.966.966-4.296 4.296a.75.75 0 0 1-.45.215l-.82.089.09-.82a.75.75 0 0 1 .215-.45l4.295-4.296Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M5.5 3.25h10.041l-1.5 1.5H5.5a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V9.958l1.5-1.5V18.5a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 5.5 3.25Z"
    />
  </svg>
);
export default SvgPenToSquare;
