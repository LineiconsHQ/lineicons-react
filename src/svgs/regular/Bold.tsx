import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBold = ({
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
      d="M3.5 2.75A.75.75 0 0 1 4.25 2h8.875a5.375 5.375 0 0 1 3.352 9.577A5.377 5.377 0 0 1 14.625 22H4.25a.75.75 0 0 1 0-1.5H5v-17h-.75a.75.75 0 0 1-.75-.75Zm3 8.5h6.625a3.875 3.875 0 0 0 0-7.75H6.5v7.75Zm0 1.5v7.75h8.125a3.875 3.875 0 0 0 0-7.75H6.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBold;
