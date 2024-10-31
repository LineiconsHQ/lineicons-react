import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHashnode = ({
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
      d="M3.388 8.691a4.644 4.644 0 0 0 0 6.622l5.307 5.308a4.696 4.696 0 0 0 6.64 0l5.29-5.308a4.696 4.696 0 0 0 0-6.64l-5.307-5.307a4.707 4.707 0 0 0-6.623 0L3.388 8.691Zm10.944 5.637a3.298 3.298 0 0 1-4.651 0 3.298 3.298 0 0 1 0-4.651 3.298 3.298 0 0 1 4.651 0 3.298 3.298 0 0 1 0 4.65Z"
    />
  </svg>
);
export default SvgHashnode;
