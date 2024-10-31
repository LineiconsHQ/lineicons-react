import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineHeight = ({
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
      d="M12.754 4a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-6.996a.75.75 0 0 1-.75-.75ZM20.5 13.917h-6.996a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5ZM13.504 19.25a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5h-6.996ZM20.5 10.083h-6.996a.75.75 0 0 1 0-1.5H20.5a.75.75 0 0 1 0 1.5ZM9.974 16.47l-1.722 1.72V5.81l1.722 1.72a.75.75 0 0 0 1.06-1.06l-3.002-3a.75.75 0 0 0-1.06 0l-3.002 3a.75.75 0 0 0 1.06 1.06l1.722-1.72v12.38L5.03 16.47a.75.75 0 0 0-1.06 1.06l3.002 3a.75.75 0 0 0 1.06 0l3.002-3a.75.75 0 0 0-1.06-1.06Z"
    />
  </svg>
);
export default SvgLineHeight;
