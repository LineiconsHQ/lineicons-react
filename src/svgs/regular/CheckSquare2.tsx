import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckSquare2 = ({
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
      d="M20.75 18.5V8.678l-1.5 1.5V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75h12.814l.98-.98c.09-.09.187-.172.288-.243A2.24 2.24 0 0 0 18.5 3.25h-13A2.25 2.25 0 0 0 3.25 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25Z"
    />
    <path
      fill="#323544"
      d="M20.484 6.519a.75.75 0 0 0-1.06-1.061l-7.494 7.493-3.353-3.353a.75.75 0 1 0-1.06 1.061l3.882 3.883a.75.75 0 0 0 1.061 0l8.024-8.023Z"
    />
  </svg>
);
export default SvgCheckSquare2;
