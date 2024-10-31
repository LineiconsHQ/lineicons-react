import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPowerButton = ({
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
      d="M11.25 13.42a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0v10.67Z"
    />
    <path
      fill="#323544"
      d="M19.625 12.875a7.628 7.628 0 0 0-5.375-7.288V4.03c3.951 1.003 6.875 4.583 6.875 8.846a9.125 9.125 0 0 1-18.25 0c0-4.263 2.924-7.844 6.875-8.846v1.558a7.625 7.625 0 1 0 9.875 7.287Z"
    />
  </svg>
);
export default SvgPowerButton;
