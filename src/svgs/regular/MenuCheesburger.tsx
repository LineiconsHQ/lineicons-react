import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuCheesburger = ({
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
      d="M4.32 4.75a1.25 1.25 0 0 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5h-.01ZM8.31 5.25a.75.75 0 1 0 0 1.5h12a.75.75 0 1 0 0-1.5h-12ZM8.31 17.25a.75.75 0 0 0 0 1.5h12a.75.75 0 1 0 0-1.5h-12ZM7.56 12a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM3.07 12c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25ZM4.32 16.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5h-.01Z"
    />
  </svg>
);
export default SvgMenuCheesburger;
