import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCar2 = ({
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
      d="M10.376 2a.75.75 0 0 0-.67.414l-.42.836H7.7a2.25 2.25 0 0 0-2.107 1.46L4.64 7.25H2.75a.75.75 0 0 0 0 1.5h1.33l-.044.116A2.251 2.251 0 0 0 2.5 11v7a1.5 1.5 0 0 0 3 0v-1h13v1a1.5 1.5 0 0 0 3 0v-7c0-.993-.643-1.835-1.535-2.134l-.043-.116h1.328a.75.75 0 0 0 0-1.5h-1.89l-.951-2.54a2.25 2.25 0 0 0-2.107-1.46h-1.589l-.419-.836a.75.75 0 0 0-.67-.414h-3.248ZM20 15.5H4V11a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 11v4.5ZM7.7 4.75h8.602a.75.75 0 0 1 .702.487L18.32 8.75H5.68l1.316-3.513A.75.75 0 0 1 7.7 4.75Z"
    />
  </svg>
);
export default SvgCar2;