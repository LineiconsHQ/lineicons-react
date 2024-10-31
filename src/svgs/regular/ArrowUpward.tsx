import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpward = ({
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
      d="M11.755 4.013a.748.748 0 0 1 .57-.263h.001c.193 0 .385.073.532.22l6 5.995a.75.75 0 0 1-1.06 1.062l-4.723-4.72V20.5a.75.75 0 0 1-1.5 0V6.313l-4.717 4.714a.75.75 0 0 1-1.06-1.062l5.957-5.952Z"
    />
  </svg>
);
export default SvgArrowUpward;
