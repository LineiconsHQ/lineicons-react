import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignTextLeft = ({
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
      d="M4.023 4.5a.75.75 0 1 0 0 1.5h11a.75.75 0 1 0 0-1.5h-11ZM4.023 9a.75.75 0 1 0 0 1.5h16a.75.75 0 1 0 0-1.5h-16ZM4.023 18a.75.75 0 0 0 0 1.5h16a.75.75 0 1 0 0-1.5h-16ZM3.273 14.25a.75.75 0 0 1 .75-.75h11a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
export default SvgAlignTextLeft;
