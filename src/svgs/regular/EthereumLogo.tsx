import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEthereumLogo = ({
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
      d="M6.093 12.185 11.998 2l5.907 10.185-5.907 3.63-5.905-3.63Z"
    />
    <path
      fill="#323544"
      d="M6.093 13.35 11.998 22l5.91-8.65-5.91 3.627-5.905-3.627Z"
    />
  </svg>
);
export default SvgEthereumLogo;
