import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpacex = ({
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
      d="M4.426 11H2.278l-.111.223 2.37 1.74c.445-.259.944-.518 1.463-.777m.352 2.074 2.092 1.518h2.149l.092-.204-3.11-2.277c-.408.314-.834.63-1.223.963Z"
    />
    <path
      fill="#323544"
      d="M4.111 15.778H2.167L2 15.518c1.315-1.277 7.204-6.721 20-7.295 0 0-10.722.37-17.889 7.555Z"
    />
  </svg>
);
export default SvgSpacex;
