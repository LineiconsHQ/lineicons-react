import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngular = ({
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
      d="M10.306 12.548h3.42l-1.742-4.096-1.678 4.096ZM11.984 2 2.726 5.323l1.451 12.322L11.984 22l7.87-4.355 1.42-12.322L11.984 2Zm5.806 15.226h-2.193l-1.13-2.903H9.532l-1.194 2.903h-2.16l5.806-13 5.806 13Z"
    />
  </svg>
);
export default SvgAngular;
