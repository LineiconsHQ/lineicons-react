import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWheelbarrowEmpty = ({
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
      d="M2 5.207a.75.75 0 0 1 .75-.75h.684a2.25 2.25 0 0 1 2.25 2.25v.4H21.25a.75.75 0 0 1 .621 1.17l-3.29 4.855a3.48 3.48 0 1 1-5.333 3.35l-4.222-1.144-.91 2.81a2.015 2.015 0 0 1-3.93-.62V6.706a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 1-.75-.75Zm5.575 9.738-1.89-.512v3.094a.515.515 0 0 0 1.003.159l.887-2.74Zm5.823.024a3.482 3.482 0 0 1 3.726-2.36l2.711-4.003H5.685v4.273l7.713 2.09Zm3.305-.886a1.98 1.98 0 1 0 0 3.96 1.98 1.98 0 0 0 0-3.96Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWheelbarrowEmpty;
