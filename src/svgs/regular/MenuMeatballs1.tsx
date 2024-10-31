import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuMeatballs1 = ({
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
      d="M6.313 13.756a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75ZM18.313 13.756a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75ZM10.563 12.006a1.75 1.75 0 1 0 3.5 0v-.01a1.75 1.75 0 0 0-3.5 0v.01Z"
    />
  </svg>
);
export default SvgMenuMeatballs1;
