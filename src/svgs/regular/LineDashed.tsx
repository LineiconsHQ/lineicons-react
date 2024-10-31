import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineDashed = ({
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
      d="M2.5 12a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 12ZM9.667 12a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5h-4.167a.75.75 0 0 1-.75-.75ZM17.584 11.25a.75.75 0 0 0 0 1.5h4.166a.75.75 0 0 0 0-1.5h-4.166Z"
    />
  </svg>
);
export default SvgLineDashed;
