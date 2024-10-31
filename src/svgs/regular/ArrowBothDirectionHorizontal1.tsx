import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowBothDirectionHorizontal1 = ({
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
      d="M22.068 11.934a.748.748 0 0 1 .002 1.13l-3.964 3.966a.75.75 0 0 1-1.06-1.06l2.718-2.72H4.888l2.718 2.72a.75.75 0 1 1-1.061 1.06l-3.997-4a.75.75 0 0 1 0-1.06l3.997-4a.75.75 0 0 1 1.061 1.06l-2.718 2.72h14.875l-2.718-2.72a.75.75 0 0 1 1.061-1.06l3.962 3.964Z"
    />
  </svg>
);
export default SvgArrowBothDirectionHorizontal1;
