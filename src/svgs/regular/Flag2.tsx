import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M6.273 3.41a.75.75 0 1 0-1.5 0v18.5a.75.75 0 0 0 1.5 0v-6h5.25a2.25 2.25 0 0 0 2.25 2.25h5.25a.75.75 0 0 0 .684-1.058l-1.973-4.384a.75.75 0 0 1 0-.616l1.973-4.384a.75.75 0 0 0-.684-1.058h-6a2.25 2.25 0 0 0-2.25-2.25h-4.5v-1Zm0 2.5h4.5a.75.75 0 0 1 .75.75v7.75h-5.25v-8.5Zm6.75 2.25h4.84l-1.497 3.327a2.25 2.25 0 0 0 0 1.847l1.497 3.326h-4.09a.75.75 0 0 1-.75-.75V8.16Z"
    />
  </svg>
);
export default SvgFlag2;
