import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowBothDirectionVertical1 = ({
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
      d="M11.578 5.064V19.94l-2.72-2.718a.75.75 0 1 0-1.06 1.061l4 3.997a.75.75 0 0 0 1.06 0l4-3.997a.75.75 0 0 0-1.06-1.06l-2.72 2.717V5.064l2.72 2.718a.75.75 0 1 0 1.06-1.061l-3.97-3.967a.748.748 0 0 0-1.122.002L7.798 6.72a.75.75 0 1 0 1.06 1.06l2.72-2.717Z"
    />
  </svg>
);
export default SvgArrowBothDirectionVertical1;
