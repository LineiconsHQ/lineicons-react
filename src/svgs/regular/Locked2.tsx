import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocked2 = ({
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
      d="M10.5 16a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0V16Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M6.75 7.25a5.25 5.25 0 1 1 10.5 0v1.875h1.25a2.25 2.25 0 0 1 2.25 2.25v5.875A4.75 4.75 0 0 1 16 22H8a4.75 4.75 0 0 1-4.75-4.75v-5.875a2.25 2.25 0 0 1 2.25-2.25h1.25V7.25Zm1.5 1.875h7.5V7.25a3.75 3.75 0 1 0-7.5 0v1.875Zm-2.75 1.5a.75.75 0 0 0-.75.75v5.875A3.25 3.25 0 0 0 8 20.5h8a3.25 3.25 0 0 0 3.25-3.25v-5.875a.75.75 0 0 0-.75-.75h-13Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocked2;
