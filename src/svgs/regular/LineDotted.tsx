import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineDotted = ({
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
      d="M3.252 11.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM10.651 11.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM13.45 12a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM6.951 11.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM17.15 12a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM21.75 11.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"
    />
  </svg>
);
export default SvgLineDotted;
