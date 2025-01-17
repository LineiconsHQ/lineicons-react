import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdge = ({
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
      d="M21.256 11.482c0-1.774-.323-3.386-1.129-4.934C18.482 3.58 15.547 2 12.13 2c-5.612 0-8.773 4.225-9.386 8.837 1.71-2.483 4.709-4.902 8.837-5.031 0 0 4.451 0 4 4.225H8.549c.225-1.484.71-2.355 1.354-3.16-3.032 1.45-4.902 3.902-4.838 7.61.033 2.871 2.032 5.838 4.838 6.935 3.354 1.258 7.74.258 9.644-.871V16.32c-3.226 2.258-10.934 2.451-10.934-2.71h12.61v-2.128h.033Z"
    />
  </svg>
);
export default SvgEdge;
