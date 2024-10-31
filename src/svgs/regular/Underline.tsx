import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnderline = ({
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
      d="M6.5 2.75a.75.75 0 0 0-1.5 0v8.75a7.5 7.5 0 0 0 15 0V2.75a.75.75 0 0 0-1.5 0v8.75a6 6 0 0 1-12 0V2.75ZM5.75 20.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.75Z"
    />
  </svg>
);
export default SvgUnderline;
