import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignTextRight = ({
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
      d="M20.023 4.5a.75.75 0 1 1 0 1.5h-11a.75.75 0 1 1 0-1.5h11ZM20.023 9a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5h16ZM20.023 18a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5h16ZM20.773 14.25a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75Z"
    />
  </svg>
);
export default SvgAlignTextRight;
