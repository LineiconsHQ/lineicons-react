import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShiftRight = ({
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
      d="M19.578 20.5a.75.75 0 0 0 1.5 0v-16a.75.75 0 0 0-1.5 0v16ZM17.078 12.499c0 .216-.091.41-.237.547l-4.607 4.61a.75.75 0 1 1-1.061-1.06l3.345-3.347H4.328a.75.75 0 0 1 0-1.5h10.186l-3.341-3.343a.75.75 0 0 1 1.061-1.06l4.572 4.575a.748.748 0 0 1 .272.578Z"
    />
  </svg>
);
export default SvgShiftRight;
