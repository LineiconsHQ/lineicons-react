import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPimjoSymbol = ({
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
      d="M12 2A7.504 7.504 0 0 0 4.49 9.508V22l4.65-5.542a7.506 7.506 0 0 0 10.367-6.95A7.499 7.499 0 0 0 11.999 2Zm0 11.05a3.544 3.544 0 0 1-3.542-3.542 3.539 3.539 0 0 1 3.541-3.541 3.539 3.539 0 0 1 3.542 3.541A3.539 3.539 0 0 1 12 13.05Z"
    />
  </svg>
);
export default SvgPimjoSymbol;
