import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfo = ({
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
      d="M12.314 6.19ZM11.563 18.89a.75.75 0 1 0 1.5 0V8.39a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h.75v9.75Z"
    />
  </svg>
);
export default SvgInfo;
