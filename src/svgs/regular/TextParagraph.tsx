import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextParagraph = ({
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
      d="M4.5 3.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-16ZM4.5 13.917a.75.75 0 0 0 0 1.5h16a.75.75 0 1 0 0-1.5h-16ZM3.75 20a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM4.5 8.583a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-16Z"
    />
  </svg>
);
export default SvgTextParagraph;
