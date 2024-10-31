import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpinner3 = ({
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
      d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5.75.75 0 0 1 1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a.75.75 0 0 1 0 1.5Z"
    />
  </svg>
);
export default SvgSpinner3;
