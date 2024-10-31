import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDropbox = ({
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
      d="m2 13.032 5 3.193 5-3.193L7 9.87l-5 3.162ZM6.967 17.322 12 20.516l5-3.194-5-3.193-5.033 3.193ZM12 13.032l5 3.193 5-3.193-5-3.162-5 3.162ZM7 3.483 2 6.677 7 9.87l5-3.193-5-3.194ZM22 6.677l-5-3.194-5 3.194 5 3.193 5-3.193Z"
    />
  </svg>
);
export default SvgDropbox;
