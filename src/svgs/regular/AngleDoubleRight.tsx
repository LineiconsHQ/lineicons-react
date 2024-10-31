import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngleDoubleRight = ({
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
      d="M6.423 18.22a.75.75 0 1 0 1.06 1.06l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 0 0-1.06 1.06l5.72 5.72-5.72 5.72Z"
    />
    <path
      fill="#323544"
      d="M10.923 18.22a.75.75 0 1 0 1.06 1.06l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 0 0-1.06 1.06l5.72 5.72-5.72 5.72Z"
    />
  </svg>
);
export default SvgAngleDoubleRight;
