import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirectionLtr = ({
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
      d="M19.571 20.063a.749.749 0 0 0 0-1.13l-2.965-2.967a.75.75 0 0 0-1.06 1.06l1.72 1.722H5.578a.75.75 0 0 0 0 1.5h11.688l-1.72 1.722a.75.75 0 1 0 1.06 1.06l2.965-2.967ZM13.828 13.496V4h-3v9.496a.75.75 0 0 1-1.5 0V9.25H8.203a3.375 3.375 0 0 1 0-6.75h10.875a.75.75 0 0 1 0 1.5h-3.75v9.496a.75.75 0 0 1-1.5 0Zm-4.5-5.746V4H8.203a1.875 1.875 0 0 0 0 3.75h1.125Z"
    />
  </svg>
);
export default SvgDirectionLtr;
