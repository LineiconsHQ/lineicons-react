import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlickr = ({
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
      d="M10.645 12A4.323 4.323 0 1 1 2 12a4.323 4.323 0 0 1 8.645 0ZM22 12a4.323 4.323 0 1 1-8.645 0A4.323 4.323 0 0 1 22 12Z"
    />
  </svg>
);
export default SvgFlickr;
