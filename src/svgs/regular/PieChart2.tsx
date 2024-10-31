import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPieChart2 = ({
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.75 1.533v8.156l-5.767 5.768A8.5 8.5 0 0 1 11.25 3.533ZM6.543 18.517l5.656-5.655 7.564 2.606A8.502 8.502 0 0 1 12 20.5a8.466 8.466 0 0 1-5.457-1.983Zm13.708-4.467-7.501-2.585V3.533A8.5 8.5 0 0 1 20.25 14.05Z"
    />
  </svg>
);
export default SvgPieChart2;
