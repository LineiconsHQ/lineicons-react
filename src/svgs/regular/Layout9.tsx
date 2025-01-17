import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayout9 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.523 3.25a2.25 2.25 0 0 0-2.25 2.25v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25v-13a2.25 2.25 0 0 0-2.25-2.25h-13Zm-.75 2.25a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v3.083h-14.5V5.5Zm0 4.583h3.833v9.167H5.523a.75.75 0 0 1-.75-.75v-8.417Zm5.333 0h9.167v3.833h-9.167v-3.833Zm0 5.333h9.167V18.5a.75.75 0 0 1-.75.75h-8.417v-3.834Z"
    />
  </svg>
);
export default SvgLayout9;
