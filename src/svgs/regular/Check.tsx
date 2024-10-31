import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheck = ({
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
      d="M19.28 6.763a.75.75 0 0 1 0 1.06L9.863 17.24a.75.75 0 0 1-1.06 0L4.72 13.157a.75.75 0 0 1 1.06-1.06l3.553 3.552 8.887-8.886a.75.75 0 0 1 1.06 0Z"
    />
  </svg>
);
export default SvgCheck;
