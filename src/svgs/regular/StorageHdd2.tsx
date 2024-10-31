import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStorageHdd2 = ({
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
      d="M10.787 15.613a5.375 5.375 0 1 0-2.103-1.007l-1.348 1.846a1.424 1.424 0 1 0 2.452 1.416l.999-2.255ZM12 6.5a3.875 3.875 0 1 1-.59 7.705l.925-2.088a.75.75 0 0 0-1.292-.746l-1.475 2.021A3.875 3.875 0 0 1 12 6.5Z"
    />
    <path
      fill="#323544"
      d="M18 2a2.25 2.25 0 0 1 2.25 2.25v15.5A2.25 2.25 0 0 1 18 22H6a2.25 2.25 0 0 1-2.25-2.25V4.25A2.25 2.25 0 0 1 6 2h12Zm.75 2.25A.75.75 0 0 0 18 3.5H6a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V4.25Z"
    />
  </svg>
);
export default SvgStorageHdd2;
