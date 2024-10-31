import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeft = ({
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
      d="M3.578 12.498c0 .193.073.385.22.532l5.996 6a.75.75 0 0 0 1.06-1.06l-4.72-4.724H20.33a.75.75 0 0 0 0-1.5H6.143l4.713-4.716a.75.75 0 1 0-1.061-1.06l-5.95 5.953a.748.748 0 0 0-.266.573v.002Z"
    />
  </svg>
);
export default SvgArrowLeft;
