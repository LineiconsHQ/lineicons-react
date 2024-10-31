import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDollar = ({
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
      d="M12.999 3a.75.75 0 0 0-1.5 0v1.573H9.703a2.25 2.25 0 0 0-2.25 2.25v3.016c0 .976.628 1.84 1.556 2.14l6.02 1.952c.309.1.518.389.518.714v3.016a.75.75 0 0 1-.75.75H9.703a.75.75 0 0 1-.75-.75v-1.124a.75.75 0 1 0-1.5 0v1.124a2.25 2.25 0 0 0 2.25 2.25h1.796V21.5a.75.75 0 0 0 1.5 0v-1.588h1.798a2.25 2.25 0 0 0 2.25-2.25v-3.016a2.25 2.25 0 0 0-1.556-2.14l-6.02-1.952a.75.75 0 0 1-.518-.714V6.823a.75.75 0 0 1 .75-.75h5.094a.75.75 0 0 1 .75.75v1.124a.75.75 0 0 0 1.5 0V6.823a2.25 2.25 0 0 0-2.25-2.25h-1.798V3Z"
    />
  </svg>
);
export default SvgDollar;
