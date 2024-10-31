import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdobe = ({
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
      d="M14.58 3.629H22v16.645L14.58 3.63Zm-5.16 0H2v16.645L9.42 3.63ZM12 9.855l4.645 10.516h-3.129l-1.355-3.355h-3.42L12 9.855Z"
    />
  </svg>
);
export default SvgAdobe;
