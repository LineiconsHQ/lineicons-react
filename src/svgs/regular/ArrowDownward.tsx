import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownward = ({
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
      d="M11.755 20.989c.137.16.342.262.57.262h.001a.748.748 0 0 0 .532-.22l6-5.995a.75.75 0 0 0-1.06-1.061l-4.723 4.72V4.5a.75.75 0 0 0-1.5 0v14.188l-4.717-4.713a.75.75 0 1 0-1.06 1.06l5.957 5.954Z"
    />
  </svg>
);
export default SvgArrowDownward;
